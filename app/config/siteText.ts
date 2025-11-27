// Centralized site text config (header + footer + shared strings)
export const LOGO_ALT = 'Flywall uPVC logo';

export const BRAND = 'Flywall';
export const SELLER = 'NORTH EAST FIBER';
export const CONTACT_EMAIL = 'northeastfiber101@gmail.com';
export const CONTACT_PHONE_1 = '+91 9435605120';
export const CONTACT_PHONE_2 = '+91 8822372940';

export const CTA_SCHEDULE = 'Schedule a demo';
export const CTA_CALLBACK = 'Request a callback';
export const CTA_BUY = 'Request a quote';

export const MOBILE_TOGGLE_LABEL = 'Toggle menu';

export const MENU: { label: string; href: string }[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/company' },
  { label: 'Products', href: '/products' },
  // { label: 'Applications', href: '/applications' },
  { label: 'Contact', href: '#contact' },
];

// Footer-specific strings
export const FOOTER_COPYRIGHT = '© 2025 Flywall. All rights reserved.';
export const FOOTER_ADDRESS = 'NORTH EAST FIBER, Boragaon, Near Raju Parking, GMC Road, Guwahati 781035';
export const FOOTER_MAP_QUERY = 'NORTH EAST FIBER, Boragaon, Near Raju Parking, GMC Road, Guwahati 781035';
export const FOOTER_BRAND = 'Flywall';
export const FOOTER_TAGLINE = 'The smarter choice for uPVC profiles';
export const FOOTER_PHONE_1 = CONTACT_PHONE_1;
export const FOOTER_PHONE_2 = CONTACT_PHONE_2;
export const FOOTER_SUPPORT_EMAIL = CONTACT_EMAIL;
export const FOOTER_NOTE = 'North East people\'s first choice for uPVC window & door materials';

// Hero
export const HERO_TITLE = 'Flywall uPVC Profiles';
export const HERO_SUBTITLE = 'The Smarter Choice';
export const HERO_DESCRIPTION = `Goodbye to rot, rust & termites. Flywall uPVC profiles provide long-lasting,
low-maintenance side frames engineered for strength, precision and energy efficiency. Trusted across the North East for fabrication-grade performance. Made as per German standards, high UV resistant and lead free.`;
export const HERO_DESCRIPTION_MOBILE = 'Durable, low-maintenance uPVC profiles — rot, rust and termite resistant. German-standard, UV resistant, lead free.';
export const HERO_EXPLORE_LABEL = 'Explore products';
export const HERO_REQUEST_LABEL = 'Request consultation';

// CTA
export const CTA_INTRO = 'Click to schedule a one-to-one demo with our team';

// About / Intro
export const ABOUT_TITLE = 'Flywall uPVC Windows & Doors';
export const ABOUT_DESC = `Flywall by North East Fiber supplies high-quality uPVC profiles designed for durability,
weather resistance and low maintenance. Our profiles are 100% resistant to rot and rust and engineered to resist termites and insects.
Built for fabricators who need consistent strength, precise tolerances and a choice of colours and finishes.`;

// Feature grid
export const FEATURES: { title: string; desc: string; icon?: string }[] = [
  { title: 'Rot, Rust & Termite Resistant', desc: 'Profiles engineered to resist biological and corrosion damage for a longer service life', icon: 'shield' },
  { title: 'Energy-Efficient & Weatherproof', desc: 'Designed to improve thermal and weather performance, reducing drafts and heat loss', icon: 'energy' },
  { title: 'Durable & Strong', desc: 'Precision-engineered profiles that withstand daily use and diverse climatic conditions', icon: 'build' },
  { title: 'Colour & Finish Options', desc: 'Available in multiple colours and realistic wood textures to match design needs', icon: 'palette' },
  { title: 'Made as per German Standards', desc: 'Manufactured and tested to respected German norms for consistent quality', icon: 'certificate' },
  { title: 'High UV Resistance', desc: 'UV-stable profiles that resist fading and degradation in strong sunlight', icon: 'sun' },
  { title: 'Lead Free', desc: 'Formulated without lead for safer installations and environmental compliance', icon: 'leaf' },

];

