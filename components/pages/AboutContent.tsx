import Link from "next/link";
import PageHero from "@/components/modern/PageHero";
import CtaBanner from "@/components/modern/CtaBanner";
import Testimonials from "@/components/home/Testimonials";

const VALUES = [
    {
        icon: "🎯",
        title: "Mission-Driven",
        text: "We empower brands with smart digital solutions that solve real business problems.",
    },
    {
        icon: "⚡",
        title: "Innovation First",
        text: "Modern stacks, clean architecture, and practices that scale with your growth.",
    },
    {
        icon: "🤝",
        title: "Partnership",
        text: "We work alongside your team — transparent communication from discovery to launch.",
    },
    {
        icon: "🇰🇪",
        title: "Built in Nairobi",
        text: "Local expertise with global standards — serving Kenya and clients worldwide.",
    },
];

const STATS = [
    { value: "40+", label: "Projects" },
    { value: "5+", label: "Years" },
    { value: "100%", label: "Commitment" },
    { value: "24/7", label: "Support" },
];

export default function AboutContent() {
    return (
        <>
            <PageHero
                title="About Sierlab"
                description="We embark on a journey of innovating and building — turning ideas into reliable digital products."
            />
            <section className="sl-section">
                <div className="sl-section__container">
                    <div className="sl-about-intro">
                        <div>
                            <p className="sl-section__eyebrow">Who we are</p>
                            <h2 className="sl-section__title">
                                Your partner in digital transformation
                            </h2>
                            <p className="sl-section__desc" style={{ marginBottom: "1.5rem" }}>
                                Sierlab builds custom web applications, secure e-commerce
                                platforms, and high-performance websites tailored to your
                                workflow — from HR and inventory systems to landing pages and
                                API integrations.
                            </p>
                            <Link href="/contact" className="sl-btn sl-btn--primary">
                                Work with us
                            </Link>
                        </div>
                        <div className="sl-about-stats">
                            {STATS.map((s) => (
                                <div key={s.label} className="sl-stat">
                                    <div className="sl-stat__value">{s.value}</div>
                                    <div className="sl-stat__label">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="sl-section sl-section--alt">
                <div className="sl-section__container">
                    <p className="sl-section__eyebrow">Our values</p>
                    <h2 className="sl-section__title">What drives us</h2>
                    <div className="sl-values-grid">
                        {VALUES.map((v) => (
                            <div key={v.title} className="sl-card">
                                <div className="sl-card__icon">{v.icon}</div>
                                <h3>{v.title}</h3>
                                <p>{v.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Testimonials />
            <CtaBanner />
        </>
    );
}
