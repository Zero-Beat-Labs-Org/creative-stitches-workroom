// Single source of truth for NAP + services. Used by the LocalBusiness schema,
// footer, contact page, and the service pages.

export const business = {
  name: 'Creative Stitches Workroom',
  owner: 'Sherrei Pauls',
  tagline: 'Custom window treatments, Roman shades, and upholstery, handcrafted in Grand Blanc, Michigan.',
  yearsInBusiness: '30+',
  phone: '810-423-3416',
  phoneE164: '+18104233416',
  email: 'sherrei@creativestitchesworkroom.com',
  url: 'https://creativestitchesworkroom.com',
  // GBP "Get more reviews" share link (https://g.page/r/.../review). Set to turn
  // on the primary "Leave a review on Google" CTA on the testimonials page.
  reviewLink: '',
  // Public Google/Maps URL to read reviews (optional, secondary link).
  googleProfile: '',
  address: {
    street: '6182 S Case Ave',
    city: 'Grand Blanc',
    region: 'MI',
    postalCode: '48439',
    country: 'US',
  },
  hours: 'Monday to Friday, 9 a.m. to 5 p.m., and by appointment.',
  hoursShort: 'Mon-Fri 9-5, and by appointment',
  areaServed: [
    'Grand Blanc', 'Flint', 'Burton', 'Davison', 'Fenton', 'Lake Fenton',
    'Swartz Creek', 'Goodrich', 'Atlas', 'Holly', 'Ortonville', 'Genesee County',
  ],
  // Extended / travel reach (roughly within a two-hour drive).
  extendedArea: [
    'Metro Detroit', 'Detroit', 'Birmingham', 'Bloomfield Hills', 'Troy',
    'Rochester', 'Clarkston', 'Brighton', 'Howell', 'Ann Arbor', 'Lansing',
    'Saginaw', 'Bay City', 'Midland',
  ],
  travelNote: 'We travel up to roughly two hours for the right project, reaching Metro Detroit and mid-Michigan, and ship finished work beyond that.',
  // Live profiles only (becomes schema sameAs).
  sameAs: [
    'https://www.facebook.com/creativestitchesworkroom/',
    'https://www.linkedin.com/company/creativestitchesworkroom',
    'https://www.houzz.com/professionals/upholstery/creative-stitches-workroom-pfvwus-pf~470485693',
    'https://www.yelp.com/biz/creative-stitches-grand-blanc',
    'https://reviews.birdeye.com/creative-stitches-148885114480797',
  ],
} as const;

// Real customer reviews only (never fabricate). Add quotes copied from Google,
// Facebook, Houzz, or Birdeye with attribution.
export type Review = { quote: string; name: string; source: string };
export const reviews: Review[] = [
  // { quote: '...', name: 'First L.', source: 'Google' },
];

export type Service = {
  slug: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: { heading: string; body: string }[];
  imageCategories: string[]; // gallery categories used to source photos for this service
};

export const services: Service[] = [
  {
    imageCategories: ['Drapery'],
    slug: 'draperies-curtains',
    name: 'Custom Draperies & Curtains',
    title: 'Custom Drapery & Curtains in Grand Blanc, MI | Creative Stitches Workroom',
    description: 'Made-to-measure custom draperies and curtains for Grand Blanc and Genesee County homes. 30+ years of workroom craftsmanship. Call 810-423-3416.',
    h1: 'Custom Draperies & Curtains, Made to Measure',
    intro: 'Every panel is cut, sewn, and finished by hand in our Grand Blanc workroom, sized to your windows and your fabric, not pulled off a big-box shelf.',
    sections: [
      { heading: 'Built for your windows', body: 'We make pinch-pleat, ripplefold, grommet, rod-pocket, and tab-top draperies in the fabric, lining, and fullness you choose. Full-height panels, puddled hems, and layered sheers, measured on site and fabricated to fit.' },
      { heading: 'Work with a real workroom', body: 'After more than 30 years serving Grand Blanc and Genesee County, we handle one window or a whole home, and we work directly with interior designers, fabricating in the fabric you supply.' },
    ],
  },
  {
    imageCategories: ['Roman shades'],
    slug: 'roman-shades',
    name: 'Custom Roman Shades',
    title: 'Custom Roman Shades in Grand Blanc & Genesee County, MI | Creative Stitches Workroom',
    description: 'Handcrafted custom Roman shades, flat, hobbled, and relaxed, lined or blackout, made to measure in Grand Blanc, MI. Call 810-423-3416.',
    h1: 'Custom Roman Shades, Handcrafted to Fit',
    intro: 'Flat, hobbled, or relaxed Roman shades in your fabric, with the lining and lift style that suits the room.',
    sections: [
      { heading: 'Your fabric, your style', body: 'Light-filtering or blackout lining, cordless and child-safe lift options, mounted inside or outside the frame. Each shade is built to the exact opening.' },
    ],
  },
  {
    imageCategories: ['Upholstery'],
    slug: 'upholstery',
    name: 'Upholstery & Reupholstery',
    title: 'Upholstery & Reupholstery in Grand Blanc, MI | Creative Stitches Workroom',
    description: 'Furniture reupholstery, cushions, and antique restoration in Grand Blanc and Genesee County. 30+ years of soft-goods craft. Call 810-423-3416.',
    h1: 'Upholstery & Reupholstery',
    intro: 'Give a well-built sofa, chair, or heirloom piece another few decades with new fabric, padding, and structure.',
    sections: [
      { heading: 'From a single chair to a whole set', body: 'Sofas, chairs, dining seats, benches, headboards, cushions, and antique restoration. We help you choose a durable fabric for how the piece is actually used.' },
    ],
  },
  {
    imageCategories: ['Pillows and bedding'],
    slug: 'pillows-cushions',
    name: 'Pillows & Cushions',
    title: 'Custom Pillows & Cushions in Michigan | Creative Stitches Workroom',
    description: 'Custom throw pillows, cushion covers, window-seat, patio, and boat cushions, made to measure in Grand Blanc, MI. Call 810-423-3416.',
    h1: 'Custom Pillows & Cushions',
    intro: 'The fast, high-impact way to refresh a room, or to re-cover the cushions the rest of the market ignores.',
    sections: [
      { heading: 'Indoor and out', body: 'Throw pillows, bench and window-seat cushions, dining-chair pads, plus patio and boat cushions in outdoor-rated fabric, all sized to your dimensions.' },
    ],
  },
  {
    imageCategories: ['Drapery', 'Roman shades'],
    slug: 'window-treatments',
    name: 'Window Treatments',
    title: 'Custom Window Treatments in Grand Blanc, MI | Creative Stitches Workroom',
    description: 'Custom valances, cornices, swags, and full window treatments for Grand Blanc and Genesee County. 30+ years of workroom craft. Call 810-423-3416.',
    h1: 'Custom Window Treatments',
    intro: 'Valances, cornices, swags, and layered treatments that finish a room, all made to your windows.',
    sections: [
      { heading: 'The full soft-goods workroom', body: 'Windows, furniture, pillows, and bedding under one roof, so a whole room can be coordinated in one place. Most local shops do only windows or only upholstery.' },
    ],
  },
];
