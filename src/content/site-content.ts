// ============================================================================
// EDIT THIS FILE TO UPDATE WEBSITE TEXT.
// This is the ONLY file you need to touch to change words on the site —
// headlines, descriptions, stats, team bios, contact info, etc.
// Do not edit files in src/components/ unless you're a developer.
//
// Just change the text between the quotes ("...") and save. Don't remove
// commas, curly braces {}, or square brackets [].
// ============================================================================

export type FocusAreaIcon =
  | "Home"
  | "Map"
  | "Leaf"
  | "Landmark"
  | "Users"
  | "GraduationCap";

export const siteContent = {
  nav: {
    links: [
      { label: "About", href: "#about" },
      { label: "Focus Areas", href: "#focus-areas" },
      { label: "Approach", href: "#approach" },
      { label: "Leadership", href: "#leadership" },
      { label: "Contact", href: "#contact" },
    ],
    cta: "Partner With Us",
  },

  hero: {
    eyebrow: "Since 2015 · Kathmandu Valley, Nepal",
    headline: "Better policy. Better cities. Built with communities.",
    subhead:
      "IUDPR is a Nepal-based research institute helping communities, NGOs, and government partners plan housing, infrastructure, and public space that lasts.",
    primaryCta: "Partner With Us",
    secondaryCta: "See Our Focus Areas",
  },

  stats: [
    { value: 2015, suffix: "", label: "Founded" },
    { value: 5, suffix: "+", label: "Full-time researchers" },
    { value: 13, suffix: "", label: "Focus areas" },
    { value: 1, suffix: "", label: "IOE Pulchowk partnership" },
  ],

  about: {
    eyebrow: "About IUDPR",
    heading: "Research-driven, community-first",
    body: "IUDPR works to improve cities and regions and promote sustainable development through innovative, ingenious, and community-based planning programs. We provide policy frameworks and knowledge-sharing support to local communities, NGOs, and government authorities in decision-making and implementation — building active partnerships with academic institutions, government agencies, and national and international NGOs. Most importantly, we work directly with local community-based organizations, offering the professional support they need to achieve broader, lasting development.",
    affiliations: [
      "Academic institutions",
      "Government agencies",
      "National & international NGOs",
      "Community-based organizations",
    ],
    diagram: {
      rings: ["Research", "Policy", "Community"],
    },
  },

  focusAreas: {
    eyebrow: "What we do",
    heading: "Where we work",
    intro:
      "Thirteen focus areas, grouped into six practice clusters — from housing and infrastructure to heritage, resilience, and education.",
    items: [
      {
        icon: "Home" as FocusAreaIcon,
        title: "Housing & Settlements",
        description:
          "Affordable housing, urban poverty, and support for informal settlements.",
      },
      {
        icon: "Map" as FocusAreaIcon,
        title: "Planning & Infrastructure",
        description:
          "Urban and regional development, transportation, land use, and public space.",
      },
      {
        icon: "Leaf" as FocusAreaIcon,
        title: "Environment & Resilience",
        description:
          "Climate change, environmental planning, and disaster resilience.",
      },
      {
        icon: "Landmark" as FocusAreaIcon,
        title: "Design & Heritage",
        description:
          "Architecture, urban design, historic preservation, and heritage management.",
      },
      {
        icon: "Users" as FocusAreaIcon,
        title: "Community & Economy",
        description:
          "Economic development, food security, agriculture, and rural livelihoods.",
      },
      {
        icon: "GraduationCap" as FocusAreaIcon,
        title: "Research & Education",
        description:
          "Training, academic partnerships, and knowledge-sharing for planners and communities.",
      },
    ],
  },

  approach: {
    eyebrow: "How we work",
    heading: "Our approach",
    items: [
      {
        title: "Advocacy & Sensitization",
        description:
          "Raising awareness and building consensus around urban policy issues with communities and decision-makers.",
      },
      {
        title: "Behavioral Change Communication",
        description:
          "Designing communication strategies that shift attitudes and everyday practices toward sustainable urban living.",
      },
      {
        title: "Academic Conferences",
        description:
          "Convening researchers, practitioners, and policymakers to share evidence and shape practice.",
      },
      {
        title: "Youth-Friendly Resource Centers",
        description:
          "Creating accessible spaces where young people engage with planning and civic life.",
      },
      {
        title: "Training Peer Educators",
        description:
          "Building local capacity by training community members to lead outreach and education.",
      },
      {
        title: "Urban Service Provision",
        description:
          "Supporting direct delivery of planning and technical services to underserved communities.",
      },
    ],
  },

  leadership: {
    eyebrow: "Who we are",
    heading: "Leadership",
    intro: "A small, hands-on team spanning Nepal and the United States.",
    people: [
      {
        initials: "US",
        name: "Upendra Sapkota",
        credentials: "PP, LEED AP, AICP",
        boardRole: "Chair",
        title: "New Jersey Project Director, Rails to Trails Conservancy",
        bio: "Urban planner leading trail-network and active-transportation initiatives across North Jersey as NJ Project Director for Rails to Trails Conservancy. Previously Director of Newark's Office of Planning, Zoning & Sustainability. M.U.R.P., Ball State University; B.Arch., Tribhuvan University (IOE).",
      },
      {
        initials: "AK",
        name: "Apil KC",
        credentials: "",
        boardRole: "Director",
        title:
          "PhD Candidate in Urban Planning, University of Michigan · Architect & Urban Planner",
        bio: "Architect and urban planner researching disaster risk reduction, climate adaptation, and community resilience; PhD candidate in Urban, Community & Regional Planning at the University of Michigan. Over a decade in Nepal, including Principal Architect at Urban Park Pvt. Ltd. and consultant on the World Bank–funded Urban Governance and Infrastructure Improvement Project. Secretary General, Society of Nepalese Architects.",
      },
      {
        initials: "PD",
        name: "Priti Dawadi",
        credentials: "",
        boardRole: "Director",
        title: "Architectural Designer, The Dietz Partnership",
        bio: "Architectural designer working across conceptual design, construction documentation, and mixed-use development, with experience spanning earthquake-recovery work in Nepal and practice in the US. M.S. Infrastructure Planning, NJIT; B.Arch., Tribhuvan University (IOE). Focused on sustainable, community-centered design.",
      },
    ],
  },

  contact: {
    eyebrow: "Get in touch",
    headline: "Let's build better cities together",
    email: "iudpresearch@gmail.com",
    directorEmail: "apil@iudpr.org.np",
    phone: "+977-9851120765",
    address: "Jhamsikhel, Lalitpur, Nepal",
    website: "www.iudpr.org.np",
    ctaLabel: "Email Us",
  },

  footer: {
    tagline: "Research-driven planning for Nepal's cities and communities.",
  },
};
