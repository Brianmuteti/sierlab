import Link from "next/link";
import PageHero from "@/components/modern/PageHero";
import CtaBanner from "@/components/modern/CtaBanner";
import Integrations from "@/components/home/Integrations";
import { INTEGRATION_PARTNERS } from "@/lib/site-data";

export default function IntegrationsContent() {
    return (
        <>
            <PageHero
                title="Integrations"
                description="We connect your software to payment gateways, CRMs, and third-party APIs — fast and reliably."
            />
            <section className="sl-section">
                <div className="sl-section__container">
                    <div className="sl-integration-partners">
                        {INTEGRATION_PARTNERS.map((p) => (
                            <div key={p.name} className="sl-integration-partner">
                                <img src={p.logo} alt={p.name} width={40} height={40} />
                                <div>
                                    <h4>{p.name}</h4>
                                    <span>{p.category}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-4">
                        <Link href="/api-integration-services" className="sl-btn sl-btn--primary">
                            API integration services
                        </Link>
                    </div>
                </div>
            </section>
            <Integrations />
            <CtaBanner />
        </>
    );
}
