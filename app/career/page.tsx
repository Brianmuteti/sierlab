import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";
import Section1 from "@/components/sections/career/Section1";
import Section2 from "@/components/sections/career/Section2";
import Section3 from "@/components/sections/career/Section3";
import Section4 from "@/components/sections/career/Section4";
import Section3I from "@/components/sections/integrations/Section3";
export default function Home() {
    return (
        <>
            <Layout>
                <PageHeader title="Careers" current_page="Careers" />
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section3I />
            </Layout>
        </>
    );
}
