import Layout from "@/components/layout/Layout";
import ServiceDetailContent from "@/components/pages/ServiceDetailContent";
import { SERVICE_DETAILS } from "@/lib/site-data";

export const metadata = {
    title: "Custom Web Applications | Sierlab",
    description: SERVICE_DETAILS["/custom-web-applications"].description,
};

export default function Page() {
    return (
        <Layout>
            <ServiceDetailContent
                service={SERVICE_DETAILS["/custom-web-applications"]}
            />
        </Layout>
    );
}
