import Layout from "@/components/layout/Layout";
import IntegrationsContent from "@/components/pages/IntegrationsContent";

export const metadata = {
    title: "Integrations - Sierlab",
    description: "Payment and API integrations: M-Pesa, Stripe, banks, and more.",
};

export default function IntegrationsPage() {
    return (
        <Layout>
            <IntegrationsContent />
        </Layout>
    );
}
