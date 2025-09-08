export const metadata = {
    title: "Custom Web Application | Sierlab",
    description:
        "Discover our custom web application development services tailored to your business needs. Learn more about our expertise and solutions.",
    keywords: [
        "custom web application",
        "web development",
        "Sierlab",
        "business solutions",
    ],
};

import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/custom-web-applications/Section1";
import PageHeader from "@/components/sections/PageHeader";
export default function Home() {
    return (
        <>
            <Layout>
                <PageHeader
                    title="Custom Web Application"
                    current_page="Custom Web Application"
                />
                <Section1 />
            </Layout>
        </>
    );
}
