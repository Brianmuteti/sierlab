import Link from "next/link";
import Layout from "@/components/layout/Layout";

export default function NotFound() {
    return (
        <Layout>
            <section className="sl-section sl-not-found">
                <div className="sl-section__container text-center">
                    <p className="sl-section__eyebrow">404</p>
                    <h1 className="sl-section__title">Page not found</h1>
                    <p className="sl-section__desc mx-auto">
                        The page you&apos;re looking for doesn&apos;t exist or was moved.
                    </p>
                    <div className="d-flex flex-wrap gap-3 justify-content-center mt-4">
                        <Link href="/" className="sl-btn sl-btn--primary">
                            Back to home
                        </Link>
                        <Link href="/services" className="sl-btn sl-btn--outline">
                            Our services
                        </Link>
                        <Link href="/contact" className="sl-btn sl-btn--outline">
                            Contact us
                        </Link>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
