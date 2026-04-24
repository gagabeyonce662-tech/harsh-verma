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
      "This image documents the truck after major repair and final quality checks. It highlights the completed condition that customers can expect once diagnostics, mechanical fixes, and post-service verification are finished. Ideal for showcasing workmanship quality and delivery readiness.",
    type: "image",
  },
  {
    fileName: "Peterbilt engine.jpeg",
    title: "Peterbilt Engine Bay",
    description:
      "A detailed view of the Peterbilt engine bay used during inspection and maintenance planning. The photo helps communicate component accessibility, routing conditions, and service scope before parts replacement or labor estimation begins.",
    type: "image",
  },
  {
    fileName: "Engine surrounding.jpeg",
    title: "Engine Surrounding Area",
    description:
      "This contextual shot captures surrounding assemblies, hoses, brackets, and wiring paths near the engine. It is useful for understanding interference points, identifying potential collateral issues, and planning safe disassembly and reassembly steps.",
    type: "image",
  },
  {
    fileName: "Engine on the shop floor.jpeg",
    title: "Engine on Shop Floor",
    description:
      "The engine has been removed and staged on the shop floor for in-depth teardown and evaluation. This stage is typically where technicians perform cleaning, internal inspection, and rebuild preparation with better access to all critical components.",
    type: "image",
  },
  {
    fileName: "Generic Engiine close up.jpeg",
    title: "Engine Close-Up",
    description:
      "A close-up inspection view showing detailed engine surfaces and contact areas. This type of image supports wear analysis, oil seep detection, and precision checks that are difficult to communicate through wide-angle shots.",
    type: "image",
  },
  {
    fileName: "Caterpillar_engine.jpeg",
    title: "Caterpillar Engine - View 1",
    description:
      "Primary troubleshooting perspective for a Caterpillar engine setup. It provides a clear overview of key external components and connection points used during root-cause diagnostics and structured repair sequencing.",
    type: "image",
  },
  {
    fileName: "Caterpillar_engine_2.jpeg",
    title: "Caterpillar Engine - View 2",
    description:
      "Secondary Caterpillar engine angle captured to complement the primary diagnostic view. Multiple viewpoints like this help technicians cross-reference part conditions, confirm fitment constraints, and reduce oversight during service.",
    type: "image",
  },
  {
    fileName: "Engine piston holder.jpeg",
    title: "Engine Piston Holder",
    description:
      "This image focuses on the piston holder assembly to verify structural integrity and alignment. It is particularly useful when validating mounting behavior, identifying stress signs, or documenting component condition before replacement decisions.",
    type: "image",
  },
  {
    fileName: "Piston brackets.jpeg",
    title: "Piston Brackets",
    description:
      "Detailed bracket-level capture used for alignment checks, surface condition assessment, and hardware verification. It supports accurate recommendations on whether a bracket can be reused, repaired, or should be replaced outright.",
    type: "image",
  },
  {
    fileName: "Chipped wire.jpeg",
    title: "Chipped Wire",
    description:
      "Close-up evidence of insulation damage on a wire segment, showing early-stage electrical risk. This kind of damage can lead to intermittent faults, shorts, or communication issues and is useful for explaining corrective wiring work to customers.",
    type: "image",
  },
  {
    fileName: "Wire Broken CloseUp.mp4",
    title: "Broken Wire - Close-Up Video",
    description:
      "A short diagnostic clip that demonstrates the exact break condition and movement in the affected wiring area. Video format helps show fault behavior more clearly than static photos, especially for intermittent electrical failure analysis.",
    type: "video",
  },
  {
    fileName: "Peterbilt_video.mp4",
    title: "Peterbilt Service Walkthrough",
    description:
      "Walkthrough-style service footage of the Peterbilt platform, useful for before/after storytelling and technical transparency. This media helps communicate real shop workflow, condition context, and repair progression to clients and fleet managers.",
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
