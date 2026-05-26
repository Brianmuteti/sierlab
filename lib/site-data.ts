export const SERVICES_NAV = [
    { name: "Custom Web Applications", href: "/custom-web-applications" },
    { name: "E-Commerce Development", href: "/ecommerce-development" },
    { name: "Website & Landing Page Design", href: "/website-design" },
    { name: "API Integration Services", href: "/api-integration-services" },
    { name: "SEO Optimization", href: "/seo-optimization" },
    { name: "Cybersecurity Consulting", href: "/cybersecurity-consulting" },
] as const;

export type ServiceSlug =
    | "/custom-web-applications"
    | "/ecommerce-development"
    | "/website-design"
    | "/api-integration-services"
    | "/seo-optimization"
    | "/cybersecurity-consulting";

export interface ServiceFeatureBlock {
    title: string;
    icon: string;
    items: string[];
}

export interface ServiceProcessStep {
    step: string;
    title: string;
    text: string;
}

export interface ServiceDetail {
    slug: ServiceSlug;
    title: string;
    subtitle: string;
    tagline: string;
    badge?: string;
    icon: string;
    description: string;
    highlights: { label: string; value: string }[];
    features: ServiceFeatureBlock[];
    benefits: string[];
    idealFor: string[];
    technologies: string[];
    process: ServiceProcessStep[];
    faqs: { q: string; a: string }[];
}

const DEFAULT_PROCESS: ServiceProcessStep[] = [
    {
        step: "01",
        title: "Discovery",
        text: "We map your goals, users, and existing tools in a focused kickoff call.",
    },
    {
        step: "02",
        title: "Design & Plan",
        text: "Wireframes, scope, timeline, and milestone pricing — agreed before build starts.",
    },
    {
        step: "03",
        title: "Build & Test",
        text: "Agile delivery with demos, staging reviews, and QA on real devices.",
    },
    {
        step: "04",
        title: "Launch & Support",
        text: "Deployment, handover docs, training, and post-launch support options.",
    },
];

