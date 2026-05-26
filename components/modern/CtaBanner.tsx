import Link from "next/link";

export default function CtaBanner() {
    return (
        <section className="sl-section sl-cta-banner-wrap">
            <div className="sl-section__container">
                <div className="sl-cta-banner">
                    <div className="sl-cta-banner__icon" aria-hidden>
                        💬
                    </div>
                    <h2>Have a project in mind?</h2>
                    <p>
                        We build custom software, e-commerce, and integrations
                        for businesses across Kenya. Let&apos;s discuss your
                        goals.
                    </p>
                    <div className="d-flex flex-wrap gap-3 justify-content-center">
                        <Link href="/contact" className="sl-btn sl-btn--primary">
                            Let&apos;s talk
                        </Link>
                        <a
                            href="https://wa.me/254731824251"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="sl-btn sl-btn--whatsapp"
                        >
                            WhatsApp us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
