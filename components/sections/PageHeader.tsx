import Breadcrumb from "@/components/elements/Breadcrumb";

interface PageHeaderProps {
    title: string;
    current_page: string;
}

export default function PageHeader({ title, current_page }: PageHeaderProps) {
    return (
        <>
            <section className="startup-section-header position-relative py-100 border-top border-bottom overflow-hidden">
                <div className="position-absolute start-0 top-50 translate-middle-y h-100">
                    <img className="h-100" src="assets/imgs/pages/startup/section-header/decorate-left.png" alt="AstraX" />
                </div>
                <div className="position-absolute end-0 top-50 translate-middle-y d-none d-md-block">
                    <img className="h-100" src="assets/imgs/pages/startup/section-header/decorate-right.png" alt="AstraX" />
                </div>
                <div className="container position-relative z-1">
                    <div className="row">
                        <div className="col text-center">
                            <h2 className="mb-0 mb-3 text-capitalize" data-aos="fade-right">
                                {title}
                            </h2>
                            <Breadcrumb page={current_page} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