export const SERVICE_DETAILS: Record<ServiceSlug, ServiceDetail> = {
    "/custom-web-applications": {
        slug: "/custom-web-applications",
        title: "Custom Web Applications",
        subtitle: "Management & Business Systems",
        tagline: "Smart, scalable systems built around how your team actually works",
        badge: "Core Service",
        icon: "💻",
        description:
            "We build custom web applications with React, Next.js, and Node.js — from HR and payroll to inventory, finance, and hospital operations. Every module reflects your workflows, not a generic template.",
        highlights: [
            { label: "Typical timeline", value: "4–12 weeks" },
            { label: "Stack", value: "React · Next.js · Node" },
            { label: "Deployment", value: "Cloud-ready" },
            { label: "Support", value: "Post-launch SLA" },
        ],
        features: [
            {
                title: "Tailored Business Systems",
                icon: "📊",
                items: [
                    "Custom dashboards, modules, and reporting",
                    "Role-based access and permissions",
                    "Workflow automation & approvals",
                    "Multi-branch / multi-tenant support",
                ],
            },
            {
                title: "Modern Engineering",
                icon: "⚙️",
                items: [
                    "React & Next.js frontends",
                    "REST APIs and secure databases",
                    "M-Pesa and third-party integrations",
                    "CI/CD and cloud deployment",
                ],
            },
        ],
        benefits: [
            "Replace spreadsheets with one source of truth",
            "Cut manual work with automated workflows",
            "Scale modules as the business grows",
            "Own your data — no vendor lock-in traps",
        ],
        idealFor: [
            "SMEs outgrowing Excel",
            "HR & operations teams",
            "Healthcare & logistics",
            "Multi-location businesses",
        ],
        technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "M-Pesa API", "AWS"],
        process: DEFAULT_PROCESS,
        faqs: [
            {
                q: "Can you migrate data from our old system?",
                a: "Yes. We plan imports from spreadsheets, legacy databases, or APIs with validation and rollback steps.",
            },
            {
                q: "Do we own the source code?",
                a: "Absolutely. You receive full ownership, documentation, and deployment access on handover.",
            },
        ],
    },
    "/ecommerce-development": {
        slug: "/ecommerce-development",
        title: "E-Commerce Development",
        subtitle: "Online Store Platforms",
        tagline: "Launch a store customers trust — with M-Pesa and cards built in",
        badge: "Popular",
        icon: "🛒",
        description:
            "Sell online with a storefront tailored to your brand — product catalog, inventory, order tracking, and checkout flows optimized for Kenya, including M-Pesa STK Push and international cards.",
        highlights: [
            { label: "Go-live", value: "2–8 weeks" },
            { label: "Payments", value: "M-Pesa · Cards" },
            { label: "Mobile", value: "100% responsive" },
            { label: "Orders", value: "Unified dashboard" },
        ],
        features: [
            {
                title: "Store & Checkout",
                icon: "🏪",
                items: [
                    "Product catalog, variants & inventory",
                    "M-Pesa STK Push & card checkout",
                    "Cart, coupons & abandoned-cart flows",
                    "Order, delivery & customer notifications",
                ],
            },
            {
                title: "Growth & Analytics",
                icon: "📈",
                items: [
                    "SEO-friendly product pages",
                    "Google Analytics & Meta Pixel",
                    "Admin dashboard for staff",
                    "WhatsApp order alerts (optional)",
                ],
            },
        ],
        benefits: [
            "Sell 24/7 across Kenya and beyond",
            "Accept payments customers already use",
            "Manage stock and orders in one place",
            "Brand experience that builds trust",
        ],
        idealFor: [
            "Retail & fashion brands",
            "Wholesale distributors",
            "Food & beverage delivery",
            "B2B catalog sellers",
        ],
        technologies: ["Next.js", "Stripe", "M-Pesa Daraja", "PayPal", "PostgreSQL"],
        process: DEFAULT_PROCESS,
        faqs: [
            {
                q: "Which payment methods can you integrate?",
                a: "M-Pesa (Daraja), Stripe, PayPal, bank transfers, and Flutterwave — often combined in one checkout.",
            },
            {
                q: "Can I manage products myself?",
                a: "Yes. We deliver an admin panel so your team can add products, prices, and stock without developers.",
            },
        ],
    },
    "/website-design": {
        slug: "/website-design",
        title: "Website & Landing Page Design",
        subtitle: "High-Performance Marketing Sites",
        tagline: "Fast, beautiful sites that turn visitors into leads",
        badge: "Design",
        icon: "🎨",
        description:
            "We design and develop marketing websites and landing pages with clear messaging, strong CTAs, and performance that scores well on Core Web Vitals — so your brand looks professional and loads fast on mobile.",
        highlights: [
            { label: "Landing pages", value: "1–2 weeks" },
            { label: "Full sites", value: "2–6 weeks" },
            { label: "CMS", value: "Optional" },
            { label: "SEO", value: "Built-in basics" },
        ],
        features: [
            {
                title: "Design & UX",
                icon: "✨",
                items: [
                    "Mobile-first, brand-aligned layouts",
                    "Conversion-focused page structure",
                    "Accessible typography & contrast",
                    "Illustration & icon direction",
                ],
            },
            {
                title: "Build & Launch",
                icon: "🚀",
                items: [
                    "Next.js for speed & SEO",
                    "Contact forms & CRM hooks",
                    "Analytics & event tracking",
                    "Domain, SSL & hosting setup",
                ],
            },
        ],
        benefits: [
            "Strong first impression for prospects",
            "Higher conversion from paid traffic",
            "Easy content updates via CMS",
            "Rank better with technical SEO basics",
        ],
        idealFor: [
            "Startups launching a brand",
            "Campaign landing pages",
            "Professional services firms",
            "Product launches & events",
        ],
        technologies: ["Next.js", "Figma", "Vercel", "Google Analytics", "Sanity CMS"],
        process: DEFAULT_PROCESS,
        faqs: [
            {
                q: "Do you provide copywriting?",
                a: "We structure pages and refine your draft copy. Full copywriting can be added as a separate scope.",
            },
            {
                q: "Will I be able to edit content later?",
                a: "Yes — we can connect a headless CMS or train you on simple static updates, depending on your preference.",
            },
        ],
    },
    "/api-integration-services": {
        slug: "/api-integration-services",
        title: "API Integration Services",
        subtitle: "Payments & Third-Party Connectors",
        tagline: "Reliable connections between your app and the tools you depend on",
        badge: "Integrations",
        icon: "🔗",
        description:
            "Connect your product to M-Pesa Daraja, banks, Stripe, PayPal, CRMs, and custom REST or SOAP APIs. We handle auth, webhooks, retries, logging, and documentation so integrations stay maintainable.",
        highlights: [
            { label: "M-Pesa", value: "STK · C2B · B2C" },
            { label: "APIs", value: "REST · SOAP" },
            { label: "Docs", value: "Full handover" },
            { label: "Monitoring", value: "Error alerts" },
        ],
        features: [
            {
                title: "Payment Integrations",
                icon: "💳",
                items: [
                    "M-Pesa STK Push, callbacks & reconciliation",
                    "Stripe, PayPal, Flutterwave",
                    "Bank transfer & payout APIs",
                    "Idempotent payment handling",
                ],
            },
            {
                title: "Business Systems",
                icon: "🔌",
                items: [
                    "ERP, CRM & accounting connectors",
                    "Webhook receivers & dispatchers",
                    "Scheduled sync jobs",
                    "Sandbox → production rollout",
                ],
            },
        ],
        benefits: [
            "Automate payments and reduce errors",
            "Real-time sync between platforms",
            "Clear audit trails for finance teams",
            "Documented APIs your devs can extend",
        ],
        idealFor: [
            "SaaS billing upgrades",
            "E-commerce checkout",
            "Fintech & lending apps",
            "Internal ops automation",
        ],
        technologies: ["M-Pesa Daraja", "Stripe", "Node.js", "Webhooks", "Redis", "Postman"],
        process: DEFAULT_PROCESS,
        faqs: [
            {
                q: "Can you fix a broken M-Pesa integration?",
                a: "Yes. We audit callbacks, credentials, and idempotency — then patch or rebuild the flow with proper logging.",
            },
            {
                q: "Do you sign NDAs for API credentials?",
                a: "Of course. We use secure secret storage and never commit keys to source control.",
            },
        ],
    },
    "/seo-optimization": {
        slug: "/seo-optimization",
        title: "SEO Optimization",
        subtitle: "Search Visibility & Performance",
        tagline: "Rank higher, load faster, and attract qualified traffic",
        icon: "📈",
        description:
            "Improve how search engines and users experience your site — technical audits, on-page optimization, Core Web Vitals, structured data, and local SEO tuned for Kenya and regional markets.",
        highlights: [
            { label: "Audit", value: "Full site review" },
            { label: "Local SEO", value: "Kenya focus" },
            { label: "Reports", value: "Monthly KPIs" },
            { label: "Speed", value: "CWV tuning" },
        ],
        features: [
            {
                title: "Technical SEO",
                icon: "🔧",
                items: [
                    "Crawlability, indexing & sitemap fixes",
                    "Core Web Vitals improvements",
                    "Schema & structured data",
                    "HTTPS, redirects & canonical tags",
                ],
            },
            {
                title: "Content & Local",
                icon: "📝",
                items: [
                    "Keyword research & page mapping",
                    "Title, meta & heading optimization",
                    "Google Business Profile guidance",
                    "Competitor & SERP analysis",
                ],
            },
        ],
        benefits: [
            "More organic visits over time",
            "Better-quality leads from search",
            "Faster pages improve conversions",
            "Transparent progress reporting",
        ],
        idealFor: [
            "Local service businesses",
            "E-commerce stores",
            "Blogs & content sites",
            "Sites after a redesign",
        ],
        technologies: ["Google Search Console", "GA4", "Lighthouse", "Screaming Frog", "Next.js"],
        process: DEFAULT_PROCESS,
        faqs: [
            {
                q: "How soon will we see SEO results?",
                a: "Technical fixes can show impact in weeks; ranking gains typically build over 3–6 months with consistent effort.",
            },
            {
                q: "Do you guarantee page-one rankings?",
                a: "No ethical agency can guarantee rankings. We focus on measurable improvements in traffic, speed, and conversions.",
            },
        ],
    },
    "/cybersecurity-consulting": {
        slug: "/cybersecurity-consulting",
        title: "Cybersecurity Consulting",
        subtitle: "Assessments & Risk Reduction",
        tagline: "Identify vulnerabilities before attackers do",
        icon: "🛡️",
        description:
            "Protect your business with security assessments, penetration testing, policy guidance, and practical remediation — aligned to how SMEs and enterprises in Kenya actually operate.",
        highlights: [
            { label: "Assessment", value: "1–3 weeks" },
            { label: "Testing", value: "Web & API" },
            { label: "Compliance", value: "Guidance" },
            { label: "Training", value: "Staff workshops" },
        ],
        features: [
            {
                title: "Testing & Audits",
                icon: "🔍",
                items: [
                    "Vulnerability scanning & prioritization",
                    "Penetration testing (web & API)",
                    "Configuration & access reviews",
                    "Third-party risk checklist",
                ],
            },
            {
                title: "Remediation & Training",
                icon: "📋",
                items: [
                    "Actionable fix roadmap",
                    "Incident response playbooks",
                    "Security awareness sessions",
                    "Ongoing monitoring recommendations",
                ],
            },
        ],
        benefits: [
            "Reduce likelihood of costly breaches",
            "Meet partner or regulatory expectations",
            "Clear priorities — not fear-driven spending",
            "Confidence for leadership and clients",
        ],
        idealFor: [
            "Fintech & payment platforms",
            "SaaS with customer data",
            "Healthcare & education",
            "Teams before a major launch",
        ],
        technologies: ["OWASP", "Burp Suite", "Nmap", "SSL/TLS", "SIEM guidance"],
        process: [
            {
                step: "01",
                title: "Scope & Access",
                text: "Define systems in scope, rules of engagement, and secure access channels.",
            },
            {
                step: "02",
                title: "Assess & Test",
                text: "Automated scans plus manual testing on critical paths and APIs.",
            },
            {
                step: "03",
                title: "Report & Prioritize",
                text: "Risk-rated findings with business impact and remediation steps.",
            },
            {
                step: "04",
                title: "Fix & Verify",
                text: "Support your team through fixes and optional re-test validation.",
            },
        ],
        faqs: [
            {
                q: "Will testing disrupt our live systems?",
                a: "We schedule tests in agreed windows and use staging where possible. Production tests follow strict rules of engagement.",
            },
            {
                q: "Do you help implement fixes?",
                a: "Yes — we can advise your developers or implement patches as a separate engineering engagement.",
            },
        ],
    },
};

