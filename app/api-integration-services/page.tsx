import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/api-integration-services/Section1";

import PageHeader from "@/components/sections/PageHeader";
export const metadata = {
    title: "Api Integration Services | Sierlab",
    description:
        "Explore our API integration services designed to streamline your business processes. Learn about our expertise and solutions.",
    keywords: [
        "API integration",
        "business solutions",
        "Sierlab",
        "integration services",
        "Mpesa Api",
        "payment integration",
        "Paypal Api",
        "Stripe Api",
        "web services",
    ],
};
export default function Home() {
    return (
        <>
            <Layout>
                <PageHeader
                    title="Api Integration Services"
                    current_page="Api Integration Services"
                />
                <Section1 />
            </Layout>
        </>
    );
}
