import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/blog-details/Section1";
import Section3 from "@/components/sections/integrations/Section3";
export default function Home() {
    return (
        <>
            <Layout>
                <Section1 />
                <Section3 />
            </Layout>
        </>
    );
}
