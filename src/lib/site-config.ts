export const siteConfig = {
    name: "TechSaws",
    legalName: "TechSaws",
    alternateName: "TechSaws Digital",

    tagline: "We Build. We Brand. We Break Boundaries.",
    slogan: "We Build. We Brand. We Break Boundaries.",

    url: (process.env.FRONTEND_URL ?? "https://techsaws.com").replace(
        /\/$/,
        ""
    ),

    title: "TechSaws | We Build. We Brand. We Break Boundaries.",

    description:
        "TechSaws designs and builds AI automation systems, software platforms, revenue infrastructure, and cybersecurity solutions for modern businesses focused on growth, efficiency, and scale.",

    shortDescription:
        "TechSaws builds AI, software, revenue, and security systems for businesses focused on growth and scale.",

    metadataTitleTemplate:
        "%s | TechSaws - We Build. We Brand. We Break Boundaries.",

    ogImage: "/banners/og-banner.png",
    locale: "en_US",
    language: "en",
    publishedTime: "2026-06-18T00:00:00.000Z",
    modifiedTime: "2026-06-18T00:00:00.000Z",

    icons: {
        favicon: "/favicons/favicon.ico",
        apple: "/favicons/apple-icon.png",
        icon96: "/favicons/logo-96x96.png",
        icon192: "/favicons/logo-192x192.png",
        icon512: "/favicons/logo-512x512.png",
    },

    branding: {
        themeColor: "#ffffff",
        backgroundColor: "#000000",
    },

    positioning:
        "TechSaws is a systems engineering company that designs, builds, secures, and scales the technology behind modern businesses. From AI automation and software platforms to revenue infrastructure and cybersecurity, we create systems that improve execution, accelerate growth, and support long-term scale.",

    mission:
        "To build the systems that help ambitious businesses operate smarter, grow faster, and scale with confidence.",

    longDescription:
        "Technology should create leverage, not complexity. TechSaws designs and develops business systems that improve how organizations operate, acquire customers, and scale. Our work spans AI automation, software engineering, revenue infrastructure, cybersecurity, and ongoing technical support. We approach every project as a system rather than a collection of tools. Whether automating workflows, building software platforms, securing critical infrastructure, or optimizing customer acquisition, the objective remains the same: create reliable systems that generate measurable business value. By combining engineering, automation, growth infrastructure, and security expertise, TechSaws helps businesses move faster, operate more efficiently, and scale with greater confidence.",

    social: {
        linkedin: process.env.LINKEDIN_URL,
        x: process.env.X_URL,
        instagram: process.env.INSTAGRAM_URL,
        youtube: process.env.YOUTUBE_URL,
    },

    contact: {
        email: process.env.COMPANY_EMAIL,
        phone: process.env.COMPANY_PHONE,
    },

    location: {
        country: process.env.COMPANY_COUNTRY,
        city: process.env.COMPANY_CITY,
    },

    services: [
        "AI & Automation Systems",
        "Software & Platform Engineering",
        "Revenue & Growth Systems",
        "Offensive Security & Cyber Defense",
    ],

    solutions: [
        "Ongoing Support & Managed Services",
        "Technology Advisory & Consulting",
    ],
} as const;

export type SiteConfig = typeof siteConfig;
