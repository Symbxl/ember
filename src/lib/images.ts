// Centralised Unsplash image catalogue. Hotlinked via images.unsplash.com
// (already whitelisted in next.config.mjs) so Next/Image can optimize them.
//
// Format helper keeps query params consistent (auto-format, fit=crop, q=80).

function u(id: string, w = 1600): string {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;
}

export const heroImages = {
  // Main hero backdrop — moody, warm-lit workspace.
  primary: u("1517694712202-14dd9538aa97", 2200),
  // Secondary "screen" composition for the right-side collage.
  screen: u("1559136555-9303baea8ebd", 1400),
  // Ambient warm bokeh, used as a glow layer.
  glow: u("1604079628040-94301bb21b91", 1600)
};

export const serviceImages: Record<string, string> = {
  "Website Development": u("1517694712202-14dd9538aa97", 1200),
  "SEO & Content": u("1455390582262-044cdead277a", 1200),
  "Paid Acquisition": u("1551288049-bebda4e38f71", 1200),
  "Brand & Design": u("1558655146-d09347e92766", 1200)
};

export const testimonialPortraits: Record<string, string> = {
  "Maya Chen": u("1494790108377-be9c29b29330", 400),
  "Daniel Park": u("1507003211169-0a1dd7228f2d", 400),
  "Avery Doyle": u("1573497019940-1c28c88b4f3e", 400)
};

export const teamPortraits: Record<string, string> = {
  "Avery Sterling": u("1573496359142-b8d87734a5a2", 600),
  "Theo Ember": u("1500648767791-00dcc994a43e", 600),
  "Rin Okafor": u("1531123897727-8f129e1688ce", 600),
  "Marco Vela": u("1519085360753-af0119f7cbe7", 600)
};

export const aboutHero = u("1497366216548-37526070297c", 2000);

export const contactHero = u("1521737711867-e3b97375f902", 2000);

export const servicesHero = u("1497366754035-f200968a6e72", 2000);

export const workHero = u("1486312338219-ce68d2c6f44d", 2000);

// Strip of project / texture imagery used in the homepage marquee.
export const marqueeImages: string[] = [
  u("1556761175-5973dc0f32e7", 800),
  u("1521737604893-d14cc237f11d", 800),
  u("1551288049-bebda4e38f71", 800),
  u("1559136555-9303baea8ebd", 800),
  u("1545239351-1141bd82e8a6", 800),
  u("1517694712202-14dd9538aa97", 800),
  u("1432888622747-4eb9a8efeb07", 800),
  u("1542744173-8e7e53415bb0", 800)
];
