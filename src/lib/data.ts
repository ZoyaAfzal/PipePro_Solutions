export type Service = {
  slug: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  details: string;
  included: string[];
};

export const services: Service[] = [
  {
    slug: "plumbing-repairs",
    title: "Plumbing Repairs",
    description:
      "Fast diagnosis and lasting repairs for leaks, burst pipes, and pressure issues.",
    image: "https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?w=900",
    icon: "Wrench",
    details:
      "Our certified plumbers handle every kind of repair from a dripping kitchen tap to a midnight pipe burst. We arrive on time, diagnose the problem with modern leak-detection equipment, and quote you up front before any work begins. Every repair is backed by our 2-year workmanship warranty so you only pay once for a job done right.",
    included: [
      "On-site diagnosis with thermal & acoustic leak detection",
      "Upfront, flat-rate pricing - no surprise fees",
      "Genuine parts from licensed suppliers",
      "Cleanup included after every visit",
      "2-year workmanship warranty",
    ],
  },
  {
    slug: "drain-unblocking",
    title: "Drain Unblocking",
    description:
      "Powerful hydro-jetting and snaking solutions for completely blocked drains.",
    image: "https://images.pexels.com/photos/31213992/pexels-photo-31213992.jpeg?w=900",
    icon: "ArrowDownCircle",
    details:
      "Slow draining sinks, gurgling toilets and bad odours are early signs of a deeper blockage. We use high-pressure hydro-jetting and CCTV drain cameras to clear and inspect your lines without breaking tile or concrete. Most blockages are cleared inside an hour.",
    included: [
      "CCTV drain camera inspection",
      "High-pressure hydro-jet cleaning",
      "Mechanical snaking for tougher clogs",
      "Root intrusion removal",
      "Preventative maintenance plan",
    ],
  },
  {
    slug: "bathroom-installation",
    title: "Bathroom Installation",
    description:
      "Complete bathroom fit-outs from rough-in plumbing to final fixtures.",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=900",
    icon: "Bath",
    details:
      "From a single vanity swap to a full bathroom renovation, our installation crew manages plumbing, tiling coordination, fixtures and final commissioning. We work with your designer or recommend products that fit your budget, all installed to code and ready to enjoy.",
    included: [
      "Rough-in plumbing & drainage layout",
      "Vanity, toilet, shower & bath installation",
      "Mixer & tap installation",
      "Waterproofing coordination",
      "Final pressure & leak testing",
    ],
  },
  {
    slug: "water-heater",
    title: "Water Heater Services",
    description:
      "Installation, repair, and replacement of all water heater types.",
    image: "https://images.pexels.com/photos/28479466/pexels-photo-28479466.jpeg?w=900",
    icon: "Flame",
    details:
      "Whether it's a gas boiler, electric storage tank or modern instant heater, we install, service and replace every major brand. We'll help you size the right unit for your household and handle the gas, water and electrical connections.",
    included: [
      "Tank & tankless installation",
      "Annual flush & anode rod service",
      "Thermostat & element replacement",
      "Gas line & venting checks",
      "Energy-efficient upgrade advice",
    ],
  },
  {
    slug: "pipe-installation",
    title: "Pipe Installation",
    description:
      "New construction and re-piping with copper, PVC, and PEX materials.",
    image: "https://images.pexels.com/photos/12018108/pexels-photo-12018108.jpeg?w=900",
    icon: "GitBranch",
    details:
      "Old galvanised pipes corrode, lose pressure and contaminate drinking water. We re-pipe full homes and new builds using copper, PEX or PVC depending on your application — all pressure-tested and certified.",
    included: [
      "Whole-home re-pipe (copper / PEX)",
      "New construction rough-in",
      "Pressure testing & certification",
      "Wall & slab leak repair",
      "Code-compliant installation",
    ],
  },
  {
    slug: "gutter-cleaning",
    title: "Gutter Cleaning",
    description:
      "Prevent water damage with professional seasonal gutter cleaning service.",
    image: "https://images.pexels.com/photos/21628697/pexels-photo-21628697.jpeg?w=900",
    icon: "Droplets",
    details:
      "Blocked gutters cause roof leaks, fascia rot and foundation damage. Our team safely clears gutters and downpipes, flushes the system and inspects for damage — twice a year is all most homes need.",
    included: [
      "Full gutter & downpipe clean",
      "Roof valley debris removal",
      "Downpipe flush test",
      "Gutter guard inspection",
      "Photo report after every visit",
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  category: string;
  image: string;
  result: string;
  client: string;
  location: string;
  duration: string;
  challenge: string;
  solution: string;
};

export const projects: Project[] = [
  {
    id: "bathroom-renovation-chelsea",
    title: "Full Bathroom Renovation — Chelsea",
    category: "Bathroom Installation",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=900",
    result: "Completed in 4 days, zero callbacks",
    client: "Miller Residence",
    location: "Chelsea, London, UK",
    duration: "4 days",
    challenge:
      "The original bathroom suffered from poor drainage and outdated fixtures that no longer fit the family's needs. We had to work inside a tight window between the family's travel dates.",
    solution:
      "Our team re-laid the drainage to current code, installed a modern walk-in shower, new vanity and concealed cistern WC. All works finished a day ahead of schedule.",
  },
  {
    id: "emergency-pipe-burst-uk",
    title: "Emergency Pipe Burst - Edinburgh",
    category: "Plumbing Repairs",
    image: "https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?w=900",
    result: "90-minute response, full repair same day",
    client: "Royal Mile Apartments",
    location: "Old Town, Edinburgh, UK",
    duration: "1 day",
    challenge:
      "A main supply line burst in a historic tenement building, threatening to damage preserved interiors and leave 12 flats without water during the busy festival season.",
    solution:
      "Our emergency team arrived within 40 minutes, isolated the riser in the basement, and replaced the failing section with high-grade copper piping, restoring service before the evening peak.",
  },
  {
    id: "boiler-upgrade-birmingham",
    title: "Combi Boiler Upgrade - Birmingham",
    category: "Water Heater Services",
    image: "https://images.pexels.com/photos/30388730/pexels-photo-30388730.jpeg?w=900",
    result: "40% lower energy bill, endless hot water",
    client: "Harrison Family",
    location: "Edgbaston, Birmingham, UK",
    duration: "1 day",
    challenge:
      "Two ageing storage heaters were costing the family hundreds per month and still running cold by morning.",
    solution:
      "We replaced both units with a single high-efficiency combi boiler, re-routed gas lines and added a smart thermostat for instant hot water and efficient heating.",
  },
  {
    id: "drain-jetting-leeds",
    title: "Restaurant Drain Restoration - Leeds",
    category: "Drain Unblocking",
    image: "https://images.pexels.com/photos/13875543/pexels-photo-13875543.jpeg?w=900",
    result: "Kitchen back online in under 3 hours",
    client: "The Yorkshire Bistro",
    location: "Call Lane, Leeds, UK",
    duration: "3 hours",
    challenge:
      "Grease build-up had completely blocked the kitchen waste line during peak service hours.",
    solution:
      "Hydro-jetting cleared 14m of grease and food waste. We installed a stainless grease trap and scheduled quarterly maintenance.",
  },
  {
    id: "repipe-manor-oxford",
    title: "Whole-Home Copper Re-Pipe - Oxford",
    category: "Pipe Installation",
    image: "https://images.pexels.com/photos/28178448/pexels-photo-28178448.jpeg?w=900",
    result: "Pressure tripled, water clarity restored",
    client: "Bennett Manor",
    location: "North Oxford, UK",
    duration: "6 days",
    challenge:
      "1980s galvanised pipework was rusting through, leaving brown water and weak pressure on the upper floor.",
    solution:
      "Full re-pipe in Type-L copper with new manifolds. Walls patched and finished by our trim crew, ready for paint within a week.",
  },
  {
    id: "gutter-overhaul-bristol",
    title: "Gutter Overhaul - Bristol",
    category: "Gutter Cleaning",
    image: "https://images.pexels.com/photos/21628697/pexels-photo-21628697.jpeg?w=900",
    result: "Roof leaks stopped, gutters good for years",
    client: "Davies Villa",
    location: "Clifton, Bristol, UK",
    duration: "1 day",
    challenge:
      "Years of debris had caused water to back up under the roof tiles, staining ceilings inside.",
    solution:
      "Full gutter clean, two replacement downpipes, gutter-guard mesh and a flow test on every outlet.",
  },
  {
    id: "luxury-apartment-london",
    title: "Luxury Apartment Re-Pipe - Kensington",
    category: "Pipe Installation",
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=900",
    result: "Modernized system, improved water flow",
    client: "Thompson Estate",
    location: "Kensington, London, UK",
    duration: "10 days",
    challenge:
      "A high-end apartment in a historic building needed a complete plumbing modernization without disturbing original architectural details.",
    solution:
      "Utilized flexible PEX piping and minimal-impact routing to replace aging copper lines. Installed premium silent-flush fixtures and high-pressure pumps.",
  },
  {
    id: "commercial-drainage-manchester",
    title: "Commercial Drainage Overhaul - Manchester",
    category: "Drain Unblocking",
    image: "https://images.unsplash.com/photo-1542013936693-884638332954?w=900",
    result: "Zero downtime for business operations",
    client: "Northern Quarter Logistics",
    location: "Manchester, UK",
    duration: "3 days",
    challenge:
      "Recurring blockages in the main waste line were threatening to shut down a busy logistics hub.",
    solution:
      "Performed full CCTV survey followed by robotic descaling and structural patch lining. Restored 100% flow capacity with no excavation required.",
  },
];

export type Testimonial = {
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "David Miller",
    location: "Chelsea, London",
    rating: 5,
    text: "PipePro fixed our burst pipe at 2am without any drama. Truly professional team, they cleaned up better than they found it.",
    avatar: "https://i.pravatar.cc/120?img=11",
  },
  {
    name: "Emma Thompson",
    location: "Richmond, London",
    rating: 5,
    text: "Renovated our master bathroom in four days flat. Quote matched the invoice to the pound. Honest and skilled.",
    avatar: "https://i.pravatar.cc/120?img=47",
  },
  {
    name: "Thomas Wright",
    location: "Edgbaston, Birmingham",
    rating: 5,
    text: "Replaced our old boiler with a new combi unit. Our energy bill dropped 40% in the first month. Highly recommend.",
    avatar: "https://i.pravatar.cc/120?img=13",
  },
  {
    name: "Sophie Bennett",
    location: "Oxford",
    rating: 5,
    text: "Full re-pipe of a 40-year-old manor. Crew was tidy, on time and explained every step. Pressure is incredible now.",
    avatar: "https://i.pravatar.cc/120?img=45",
  },
  {
    name: "James Parker",
    location: "Clifton, Bristol",
    rating: 5,
    text: "Booked online, plumber arrived in under an hour. Drain cleared and a maintenance plan set up - easy.",
    avatar: "https://i.pravatar.cc/120?img=15",
  },
  {
    name: "James Wilson",
    location: "London, UK",
    rating: 5,
    text: "Incredible service for our Kensington apartment. The team was professional, tidy, and solved a complex piping issue that others couldn't handle.",
    avatar: "https://i.pravatar.cc/120?img=68",
  },
  {
    name: "Sarah Higgins",
    location: "Manchester, UK",
    rating: 5,
    text: "We used PipePro for our commercial logistics hub. They worked through the night to ensure zero downtime. Truly exceptional dedication.",
    avatar: "https://i.pravatar.cc/120?img=32",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  experience: string;
  image: string;
  bio: string;
};

export const team: TeamMember[] = [
  {
    name: "William Brooks",
    role: "Master Plumber & Founder",
    experience: "20+ yrs",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600",
    bio: "Founded PipePro Solutions in 2005 after a decade running large commercial sites. Master licensed in residential and commercial plumbing.",
  },
  {
    name: "Daniel Evans",
    role: "Lead Service Technician",
    experience: "12 yrs",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=600",
    bio: "Heads our emergency response team. Specialist in leak detection and pipe relining.",
  },
  {
    name: "Sian Taylor",
    role: "Client Success Manager",
    experience: "8 yrs",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600",
    bio: "Your first call. Schedules every visit, follows up after the job and runs our warranty programme.",
  },
  {
    name: "Oliver Smith",
    role: "Renovation Foreman",
    experience: "15 yrs",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600",
    bio: "Runs every bathroom and kitchen renovation from rough-in to final hand-over.",
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  body: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "how-to-prevent-pipe-bursts-winter",
    title: "How To Prevent Pipe Bursts During Cold Season",
    excerpt:
      "Cold temperatures can wreak havoc on your plumbing - here's how to protect your home before the first cold snap.",
    category: "Maintenance Tips",
    date: "June 5, 2025",
    readTime: "4 min read",
    image: "https://images.pexels.com/photos/15206136/pexels-photo-15206136.jpeg?w=1200",
    author: "William Brooks",
    body: [
      "Winter is when our phones ring the most. A burst pipe inside a wall can dump hundreds of litres before you notice and the damage is almost always more expensive than the repair itself.",
      "The good news: most cold-season bursts are completely preventable. Three habits stop nearly every one we see.",
      "First, insulate any exposed pipework. Foam sleeves cost very little and slide on in minutes. Pay special attention to pipes in garages, exterior walls and any unheated rooms.",
      "Second, let a single tap drip overnight when temperatures drop sharply. Moving water freezes far slower than still water and that tiny stream relieves pressure if ice does start to form.",
      "Third, know where your main shut-off valve is and make sure it actually turns. If something does let go, every second between you and that valve is more water on your floor.",
    ],
  },
  {
    slug: "signs-you-need-drain-cleaning",
    title: "5 Warning Signs Your Drains Need Professional Cleaning",
    excerpt:
      "Slow drainage and gurgling sounds are early red flags. Catch them early and you avoid the emergency call.",
    category: "DIY Tips",
    date: "May 28, 2025",
    readTime: "3 min read",
    image: "https://images.pexels.com/photos/87299/pexels-photo-87299.jpeg?w=1200",
    author: "Daniel Evans",
    body: [
      "Drains rarely fail without warning. By the time water is pooling around your feet in the shower, the blockage has been growing for weeks.",
      "Watch for water that drains noticeably slower than it did a month ago, gurgling sounds from another fixture when you flush, a faint sewage smell near floor drains, multiple slow drains at once, or recurring blockages in the same fixture.",
      "Any one of these alone is worth a hydro-jet service. Two or more usually means a partial main-line blockage and we strongly recommend a camera inspection.",
    ],
  },
  {
    slug: "water-heater-lifespan-guide",
    title: "Boiler Lifespan: When To Repair vs Replace",
    excerpt:
      "Most boilers last 10–15 years. Knowing when to repair and when to replace saves you thousands.",
    category: "Buying Guide",
    date: "May 20, 2025",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/30388730/pexels-photo-30388730.jpeg?w=1200",
    author: "William Brooks",
    body: [
      "Storage water heaters typically run 8–12 years. Combi boilers often hit 12–15. Past those marks, every repair is a coin flip on the next failure.",
      "Repair makes sense when the unit is under 10 years old, the failure is a single component (thermostat, element, valve) and there's no rust in the system.",
      "Replace when the heat exchanger itself is leaking, when repair costs exceed half the price of a new unit, or when your bills suggest the unit is no longer efficient.",
      "A modern high-efficiency boiler pays for itself in 4–5 years for most households we work with.",
    ],
  },
];

export const faqs = [
  {
    q: "Do you offer emergency plumbing services?",
    a: "Yes — we operate a 24/7 emergency line. Most calls in major UK cities get a technician on site within two hours.",
  },
  {
    q: "How quickly can you respond to a call?",
    a: "Standard bookings are scheduled same-day or next-day. Emergency calls average a 90-minute response across London, Manchester, Birmingham, Leeds and Bristol.",
  },
  {
    q: "Are your plumbers licensed and insured?",
    a: "Every technician is a Gas Safe registered and licensed tradesperson. We carry full public liability and workmanship insurance — certificates available on request.",
  },
  {
    q: "Do you provide a warranty on repairs?",
    a: "All workmanship is covered for two years. Manufacturer warranties on parts are honoured in full.",
  },
  {
    q: "What areas do you serve in the UK?",
    a: "All major cities including London, Manchester, Birmingham, Leeds, Bristol, Edinburgh, and Glasgow.",
  },
  {
    q: "How is pricing determined?",
    a: "We quote a flat rate based on the job after on-site diagnosis. You approve the price before any work starts — no surprises on the invoice.",
  },
  {
    q: "Can I get a quote before work begins?",
    a: "Always. On-site diagnostic visits are £45 and that fee is credited against the job if you proceed.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Cash, bank transfer, all major credit/debit cards, Apple Pay and Google Pay.",
  },
];

export const stats = [
  { value: 1_200_000, suffix: "+", label: "Projects Completed" },
  { value: 100, suffix: "%", label: "Satisfaction Rate" },
  { value: 25, suffix: "+", label: "Years Experience" },
  { value: 48, suffix: "hrs", label: "Avg Response Time" },
];

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
  { label: "Pricing", to: "/pricing" },
  { label: "Contact", to: "/contact" },
];
