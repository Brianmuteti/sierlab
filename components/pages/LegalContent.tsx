import PageHero from "@/components/modern/PageHero";
import { CONTACT_EMAIL } from "@/lib/site-config";

export function PrivacyContent() {
    return (
        <>
            <PageHero title="Privacy Policy" eyebrow="Legal" />
            <section className="sl-section">
                <div className="sl-section__container sl-legal">
                    <p className="sl-legal__updated">Last updated: May 2026</p>
                    <h2>Who we are</h2>
                    <p>
                        Sierlab (&quot;we&quot;, &quot;us&quot;) operates sierlab.com and provides
                        software development services. Contact: {CONTACT_EMAIL}.
                    </p>
                    <h2>Information we collect</h2>
                    <p>
                        When you submit our contact form, we collect your name, email, company,
                        message, and optional service interest. We may also collect analytics data
                        (pages visited, device type) if you consent to cookies via Google
                        Analytics.
                    </p>
                    <h2>How we use your data</h2>
                    <ul>
                        <li>To respond to inquiries and provide quotes</li>
                        <li>To deliver and improve our services</li>
                        <li>To send project-related communications you request</li>
                    </ul>
                    <h2>Sharing</h2>
                    <p>
                        We do not sell your personal data. We may use trusted processors (email
                        delivery, hosting, analytics) who handle data on our instructions.
                    </p>
                    <h2>Retention & rights</h2>
                    <p>
                        We retain contact records as long as needed for business and legal
                        purposes. You may request access, correction, or deletion by emailing{" "}
                        {CONTACT_EMAIL}.
                    </p>
                    <h2>Cookies</h2>
                    <p>
                        We use a cookie consent banner before loading Google Analytics.
                        Analytics cookies are optional — you can accept or decline when
                        prompted. Essential site functionality does not require analytics
                        cookies.
                    </p>
                    <p>
                        Our contact page may embed Calendly for scheduling; Calendly may set
                        its own cookies when you use the booking widget. See{" "}
                        <a
                            href="https://calendly.com/privacy"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Calendly&apos;s privacy policy
                        </a>
                        .
                    </p>
                </div>
            </section>
        </>
    );
}

export function TermsContent() {
    return (
        <>
            <PageHero title="Terms of Service" eyebrow="Legal" />
            <section className="sl-section">
                <div className="sl-section__container sl-legal">
                    <p className="sl-legal__updated">Last updated: May 2026</p>
                    <h2>Agreement</h2>
                    <p>
                        By using this website or engaging Sierlab for services, you agree to
                        these terms. Project-specific terms are defined in your signed proposal
                        or statement of work.
                    </p>
                    <h2>Services</h2>
                    <p>
                        We provide software design, development, integration, and consulting.
                        Timelines and deliverables are agreed in writing before work begins.
                    </p>
                    <h2>Payment</h2>
                    <p>
                        Fees are quoted in KES unless stated otherwise. Milestone invoices are
                        due per the agreed schedule. Late payments may pause work after notice.
                    </p>
                    <h2>Intellectual property</h2>
                    <p>
                        Upon full payment, clients receive ownership of custom deliverables as
                        specified in the project agreement. We retain rights to general tools,
                        libraries, and know-how.
                    </p>
                    <h2>Limitation of liability</h2>
                    <p>
                        Our liability is limited to fees paid for the specific project giving
                        rise to the claim, except where prohibited by law.
                    </p>
                    <h2>Contact</h2>
                    <p>
                        Questions about these terms: {CONTACT_EMAIL}.
                    </p>
                </div>
            </section>
        </>
    );
}
