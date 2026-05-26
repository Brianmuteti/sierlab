import Link from "next/link";

export default function Footer() {
    return (
        <footer className="sl-footer">
            <div className="sl-footer__grid">
                <div className="sl-footer__brand">
                    <Link href="/">
                        <img
                            src="/assets/imgs/pages/startup/logo.png"
                            alt="Sierlab"
                            height={36}
                        />
                    </Link>
                    <p>
                        Sierlab embarks on a journey of innovating and building
                        smart digital solutions for businesses across Kenya and
                        beyond.
                    </p>
                    <p className="mb-0" style={{ color: "var(--sl-text-muted)", fontSize: "0.875rem" }}>
                        Lumumba Drive, Roysambu
                        <br />
                        Nairobi, Kenya 🇰🇪
                    </p>
                </div>
                <div className="sl-footer__links">
                    <div>
                        <h6>Company</h6>
                        <Link href="/about">About</Link>
                        <Link href="/services">Services</Link>
                        <Link href="/pricing">Pricing</Link>
                        <Link href="/blog">News</Link>
                    </div>
                    <div>
                        <h6>Solutions</h6>
                        <Link href="/custom-web-applications">Web Applications</Link>
                        <Link href="/ecommerce-development">E-Commerce</Link>
                        <Link href="/api-integration-services">API Integrations</Link>
                        <Link href="/website-design">Website Design</Link>
                    </div>
                    <div>
                        <h6>Contact</h6>
                        <Link href="mailto:info@sierlab.com">info@sierlab.com</Link>
                        <Link href="tel:+254731824251">+254 731 824 251</Link>
                        <Link href="/contact">Get in touch</Link>
                        <Link href="/career">Careers</Link>
                    </div>
                </div>
            </div>
            <div className="sl-footer__bottom">
                <p>© {new Date().getFullYear()} Sierlab. All rights reserved.</p>
                <div className="sl-social">
                    <a href="#" aria-label="Facebook">
                        <i className="bi bi-facebook" />
                    </a>
                    <a href="#" aria-label="X">
                        <i className="bi bi-twitter-x" />
                    </a>
                    <a href="#" aria-label="LinkedIn">
                        <i className="bi bi-linkedin" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
