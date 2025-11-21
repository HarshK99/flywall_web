// Centralized site text config (header + footer + shared strings)
export const LOGO_ALT = 'Flywall logo';

export const CONTACT_EMAIL = 'info@flywall.example';
export const CONTACT_PHONE = '+91 98765 43210';
export const TOLL_FREE = '1800-123-456';

export const CTA_SCHEDULE = 'Schedule a Demo';
export const CTA_CALLBACK = 'Request a Callback';

export const MOBILE_TOGGLE_LABEL = 'Toggle menu';

export const MENU: { label: string; href: string }[] = [
  { label: 'Home', href: '/' },
  { label: 'Company', href: '/company' },
  { label: 'uPVC Windows', href: '/products/windows' },
  { label: 'uPVC Doors', href: '/products/doors' },
  { label: 'Contact', href: '#contact' },
];

// Footer-specific strings
export const FOOTER_COPYRIGHT = '© 2025 Flywall. All rights reserved.';
export const FOOTER_ADDRESS = 'NORTH EAST FIBER, bor road, near raju parking, guwahati, 781035';
export const FOOTER_DESCRIPTION = 'North East trusted source for uPVC windows and doors';
export const FOOTER_MAP_QUERY = 'NORTH EAST FIBER, bor road, near raju parking, guwahati, 781035';
export const FOOTER_BRAND = 'Flywall';
export const FOOTER_TAGLINE = 'North East trusted source for uPVC windows and doors';
export const FOOTER_PHONE_1 = '+91 9434577875';
export const FOOTER_PHONE_2 = '+91 5465465467';
export const FOOTER_SUPPORT_EMAIL = 'support@flywall.example';

// Hero
export const HERO_TITLE = 'uPVC Windows';
export const HERO_DESCRIPTION = `Flywall combines modern design with industry-grade uPVC systems to
deliver durable, energy-efficient windows. Crafted for comfort,
security and low maintenance — made to suit homes and projects of
every scale.`;
export const HERO_EXPLORE_LABEL = 'Explore More';
export const HERO_REQUEST_LABEL = 'Request Consultation';

// Hero Intro
export const INTRO_TITLE = 'Prominance uPVC Windows & Doors';
export const INTRO_DESC = 'Energy-efficient, durable, and European-grade quality for modern homes — engineered for comfort, security and low maintenance.';

// Feature grid
export const FEATURES: { title: string; desc: string }[] = [
  { title: 'Energy-efficient & Sustainable', desc: 'Designed to reduce heat loss and lower energy bills using high-performance uPVC profiles.' },
  { title: '100% Lead-free, UV-resistant', desc: 'Profiles are lead-free and engineered to withstand UV exposure without yellowing or warping.' },
  { title: 'Certified by SKZ Germany', desc: 'Manufactured and tested to European standards with SKZ certification for quality assurance.' },
  { title: 'Styles & Finishes', desc: 'Wide selection of styles and finishes, including realistic wood textures and custom colors.' },
];

// Product gallery
export const PRODUCT_WINDOWS_TITLE = 'Window Types';
export const PRODUCT_DOORS_TITLE = 'Door Types';
export const PRODUCT_WINDOWS: { label: string; img: string }[] = [
  { label: 'Casement', img: '/products_styles/casement.jpg' },
  { label: 'Sliding', img: '/products_styles/sliding.jpg' },
  { label: 'Tilt & Turn', img: '/products_styles/tiltturn.jpg' },
  { label: 'Slide & Fold', img: '/products_styles/slidefold.jpg' },
];
export const PRODUCT_DOORS: { label: string; img: string }[] = [
  { label: 'Entrance Door', img: '/products_styles/door_entrance.jpg' },
  { label: 'Patio Sliding', img: '/products_styles/door_sliding.jpg' },
  { label: 'Bi-fold Door', img: '/products_styles/door_bifold.jpg' },
  { label: 'French Door', img: '/products_styles/door_french.jpg' },
];

// Trust signals
export const TRUST_SKZ = 'SKZ Germany';
export const TRUST_YEARS = '25+ Years Experience';
export const TRUST_CAPACITY = 'Production Capacity: 100k units/year';

// Benefits
export const BENEFITS: { title: string; desc: string; icon: string }[] = [
  { title: 'Soundproofing', desc: 'Minimizes external noise for a quieter home', icon: '🔇' },
  { title: 'Security', desc: 'Multi-point locking systems for enhanced protection', icon: '🔐' },
  { title: 'Low Maintenance', desc: 'uPVC profiles that require minimal upkeep', icon: '🧽' },
  { title: 'Indoor Air Quality', desc: 'Sealed systems that support healthy indoor air', icon: '🌿' },
];

// Site metadata
export const SITE_TITLE = 'Flywall - Premium uPVC Windows and Doors for Modern Homes';
export const SITE_DESCRIPTION = 'Premium uPVC Windows and Doors for Modern Homes';

export const SOCIAL_LINKS: { name: string; href: string }[] = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/flywall' },
  { name: 'Facebook', href: 'https://www.facebook.com/flywall' },
  { name: 'Instagram', href: 'https://www.instagram.com/flywall' },
];

export default {
  LOGO_ALT,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  TOLL_FREE,
  CTA_SCHEDULE,
  CTA_CALLBACK,
  MOBILE_TOGGLE_LABEL,
  MENU,
  FOOTER_COPYRIGHT,
  FOOTER_ADDRESS,
  FOOTER_DESCRIPTION,
  FOOTER_MAP_QUERY,
  FOOTER_BRAND,
  FOOTER_TAGLINE,
  FOOTER_PHONE_1,
  FOOTER_PHONE_2,
  FOOTER_SUPPORT_EMAIL,
  SOCIAL_LINKS,
};

