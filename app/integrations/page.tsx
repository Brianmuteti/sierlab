import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";
import Section8 from "@/components/sections/home/Section8";
import Section1 from "@/components/sections/integrations/Section1";
import Section2 from "@/components/sections/integrations/Section2";
import Section3 from "@/components/sections/integrations/Section3";
export default function Home() {
    return (
        <>
            <Layout>
                <PageHeader title="Integrations" current_page="Integrations" />
                <Section1 />
                <Section2 />
                <Section3 />
                <Section8 />
            </Layout>
        </>
    );
}
