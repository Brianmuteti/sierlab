import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/ecommerce-development/Section1";
import Section2 from "@/components/sections/ecommerce-development/Section2";
import PageHeader from "@/components/sections/PageHeader";
export const metadata = {
    title: "Ecommerce Development | Sierlab",
    description:
        "Explore our ecommerce development services designed to enhance your online business. Learn about our solutions and expertise.",
    keywords: [
        "ecommerce development",
        "online store",
        "Sierlab",
        "business solutions",
    ],
};
export default function Home() {
    return (
        <>
            <Layout>
                <PageHeader
                    title="Ecommerce Development"
                    current_page="Ecommerce Development"
                />
                <Section1 />
            </Layout>
        </>
    );
}