export function getRelatedServices(
    current: ServiceSlug,
    limit = 3
): ServiceDetail[] {
    const ordered = SERVICES_NAV.map(
        (n) => SERVICE_DETAILS[n.href as ServiceSlug]
    );
    const idx = ordered.findIndex((s) => s.slug === current);
    const related: ServiceDetail[] = [];
    for (let i = 1; i < ordered.length && related.length < limit; i++) {
        related.push(ordered[(idx + i) % ordered.length]);
    }
    return related;
}

export const COMPANY_STATS = [
    { value: "40+", label: "Projects delivered" },
    { value: "5+", label: "Years in business" },
    { value: "98%", label: "Client retention" },
    { value: "24/7", label: "Support options" },
];

export const TESTIMONIALS = [
    {
        initials: "SM",
        name: "Sarah Mwangi",
        role: "Operations Director, Nairobi retail",
        quote:
            "Sierlab built our inventory system from scratch. Tracking stock and sales is now effortless — exactly what we needed.",
    },
    {
        initials: "JK",
        name: "James Kariuki",
        role: "Founder, online retail brand",
        quote:
            "Our store went live in weeks with M-Pesa checkout integrated. Clear communication and solid engineering throughout.",
    },
    {
        initials: "GW",
        name: "Dr. Grace Wanjiku",
        role: "Clinic director, Westlands",
        quote:
            "They digitized patient scheduling and records. No more paper chaos — it's been a game changer for our clinic.",
    },
];

