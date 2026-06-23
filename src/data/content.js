// Central content store for Sheikh Shabbir's portfolio.
// Edit names, dates, copy, links and images here — components read from this file.

export const profile = {
  name: 'Sheikh Shabbir',
  initials: 'SS',
  roleShort: '2D/3D Designer',
  roleLong: '2D/3D Mechanical Parts Designer',
  title: 'CNC Machinist — Designer',
  tools: ['CorelDRAW', 'Siemens NX', 'AutoCAD', 'Adobe Illustrator'],
  location: 'Orangi Town, Karachi, Pakistan',
  phone: '+92 311 6040569',
  whatsapp: '923116040569',
  email: 'm.shabbir8434@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sheikh-shabbir-040825296',
  heroIntro:
    "I design mechanical parts and bring them into production — from a Siemens NX or AutoCAD model to a part cut and finished on the CNC floor. Four years split between the design seat and the machine bay means every drawing I hand off is built to actually run.",
  aboutText:
    "I work the full loop between the screen and the shop floor: modelling mechanical parts in Siemens NX and AutoCAD Mechanical, preparing CAD/CAM toolpaths, and operating CNC and lathe machines to turn those models into finished parts. That dual background — designer and machinist — means I design for what a machine can actually cut, not just what looks right on screen. Alongside mechanical work, I also produce vector artwork and technical illustration in CorelDRAW and Adobe Illustrator for labelling, panels and laser-cut detailing.",
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

export const aboutPoints = [
  {
    label: 'Mechanical Parts Design',
    detail: 'Modelling components and assemblies to tolerance, ready for production.',
  },
  {
    label: 'CAD / CAM',
    detail: 'Translating 3D models into machine-ready toolpaths and programs.',
  },
  {
    label: 'CNC Operations',
    detail: 'Hands-on machine time on CNC and lathe — setup, running, and quality checks.',
  },
  {
    label: 'Industrial Manufacturing',
    detail: 'Working within real production constraints, materials, and finishing.',
  },
  {
    label: 'Precision Engineering',
    detail: 'Holding tight tolerances from drawing to finished, measured part.',
  },
]

// level: 1-5, used to draw the gauge — keep honest, not maxed across the board
export const skills = [
  { name: 'Siemens NX', level: 5, group: 'CAD' },
  { name: 'AutoCAD Mechanical', level: 5, group: 'CAD' },
  { name: 'CAD/CAM', level: 4, group: 'CAD' },
  { name: 'CNC Machine', level: 5, group: 'Machining' },
  { name: 'CNC Operation', level: 5, group: 'Machining' },
  { name: 'Lathe Machine', level: 4, group: 'Machining' },
  { name: 'CorelDRAW', level: 5, group: 'Vector' },
  { name: 'Adobe Illustrator', level: 4, group: 'Vector' },
  { name: 'Vector Design', level: 5, group: 'Vector' },
  { name: 'Vector Illustration', level: 4, group: 'Vector' },
]

export const experience = [
  {
    role: 'Computer Numerical Control Machinist',
    company: 'Unique Laser Fabricator',
    location: 'Karachi',
    start: 'Dec 2023',
    end: 'Present',
    current: true,
    points: [
      'Operated CNC laser machines and created precise 2D/3D vector designs.',
      'Managed complete CNC programming and execution with confidence.',
    ],
  },
  {
    role: 'Computer Numerical Control Machinist',
    company: 'Fabrizon Laser',
    location: 'Karachi',
    start: 'Aug 2022',
    end: 'Nov 2023',
    current: false,
    points: [
      'Led CNC laser cutting operations and mechanical part designing.',
      'Delivered efficient programs and accurate designs independently',
    ],
  },
]

export const education = [
  {
    level: 'Matriculation (Science)',
    school: 'TCF School',
    period: '2020 – 2022',
    score: '90.5%',
  },
  {
    level: 'Intermediate (Pre-Engineering)',
    school: 'D. J. Sindh Government Science College',
    period: '2022 – 2024',
    score: '45%',
  },
]

export const certificatesLink = 'https://drive.google.com/drive/folders/1hVbe0HJhWECWxd5o7NATYeV7qLihmtL3'

export const certifications = [
  {
    title: 'Advanced CNC Machining (CAD/CAM) — Level 4',
    issuer: 'Hunar Foundation',
    badge: 'Government Certified',
  },
  {
    title: 'Mechanical Technology (Machinist — Turner) — Level 2',
    issuer: 'Hunar Foundation',
    badge: 'Government Certified',
  },
]

// Placeholder projects — replace `image` with real project photos any time.
export const projects = [
  {
    id: 'p1',
    title: 'Precision Shaft Assembly',
    category: 'Mechanical Part',
    description:
      'Siemens NX model of a stepped drive shaft, toleranced and prepared for CNC turning.',
    image: null,
  },
  {
    id: 'p2',
    title: 'Bracket Plate — CNC Cut',
    category: 'CNC Manufacturing',
    description:
      'AutoCAD Mechanical drawing translated into a laser-cut steel bracket, batch produced.',
    image: null,
  },
  {
    id: 'p3',
    title: 'Gear Housing Design',
    category: 'Mechanical Part',
    description:
      'Multi-part housing assembly modelled for fit, clearance and assembly sequence.',
    image: null,
  },
  {
    id: 'p4',
    title: 'Panel Vector Artwork',
    category: 'Vector Illustration',
    description:
      'CorelDRAW vector artwork prepared for laser-etched control panel labelling.',
    image: null,
  },
  {
    id: 'p5',
    title: 'Flange Connector',
    category: 'Mechanical Part',
    description:
      'Bolted flange connector designed to standard fastener spacing and load path.',
    image: null,
  },
  {
    id: 'p6',
    title: 'Industrial Signage Set',
    category: 'Vector Illustration',
    description:
      'Adobe Illustrator signage system designed for consistent shop-floor wayfinding.',
    image: null,
  },
]
