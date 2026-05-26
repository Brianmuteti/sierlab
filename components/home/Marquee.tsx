const ITEMS = [
    "Custom Web Applications",
    "E-Commerce Development",
    "M-Pesa & Payment APIs",
    "Website & Landing Pages",
    "SEO Optimization",
    "Cybersecurity Consulting",
];

export default function Marquee() {
    const doubled = [...ITEMS, ...ITEMS];

    return (
        <div className="sl-marquee" aria-hidden>
            <div className="sl-marquee__track">
                {doubled.map((item, i) => (
                    <span key={`${item}-${i}`} className="sl-marquee__item">
                        ★ <strong>{item}</strong>
                    </span>
                ))}
            </div>
        </div>
    );
}
