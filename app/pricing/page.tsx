import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";
import Section1 from "@/components/sections/pricing/Section1";
import Section3 from "@/components/sections/pricing/Section3";
export const metadata = {
    title: "Pricing Plans | Sierlab",
    description:
        "Explore Sierlab’s transparent pricing plans for custom web applications, ecommerce development, landing pages, API integrations, SEO optimization, and cybersecurity consulting. Flexible solutions designed for startups, SMEs, and enterprises.",
    keywords: [
        "pricing plans",
        "custom web applications pricing",
        "ecommerce website cost",
        "API integration services",
        "SEO packages",
        "cybersecurity consulting prices",
        "Sierlab web development",
    ],
};

export default function Home() {
    return (
        <>
            <Layout>
                <PageHeader
                    title="Pricing & Plan"
                    current_page="Pricing & Plan"
                />
                <Section1 />
                <Section3 />
            </Layout>
        </>
    );
}