export interface CaseStudy {
    slug: string;
    title: string;
    client: string;
    industry: string;
    icon: string;
    summary: string;
    challenge: string;
    solution: string;
    results: string[];
    services: string[];
}

export const CASE_STUDIES: CaseStudy[] = [
    {
        slug: "retail-inventory",
        title: "Multi-branch inventory platform",
        client: "Nairobi retail group",
        industry: "Retail",
        icon: "📦",
        summary:
            "Unified stock, sales, and reporting across three branches with role-based dashboards.",
        challenge:
            "Spreadsheets and disconnected POS exports made it impossible to see real-time stock levels.",
        solution:
            "Custom Next.js app with branch-level permissions, low-stock alerts, and sales analytics.",
        results: [
            "60% less time on manual stock counts",
            "Single dashboard for all branches",
            "Automated low-stock email alerts",
        ],
        services: ["Custom Web Applications"],
    },
    {
        slug: "mpesa-ecommerce",
        title: "M-Pesa checkout for D2C brand",
        client: "Kenyan e-commerce startup",
        industry: "E-Commerce",
        icon: "🛒",
        summary:
            "Mobile-first storefront with STK Push, order tracking, and admin order management.",
        challenge:
            "Previous site couldn't accept M-Pesa reliably and lost orders during peak campaigns.",
        solution:
            "Next.js storefront with Daraja integration, webhook reconciliation, and WhatsApp order alerts.",
        results: [
            "Live in 6 weeks",
            "95%+ successful STK Push rate",
            "2× conversion on mobile checkout",
        ],
        services: ["E-Commerce Development", "API Integration Services"],
    },
    {
        slug: "clinic-scheduling",
        title: "Clinic scheduling & records",
        client: "Private healthcare clinic",
        industry: "Healthcare",
        icon: "🏥",
        summary:
            "Patient booking, staff calendars, and digital records replacing paper workflows.",
        challenge:
            "Double bookings and lost paper files slowed daily operations and patient experience.",
        solution:
            "Secure web app with appointment slots, SMS reminders, and searchable patient history.",
        results: [
            "Fewer no-shows with reminders",
            "Faster front-desk check-in",
            "Audit-friendly digital records",
        ],
        services: ["Custom Web Applications"],
    },
];

