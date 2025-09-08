import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/services/Section1";
import Section2 from "@/components/sections/services/Section2";
import Section3 from "@/components/sections/services/Section3";
import Section4 from "@/components/sections/services/Section4";
import Section8 from "@/components/sections/home/Section8";

export const metadata = {
    title: "Services - SierLab",
    description:
        "Explore the services offered by SierLab to enhance your digital experience.",
    keywords:
        "SierLab, Services, SEO optimization, Innovation, API Integrations, Web Development, E-commerce solutions, Landing Pages",
};

export default function Home() {
    return (
        <>
            <Layout>
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section8 />
            </Layout>
        </>
    );
}
