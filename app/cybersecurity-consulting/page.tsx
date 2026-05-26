import Layout from "@/components/layout/Layout";
import ServiceDetailContent from "@/components/pages/ServiceDetailContent";
import { SERVICE_DETAILS } from "@/lib/site-data";

export const metadata = {
    title: "Cybersecurity Consulting | Sierlab",
    description: SERVICE_DETAILS["/cybersecurity-consulting"].description,
};

export default function Page() {
    return (
        <Layout>
            <ServiceDetailContent
                service={SERVICE_DETAILS["/cybersecurity-consulting"]}
            />
        </Layout>
    );
}
