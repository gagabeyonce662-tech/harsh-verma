import { readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const PUBLIC_DIR = join(process.cwd(), "public");
const MAX_MB = 5;
const MAX_BYTES = MAX_MB * 1024 * 1024;
const VIDEO_EXTENSIONS = new Set([".mp4", ".webm"]);

const toMb = (bytes) => (bytes / (1024 * 1024)).toFixed(2);

const allFiles = readdirSync(PUBLIC_DIR, { withFileTypes: true })
  .filter((entry) => entry.isFile())
  .map((entry) => entry.name);

const videos = allFiles
  .filter((file) => {
    const lower = file.toLowerCase();
    return [...VIDEO_EXTENSIONS].some((ext) => lower.endsWith(ext));
  })
  .map((file) => {
    const fullPath = join(PUBLIC_DIR, file);
    const sizeBytes = statSync(fullPath).size;
    return { file, sizeBytes };
  })
  .sort((a, b) => b.sizeBytes - a.sizeBytes);

if (videos.length === 0) {
  console.log("No video files found in public/.");
  process.exit(0);
}

console.log(`Video budget check (max ${MAX_MB} MB per file)\n`);

let failed = false;

for (const video of videos) {
  const overBudget = video.sizeBytes > MAX_BYTES;
  if (overBudget) {
    failed = true;
  }

  const status = overBudget ? "FAIL" : "PASS";
  console.log(`${status.padEnd(5)} ${video.file} (${toMb(video.sizeBytes)} MB)`);
}

if (failed) {
  console.error(
    "\nAt least one video exceeds budget. Re-encode with H.264 + faststart before release.",
  );
  process.exit(1);
}

console.log("\nAll video files are within budget.");
