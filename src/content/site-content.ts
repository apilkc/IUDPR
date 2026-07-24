// ============================================================================
// EDIT THIS FILE TO UPDATE WEBSITE TEXT.
// This is the ONLY file you need to touch to change most words on the site:
// headlines, descriptions, stats, team bios, testimonials, contact info.
// Do not edit files in src/components/ unless you're a developer.
//
// Projects and blog posts are NOT edited here. See src/content/projects/
// and src/content/blog/ instead, and read README-EDITING.md.
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

  // One flat list, same card treatment for everyone. Entries starting with
  // "Add ... Name" are placeholder slots, obvious to fill in or delete.
  // photoSeed picks a sample placeholder photo (1-70); linkedin/twitter are
  // dummy links until real profiles are ready.
  team: {
    eyebrow: "Who we are",
    heading: "Our Team",
    intro: "A small, hands-on team spanning Nepal and the United States.",
    people: [
      {
        photoSeed: 12,
        initials: "US",
        name: "Upendra Sapkota",
        credentials: "PP, LEED AP, AICP",
        role: "Chair, Board of Directors",
        brief:
          "Urban planner leading trail and active-transportation projects across North Jersey. Former Director of Planning, Zoning and Sustainability for the City of Newark.",
        bio: "Urban planner leading trail-network and active-transportation initiatives across North Jersey as NJ Project Director for Rails to Trails Conservancy. Previously Director of Newark's Office of Planning, Zoning & Sustainability. M.U.R.P., Ball State University; B.Arch., Tribhuvan University (IOE).",
        linkedin: "https://linkedin.com/in/upendra-sapkota",
        twitter: "https://twitter.com/upendrasapkota",
      },
      {
        photoSeed: 33,
        initials: "AK",
        name: "Apil KC",
        credentials: "",
        role: "Director, Board of Directors",
        brief:
          "Architect and urban planner researching disaster risk reduction and climate adaptation. PhD candidate in Urban Planning at the University of Michigan.",
        bio: "Architect and urban planner researching disaster risk reduction, climate adaptation, and community resilience. PhD candidate in Urban, Community & Regional Planning at the University of Michigan. Over a decade in Nepal, including Principal Architect at Urban Park Pvt. Ltd. and consultant on the World Bank-funded Urban Governance and Infrastructure Improvement Project. Secretary General, Society of Nepalese Architects.",
        linkedin: "https://linkedin.com/in/apilkc",
        twitter: "https://twitter.com/apilkc",
      },
      {
        photoSeed: 47,
        initials: "PD",
        name: "Priti Dawadi",
        credentials: "",
        role: "Director, Board of Directors",
        brief:
          "Architectural designer focused on sustainable, community-centered design, with experience spanning earthquake recovery work in Nepal and practice in the US.",
        bio: "Architectural designer working across conceptual design, construction documentation, and mixed-use development, with experience spanning earthquake-recovery work in Nepal and practice in the US. M.S. Infrastructure Planning, NJIT; B.Arch., Tribhuvan University (IOE). Focused on sustainable, community-centered design.",
        linkedin: "https://linkedin.com/in/priti-dawadi",
        twitter: "https://twitter.com/pritidawadi",
      },
      {
        photoSeed: 5,
        initials: "D1",
        name: "Add Director Name",
        credentials: "",
        role: "Director, Board of Directors",
        brief: "Add a short, roughly twenty-word summary of this person's role and background here.",
        bio: "Add a longer biography here for the read-more popup.",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
      {
        photoSeed: 8,
        initials: "D2",
        name: "Add Director Name Two",
        credentials: "",
        role: "Director, Board of Directors",
        brief: "Add a short, roughly twenty-word summary of this person's role and background here.",
        bio: "Add a longer biography here for the read-more popup.",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
      {
        photoSeed: 21,
        initials: "P1",
        name: "Add Patron Name",
        credentials: "",
        role: "Patron",
        brief: "Add a short, roughly twenty-word summary of this person's role and background here.",
        bio: "Add a longer biography here for the read-more popup.",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
      {
        photoSeed: 24,
        initials: "P2",
        name: "Add Patron Name Two",
        credentials: "",
        role: "Advisor",
        brief: "Add a short, roughly twenty-word summary of this person's role and background here.",
        bio: "Add a longer biography here for the read-more popup.",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
      {
        photoSeed: 29,
        initials: "P3",
        name: "Add Patron Name Three",
        credentials: "",
        role: "Advisor",
        brief: "Add a short, roughly twenty-word summary of this person's role and background here.",
        bio: "Add a longer biography here for the read-more popup.",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
      {
        photoSeed: 36,
        initials: "R1",
        name: "Add Researcher Name",
        credentials: "",
        role: "Research Associate",
        brief: "Add a short, roughly twenty-word summary of this person's role and background here.",
        bio: "Add a longer biography here for the read-more popup.",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
      {
        photoSeed: 41,
        initials: "R2",
        name: "Add Researcher Name Two",
        credentials: "",
        role: "Research Associate",
        brief: "Add a short, roughly twenty-word summary of this person's role and background here.",
        bio: "Add a longer biography here for the read-more popup.",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
      {
        photoSeed: 45,
        initials: "PO",
        name: "Add Program Officer Name",
        credentials: "",
        role: "Program Officer",
        brief: "Add a short, roughly twenty-word summary of this person's role and background here.",
        bio: "Add a longer biography here for the read-more popup.",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
      {
        photoSeed: 50,
        initials: "OM",
        name: "Add Office Manager Name",
        credentials: "",
        role: "Office Manager",
        brief: "Add a short, roughly twenty-word summary of this person's role and background here.",
        bio: "Add a longer biography here for the read-more popup.",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
      {
        photoSeed: 54,
        initials: "RA",
        name: "Add Research Assistant Name",
        credentials: "",
        role: "Research Assistant",
        brief: "Add a short, roughly twenty-word summary of this person's role and background here.",
        bio: "Add a longer biography here for the read-more popup.",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
      {
        photoSeed: 60,
        initials: "CO",
        name: "Add Communications Name",
        credentials: "",
        role: "Communications Officer",
        brief: "Add a short, roughly twenty-word summary of this person's role and background here.",
        bio: "Add a longer biography here for the read-more popup.",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    ],
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
