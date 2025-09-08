import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/seo-optimization/Section1";
import PageHeader from "@/components/sections/PageHeader";
export const metadata = {
    title: "SEO Optimization | Sierlab",
    description:
        "Explore our SEO optimization services to enhance your website's visibility and performance. Learn how we can help you rank higher in search results.",
    keywords: [
        "SEO optimization",
        "search engine optimization",
        "Sierlab",
        "digital marketing",
        "website optimization",
        "SEO services",
    ],
};
export default function Home() {
    return (
        <>
            <Layout>
                <PageHeader
                    title="SEO Optimization"
                    current_page="SEO Optimization"
                />
                <Section1 />
            </Layout>
        </>
    );
}
