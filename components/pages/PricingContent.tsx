"use client";

import Link from "next/link";
import { useState } from "react";
import PageHero from "@/components/modern/PageHero";
import CtaBanner from "@/components/modern/CtaBanner";
import { FAQ_ITEMS, PRICING_PLANS } from "@/lib/site-data";
import { contactUrl } from "@/lib/contact-url";

export default function PricingContent() {
    const [openFaq, setOpenFaq] = useState(0);

    return (
        <>
            <PageHero
                title="Pricing & Plans"
                description="Transparent starting prices — custom quotes for every project."
            />
            <section className="sl-section">
                <div className="sl-section__container">
                    <p className="sl-section__eyebrow text-center">Plans</p>
                    <h2 className="sl-section__title text-center">
                        Flexible pricing for every stage
                    </h2>
                    <p className="sl-section__desc mx-auto text-center">
                        Whether you&apos;re a startup or enterprise, we tailor solutions
                        to your budget and goals.
                    </p>
                    <div className="sl-pricing-grid">
                        {PRICING_PLANS.map((plan) => (
                            <article
                                key={plan.name}
                                className={`sl-pricing-card${
                                    plan.highlighted ? " is-featured" : ""
                                }`}
                            >
                                {plan.highlighted && (
                                    <span className="sl-pricing-card__badge">
                                        Most popular
                                    </span>
                                )}
                                <h3>{plan.name}</h3>
                                <div className="sl-pricing-card__price">
                                    {plan.price}
                                    <span> / {plan.period}</span>
                                </div>
                                <p>{plan.description}</p>
                                <ul>
                                    {plan.features.map((f) => (
                                        <li key={f}>{f}</li>
                                    ))}
                                </ul>
                                <Link
                                    href={contactUrl({
                                        service: plan.name,
                                        message: `I'm interested in the ${plan.name} plan.`,
                                    })}
                                    className={
                                        plan.highlighted
                                            ? "sl-btn sl-btn--primary w-100 justify-content-center"
                                            : "sl-btn sl-btn--outline w-100 justify-content-center"
                                    }
                                >
                                    Get started
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="sl-section sl-section--alt">
                <div className="sl-section__container sl-faq">
                    <h2 className="sl-section__title text-center">FAQ</h2>
                    <div className="sl-faq-list">
                        {FAQ_ITEMS.map((item, i) => (
                            <div
                                key={item.q}
                                className={`sl-faq-item${openFaq === i ? " is-open" : ""}`}
                            >
                                <button
                                    type="button"
                                    className="sl-faq-item__q"
                                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                                    aria-expanded={openFaq === i}
                                >
                                    {item.q}
                                    <span aria-hidden>{openFaq === i ? "−" : "+"}</span>
                                </button>
                                {openFaq === i && (
                                    <p className="sl-faq-item__a">{item.a}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <CtaBanner />
        </>
    );
}
