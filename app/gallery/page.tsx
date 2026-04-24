type MediaType = "image" | "video";

type GalleryItem = {
  fileName: string;
  title: string;
  description: string;
  type: MediaType;
};

const items: GalleryItem[] = [
  {
    fileName: "Peterbilt done.jpeg",
    title: "Peterbilt - Completed Repair",
    description:
      "Final post-service condition of a Peterbilt truck after diagnostics and repair work.",
    type: "image",
  },
  {
    fileName: "Peterbilt engine.jpeg",
    title: "Peterbilt Engine Bay",
    description:
      "Engine bay capture used for inspection and component-level maintenance planning.",
    type: "image",
  },
  {
    fileName: "Engine surrounding.jpeg",
    title: "Engine Surrounding Area",
    description:
      "Context shot showing nearby assemblies and routing around the engine compartment.",
    type: "image",
  },
  {
    fileName: "Engine on the shop floor.jpeg",
    title: "Engine on Shop Floor",
    description:
      "Engine removed and staged for detailed teardown, cleaning, and rebuild operations.",
    type: "image",
  },
  {
    fileName: "Generic Engiine close up.jpeg",
    title: "Engine Close-Up",
    description:
      "Close inspection shot of key engine surfaces for wear, damage, and leak checks.",
    type: "image",
  },
  {
    fileName: "Caterpillar_engine.jpeg",
    title: "Caterpillar Engine - View 1",
    description:
      "Primary view of Caterpillar engine components during troubleshooting.",
    type: "image",
  },
  {
    fileName: "Caterpillar_engine_2.jpeg",
    title: "Caterpillar Engine - View 2",
    description:
      "Secondary angle of the Caterpillar engine for reference during service.",
    type: "image",
  },
  {
    fileName: "Engine piston holder.jpeg",
    title: "Engine Piston Holder",
    description:
      "Piston holding/bracket assembly captured for fitment and integrity verification.",
    type: "image",
  },
  {
    fileName: "Piston brackets.jpeg",
    title: "Piston Brackets",
    description:
      "Bracket detail image used for alignment checks and replacement assessment.",
    type: "image",
  },
  {
    fileName: "Chipped wire.jpeg",
    title: "Chipped Wire",
    description:
      "Wiring damage close-up showing insulation wear requiring repair or replacement.",
    type: "image",
  },
  {
    fileName: "Wire Broken CloseUp.mp4",
    title: "Broken Wire - Close-Up Video",
    description:
      "Short diagnostic video highlighting broken wire condition and movement around fault area.",
    type: "video",
  },
  {
    fileName: "Peterbilt_video.mp4",
    title: "Peterbilt Service Walkthrough",
    description:
      "Video clip of truck condition and service context, useful for before/after comparison.",
    type: "video",
  },
];

function assetSrc(fileName: string): string {
  return encodeURI(`/${fileName}`);
}

function GalleryGrid({ data }: { data: GalleryItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {data.map((item) => (
        <article
          key={item.fileName}
          className="rounded-lg border border-surface-container-high bg-surface-container-low overflow-hidden"
        >
          <div className="aspect-video bg-surface-container">
            {item.type === "video" ? (
              <video
                controls
                preload="metadata"
                className="h-full w-full object-cover"
              >
                <source src={assetSrc(item.fileName)} type="video/mp4" />
              </video>
            ) : (
              <img
                src={assetSrc(item.fileName)}
                alt={item.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            )}
          </div>
          <div className="p-4">
            <h3 className="font-headline text-lg text-on-surface">{item.title}</h3>
            <p className="mt-2 text-sm text-on-surface-variant">
              {item.description}
            </p>
            <p className="mt-3 text-xs text-on-surface-variant/80">
              File: <code>{item.fileName}</code>
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function GalleryPage() {
  const photos = items.filter((item) => item.type === "image");
  const videos = items.filter((item) => item.type === "video");

  return (
    <main className="min-h-screen bg-surface text-on-surface px-6 py-10 md:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10">
          <p className="font-headline text-sm uppercase tracking-[0.2em] text-primary">
            Diesel Performance
          </p>
          <h1 className="font-headline text-4xl mt-2">Gallery & Media Library</h1>
          <p className="mt-3 text-on-surface-variant max-w-3xl">
            All assets from the `public` folder are listed below with contextual
            descriptions for website use.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="font-headline text-2xl mb-4">Workshop Photos</h2>
          <GalleryGrid data={photos} />
        </section>

        <section className="mb-12">
          <h2 className="font-headline text-2xl mb-4">Videos</h2>
          <GalleryGrid data={videos} />
        </section>

      </div>
    </main>
  );
}
