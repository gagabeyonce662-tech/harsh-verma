export const CONTACT = {
  phoneDisplay: "365 773 4287",
  phoneDisplayCompact: "(365) 773-4287",
  phoneHref: "tel:3657734287",
  whatsappHref: "https://wa.me/13657734287",
  emailPrimary: "dieselperformancetr@hotmail.com",
  emailSecondary: "Dieselperformancetr@hotmail.com",
};

export const heroSlides = [
  "https://wnculxpphnditrymgpzv.supabase.co/storage/v1/object/public/clone-pages/aee4a4e2-d2b4-466f-92f1-0cf4fd74e9f7/0a84a4a5-0450-4643-992b-82531adff889/62aa311f1c2b281e.webp",
  "https://wnculxpphnditrymgpzv.supabase.co/storage/v1/object/public/clone-pages/aee4a4e2-d2b4-466f-92f1-0cf4fd74e9f7/0a84a4a5-0450-4643-992b-82531adff889/0af850265b9f374b.webp",
  "https://wnculxpphnditrymgpzv.supabase.co/storage/v1/object/public/clone-pages/aee4a4e2-d2b4-466f-92f1-0cf4fd74e9f7/0a84a4a5-0450-4643-992b-82531adff889/da38e4f3482ec6eb.webp",
  "https://wnculxpphnditrymgpzv.supabase.co/storage/v1/object/public/clone-pages/aee4a4e2-d2b4-466f-92f1-0cf4fd74e9f7/0a84a4a5-0450-4643-992b-82531adff889/e07318f05d99ee32.webp",
  "https://wnculxpphnditrymgpzv.supabase.co/storage/v1/object/public/clone-pages/aee4a4e2-d2b4-466f-92f1-0cf4fd74e9f7/0a84a4a5-0450-4643-992b-82531adff889/29b7b3fb11b4992b.webp",
];

type HeroMediaItem = {
  type: "image" | "video";
  src: string;
};

export const heroMedia: readonly HeroMediaItem[] = [
  { type: "video", src: "/Engine_Live.mp4" },
  { type: "video", src: "/Engine_tuning.mp4" },
  { type: "video", src: "/Peterbilt_progress.mp4" },
  { type: "video", src: "/abhijeet_truck.mp4" },
];

export const services = [
  {
    icon: "fa-circle-stop",
    title: "Brake System Repair",
    text: "Complete brake inspections, repairs and line replacements. We keep your rig stopping safely and on spec with CVIP standards.",
  },
  {
    icon: "fa-oil-can",
    title: "Oil Services",
    text: "Engine oil changes, filter replacement and fluid inspections using commercial-grade lubricants matched to your engine specs.",
  },
  {
    icon: "fa-laptop-code",
    title: "Computer Diagnostics",
    text: "Advanced OBD and manufacturer-level diagnostics for Volvo, Mack, Peterbilt, Kenworth, Freightliner and all major commercial brands. Find the fault fast.",
  },
  {
    icon: "fa-gears",
    title: "Transmission Repair & Rebuild",
    text: "From minor adjustments to full rebuilds on manual and automatic transmissions - we do it all in-house.",
  },
  {
    icon: "fa-cogs",
    title: "Engine Inframes",
    text: "In-frame overhauls and complete engine rebuilds performed by experienced technicians with precision and care.",
  },
  {
    icon: "fa-snowflake",
    title: "HVAC / Heating & AC",
    text: "Cabin heating and air conditioning diagnostics, repair and recharge so your driver stays comfortable year-round.",
  },
  {
    icon: "fa-wrench",
    title: "5th Wheel Service",
    text: "5th wheel inspection, lubrication, adjustment and replacement for safe trailer coupling on every run.",
  },
  {
    icon: "fa-clipboard-check",
    title: "Routine Maintenance",
    text: "Scheduled maintenance programs designed to keep your fleet running efficiently and reduce costly downtime.",
  },
  {
    icon: "fa-leaf",
    title: "DEF / SCR Systems",
    text: "Diesel Exhaust Fluid system diagnostics, DEF pump replacement and SCR catalyst repair for emissions compliance.",
  },
] as const;

export const testimonials = [
  {
    name: "Ranvir Shergill",
    avatar: "R",
    text: "Awesome and experienced people with knowledge of every truck in the market. Try it yourself and find out the difference.",
  },
  {
    name: "Akashdeep Singh",
    avatar: "A",
    text: "I had an issue with my 2016 Freightliner and came to Diesel Performance. They always try to save time and money - they sourced the DEF pump and got it fixed. Owner and team are great to deal with. I recommend everyone to visit.",
  },
  {
    name: "Luka Drc",
    avatar: "L",
    text: "Diesel Performance is THE place for Diesel truck repairs or All diesel truck repairs. Always punctual, on-time repairs with no issues after completion. Harsh Verma and his team are top-notch mechanics - especially for complex D13 work. This is the place to come!",
  },
] as const;

export const serviceAreas = [
  "Mississauga",
  "Brampton",
  "Toronto",
  "Etobicoke",
  "Oakville",
  "Milton",
  "Burlington",
  "Hamilton",
  "Vaughan",
  "Woodbridge",
  "Orangeville",
  "GTA & Beyond",
] as const;
