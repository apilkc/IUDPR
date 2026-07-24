// ============================================================================
// EDIT THIS FILE TO UPDATE WEBSITE TEXT.
// This is the ONLY file you need to touch to change most words on the site:
// headlines, descriptions, stats, testimonials, contact info.
// Do not edit files in src/components/ unless you're a developer.
//
// Team members, projects, and blog posts are NOT edited here — each is its
// own file: src/content/team/, src/content/projects/, src/content/blog/.
// Read README-EDITING.md for how to add or edit those.
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
      { label: "Projects", href: "/projects" },
      { label: "Our Team", href: "/team" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "#contact" },
    ],
    cta: "Partner With Us",
  },

  hero: {
    headline: "Better policy. Better cities. Built with communities.",
    subhead:
      "Nepal's cities are growing faster than the systems built to guide them. Too often, housing, infrastructure, and public services are planned without the people who will use them. IUDPR works to change that. We carry out field research, translate it into practical policy, and support the training and services communities need to put it to work. Our focus spans affordable housing, disaster resilience, heritage preservation, and public space. Every project starts with the community it is meant to serve.",
    primaryCta: "Partner With Us",
    secondaryCta: "See Our Work",
  },

  stats: [
    { value: 2015, suffix: "", label: "Founded" },
    { value: 20, suffix: "+", label: "Projects completed" },
    { value: 100, suffix: "+", label: "Advocacy initiatives" },
    { value: 13, suffix: "", label: "Focus areas" },
  ],

  // Dummy links. Replace with your real social profiles.
  social: {
    facebook: "https://facebook.com/iudprnepal",
    twitter: "https://twitter.com/iudprnepal",
    instagram: "https://instagram.com/iudprnepal",
  },

  about: {
    eyebrow: "About IUDPR",
    heading: "Research-driven, community-first",
    body: "IUDPR works to improve cities and regions and promote sustainable development through community-based planning programs. We provide policy frameworks and knowledge-sharing support to local communities, NGOs, and government authorities in decision-making and implementation. We build active partnerships with academic institutions, government agencies, and national and international NGOs. Most importantly, we work directly with local community-based organizations, offering the professional support they need to achieve broader, lasting development.",
    affiliations: [
      "Academic institutions",
      "Government agencies",
      "National & international NGOs",
      "Community-based organizations",
    ],
    diagram: {
      rings: [
        {
          label: "Research",
          description: "Field studies and data that ground every project in what's actually happening.",
        },
        {
          label: "Policy",
          description: "Findings translated into practical recommendations decision-makers can act on.",
        },
        {
          label: "Community",
          description: "Where the work lives. Every project is shaped by the people it serves.",
        },
      ],
    },
  },

  focusAreas: {
    statementLead: "What we focus on.",
    statementMain: "Six practice areas, thirteen focus areas",
    intro: "From affordable housing to heritage preservation, we work across the issues that shape how Nepal's cities grow.",
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
    statementLead: "How we work.",
    statementMain: "Advocacy, training, and services that turn research into results",
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

  // Placeholder quotes. Replace with real feedback from partners once available.
  testimonials: {
    eyebrow: "What partners say",
    heading: "Testimonials",
    items: [
      {
        initials: "LG",
        name: "Program Officer",
        title: "Local Government Partner",
        quote:
          "IUDPR brought a level of community engagement to this project that we had not seen before. Their research shaped decisions that affected thousands of residents.",
      },
      {
        initials: "NG",
        name: "Project Coordinator",
        title: "International NGO Partner",
        quote:
          "Working with IUDPR gave our team the local knowledge and technical rigor we needed to move this program from plan to practice.",
      },
      {
        initials: "AC",
        name: "Research Director",
        title: "Academic Partner Institution",
        quote:
          "Their research is grounded in fieldwork, not just theory. That makes the findings genuinely useful for policy.",
      },
    ],
  },

  // Individual team members are NOT edited here. Each person is their own
  // file in src/content/team/board-and-advisors/ or
  // src/content/team/research-and-admin-team/. See README-EDITING.md.
  team: {
    eyebrow: "Who we are",
    heading: "Our Team",
    intro: "A small, hands-on team spanning Nepal and the United States.",
  },

  contact: {
    eyebrow: "Get in touch",
    headline: "Let's build better cities together.",
    email: "iudpresearch@gmail.com",
    directorEmail: "apil@iudpr.org.np",
    phone: "+977-9851120765",
    address: "Jhamsikhel, Lalitpur, Nepal",
    website: "www.iudpr.org.np",
    ctaLabel: "Partner With Us",
  },

  footer: {
    tagline: "Research-driven planning for Nepal's cities and communities.",
  },
};
