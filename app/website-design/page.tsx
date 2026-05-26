import Layout from "@/components/layout/Layout";
import ServiceDetailContent from "@/components/pages/ServiceDetailContent";
import { SERVICE_DETAILS } from "@/lib/site-data";

export const metadata = {
    title: "Website & Landing Page Design | Sierlab",
    description: SERVICE_DETAILS["/website-design"].description,
};

export default function Page() {
    return (
        <Layout>
            <ServiceDetailContent service={SERVICE_DETAILS["/website-design"]} />
        </Layout>
    );
}
