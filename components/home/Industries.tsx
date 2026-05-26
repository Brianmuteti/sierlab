const INDUSTRIES = [
    { icon: "🏪", title: "Retail", desc: "POS & Inventory Systems" },
    { icon: "🏥", title: "Healthcare", desc: "Clinic & Hospital Systems" },
    { icon: "🏢", title: "Enterprise", desc: "Business Solutions" },
    { icon: "🛒", title: "E-Commerce", desc: "Online Store Platforms" },
    { icon: "📚", title: "Education", desc: "Learning Management" },
    { icon: "🚀", title: "Startups", desc: "MVP & Scale-up Tech" },
];

export default function Industries() {
    return (
        <section className="sl-section">
            <div className="sl-section__container">
                <p className="sl-section__eyebrow">All Industries</p>
                <h2 className="sl-section__title">Tailored for You</h2>
                <p className="sl-section__desc">
                    Smart solutions for every sector — we adapt our expertise to
                    your industry&apos;s unique needs.
                </p>

                <div className="sl-industries">
                    {INDUSTRIES.map((item) => (
                        <div key={item.title} className="sl-industry">
                            <div className="sl-industry__icon">{item.icon}</div>
                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