// Product gallery
export const PRODUCT_WINDOWS_TITLE = 'Window Profiles';
export const PRODUCT_DOORS_TITLE = 'Door Profiles';
export const PRODUCT_WINDOWS: { label: string; img: string }[] = [
  { label: 'Dark Oak', img: '/products_styles/1.png' },
  { label: 'Golden Oak', img: '/products_styles/2.png' },
  { label: 'Grey', img: '/products_styles/3.png' },
  { label: 'Silver', img: '/products_styles/4.png' },
  { label: 'Walnut', img: '/products_styles/5.png' },
  { label: 'Black', img: '/products_styles/6.png' },
];
export const PRODUCT_DOORS: { label: string; img: string }[] = [
  { label: 'Entrance door', img: '/products_styles/entrance.jpg' },
  { label: 'Patio sliding', img: '/products_styles/patio.jpg' },
  { label: 'Bi-fold door', img: '/products_styles/bifold.jpg' },
  { label: 'French door', img: '/products_styles/french.jpg' },
];

// Window styles gallery (used by WindowGallery component)
export const WINDOW_STYLES_TITLE = 'Window Styles';
export const WINDOW_STYLES: { label: string; img: string }[] = [
  { label: 'Sliding', img: '/window_styles/sliding.png' },
  { label: 'Casement', img: '/window_styles/casement.png' },
  { label: 'Arch', img: '/window_styles/arch.png' },
  { label: 'Combination', img: '/window_styles/combination.png' },
  { label: 'Tilt & Turn', img: '/window_styles/tilt-and-turn.png' },
  { label: 'Villa', img: '/window_styles/villa.png' },
  { label: 'Ventilator', img: '/window_styles/ventilator.png' },
];


// Trust signals
export const TRUST_YEARS = '25+ Years Experience';
export const TRUST_CAPACITY = 'Production Capacity: 100k units/year';
export const TRUST_CERTS: string[] = ['SKZ Germany (certified testing)'];
export const TRUST_TAG = 'North East trusted source for uPVC window & door materials';

// Applications
export const APPLICATIONS: { title: string; desc: string }[] = [
  { title: 'Residential', desc: 'Homes, apartments and villas' },
  { title: 'Commercial', desc: 'Offices, retail and mixed-use buildings' },
  { title: 'Renovation & replacement', desc: 'Upgrade older frames with durable uPVC profiles' },
  { title: 'Fabricators', desc: 'Profiles built for easy fabrication and consistent assembly' },
];

// Site metadata
export const SITE_TITLE = 'Flywall - uPVC profiles for windows & doors';
export const SITE_DESCRIPTION = 'Flywall uPVC profiles: rot, rust and termite resistant side frames engineered for strength, durability and low maintenance';

// Social links
export const SOCIAL_LINKS: { name: string; href: string }[] = [
  { name: 'Facebook', href: 'https://www.facebook.com/flywall' },
  { name: 'Instagram', href: 'https://www.instagram.com/flywall' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/flywall' },
];

// Google review URL for the business (configure to your GMB review link)
export const FOOTER_GOOGLE_REVIEW = 'https://g.page/r/?review=1';

// Contact / Support copy
export const CONTACT_HEADLINE = 'Get in touch';
export const CONTACT_SUBTEXT = 'Our team is ready to answer queries and help fabricators select the right profiles';
export const CONTACT_PHONE_DISPLAY = `${CONTACT_PHONE_1} / ${CONTACT_PHONE_2}`;

// Dealer / location block
export const DEALER_NAME = SELLER;
export const DEALER_ADDRESS = FOOTER_ADDRESS;
export const DEALER_CONTACTS: { type: string; value: string }[] = [
  { type: 'phone', value: CONTACT_PHONE_1 },
  { type: 'phone', value: CONTACT_PHONE_2 },
  { type: 'email', value: CONTACT_EMAIL },
];

// Optional extras you can use in templates
export const KEY_HIGHLIGHTS: string[] = [
  'Resistant to termites & insects',
  '100% resistant to rot & rust',
  'Energy-efficient and weatherproof',
  'Available in colour of choice',
  'Made as per German standards',
  'High UV resistant',
  'Lead free',
];

export const LEGAL_COPY = 'All product dimensions and specifications are indicative and may vary. Contact us for technical datasheets and fabrication guidelines.';


export default {
  LOGO_ALT,
  CONTACT_EMAIL,
  CONTACT_PHONE_1,
  CONTACT_PHONE_2,
  CTA_SCHEDULE,
  CTA_CALLBACK,
  MOBILE_TOGGLE_LABEL,
  MENU,
  FOOTER_COPYRIGHT,
  FOOTER_ADDRESS,
  FOOTER_MAP_QUERY,
  FOOTER_BRAND,
  FOOTER_TAGLINE,
  FOOTER_PHONE_1,
  FOOTER_PHONE_2,
  FOOTER_SUPPORT_EMAIL,
  SOCIAL_LINKS,
  CTA_INTRO,
  CONTACT_HEADLINE,
  CONTACT_SUBTEXT,
};