export const CAREER_JOBS = [
    {
        title: "Full-Stack Developer",
        type: "Full-time · Nairobi / Hybrid",
        description:
            "Build React/Next.js apps and Node APIs for Kenyan clients. 2+ years experience with TypeScript preferred.",
    },
    {
        title: "UI/UX Designer",
        type: "Contract · Remote",
        description:
            "Design conversion-focused marketing sites and dashboards. Figma proficiency and mobile-first mindset required.",
    },
    {
        title: "DevOps / Cloud Engineer",
        type: "Part-time · Remote",
        description:
            "Deploy and monitor client apps on AWS/Vercel. Experience with CI/CD, Docker, and security best practices.",
    },
];

export const PLATFORM_FEATURES = [
    {
        icon: "⚡",
        title: "Performance first",
        text: "Core Web Vitals, optimized assets, and fast hosting — your site loads quickly on mobile networks.",
    },
    {
        icon: "🔐",
        title: "Security by design",
        text: "HTTPS, secure auth, role-based access, and sensible secret handling from day one.",
    },
    {
        icon: "💚",
        title: "M-Pesa ready",
        text: "STK Push, callbacks, and reconciliation built for how Kenyans actually pay.",
    },
    {
        icon: "📊",
        title: "Actionable dashboards",
        text: "Real-time reporting your team can use — not vanity charts buried in menus.",
    },
    {
        icon: "🔗",
        title: "API integrations",
        text: "Connect CRMs, banks, SMS, and third-party tools with documented, maintainable code.",
    },
    {
        icon: "🤝",
        title: "Dedicated support",
        text: "Clear communication, milestone demos, and post-launch support options.",
    },
];

