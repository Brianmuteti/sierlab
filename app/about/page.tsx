import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/about/Section1";
import Section2 from "@/components/sections/about/Section2";
import Section3 from "@/components/sections/about/Section3";
import Section4 from "@/components/sections/about/Section4";
import Section5 from "@/components/sections/about/Section5";
import Section6 from "@/components/sections/about/Section6";
import Section6H from "@/components/sections/home/Section6";
import Section8 from "@/components/sections/home/Section8";

export const metadata = {
    title: "About Us - SierLab",
    description:
        "Learn more about SierLab, our mission, values, and the services we offer.",
    keywords: "SierLab, About Us, Mission, Values, Services",
};

export default function Home() {
    return (
        <>
            <Layout>
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                {/* <Section5 /> */}
                <Section6 />
                <Section6H />
                <Section8 />
            </Layout>
        </>
    );
}