export function getServicesForHome() {
    return SERVICES_NAV.map((nav) => {
        const s = SERVICE_DETAILS[nav.href as ServiceSlug];
        return {
            icon: s.icon,
            badge: s.badge,
            title: s.title,
            subtitle: s.subtitle,
            desc: s.description,
            features: s.features.flatMap((f) => f.items).slice(0, 6),
            href: s.slug,
        };
    });
}

export const PRICING_PLANS = [
    {
        name: "Starter",
        price: "From KES 120,000",
        period: "per project",
        description: "Ideal for small businesses and landing pages.",
        features: [
            "Up to 5 pages",
            "Mobile responsive",
            "Basic SEO setup",
            "Contact form",
            "1 month support",
        ],
        highlighted: false,
    },
    {
        name: "Professional",
        price: "From KES 350,000",
        period: "per project",
        description: "Best for growing businesses and custom apps.",
        features: [
            "Custom web application",
            "API integrations",
            "Admin dashboard",
            "M-Pesa / payment ready",
            "3 months support",
        ],
        highlighted: true,
    },
    {
        name: "Enterprise",
        price: "Custom quote",
        period: "tailored",
        description: "For large systems, multi-branch, or compliance needs.",
        features: [
            "Unlimited modules",
            "Dedicated support",
            "Security audit included",
            "SLA & maintenance",
            "Priority development",
        ],
        highlighted: false,
    },
];

export const FAQ_ITEMS = [
    {
        q: "How are your prices determined?",
        a: "Prices depend on project complexity, features, and timeline. Starting figures are in KES; we share a detailed quote after discovery. USD billing is available for international clients.",
    },
    {
        q: "Do you offer custom pricing packages?",
        a: "Yes. Every business is different — we tailor packages for startups, SMEs, and enterprises.",
    },
    {
        q: "What payment methods do you accept?",
        a: "We accept bank transfer, M-Pesa, and international payments. Milestone-based billing is available for larger projects.",
    },
    {
        q: "How long does a typical project take?",
        a: "Landing pages: 1–2 weeks. Web apps and e-commerce: 4–12 weeks depending on scope. We share a timeline during discovery.",
    },
];

export const INTEGRATION_PARTNERS = [
    { name: "M-Pesa", category: "Payments", icon: "💚", logo: "/assets/imgs/pages/startup/page-integrations/mpesa.svg" },
    { name: "Stripe", category: "Payments", icon: "💳", logo: "/assets/imgs/pages/startup/page-integrations/tool-stripe.svg" },
    { name: "PayPal", category: "Payments", icon: "🌍", logo: "/assets/imgs/pages/startup/page-integrations/paypal.svg" },
    { name: "HubSpot", category: "CRM", icon: "📊", logo: "/assets/imgs/pages/startup/page-integrations/tool-hubspot.svg" },
    { name: "Slack", category: "Productivity", icon: "💬", logo: "/assets/imgs/pages/startup/page-integrations/tool-slack.svg" },
    { name: "Twilio", category: "Communications", icon: "📱", logo: "/assets/imgs/pages/startup/page-integrations/twilio.svg" },
    { name: "Zapier", category: "Automation", icon: "⚡", logo: "/assets/imgs/pages/startup/page-integrations/tool-zapier.svg" },
    { name: "WhatsApp", category: "Messaging", icon: "💬", logo: "/assets/imgs/pages/startup/page-integrations/whatsapp.svg" },
];
