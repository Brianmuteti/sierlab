import Link from "next/link";

export default function Section3() {
    return (
        <>
            {/*startup pricing section 3*/}
            <section className="startup-pricing-section-3 position-relative overflow-hidden pt-120 pb-80">
                <div className="container">
                    <div className="text-center">
                        <h2 className="text-anime-style-2">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-anime-style-1">
                            If you need further assistance, please do not
                            hesitate to
                            <Link href="#" className="text-primary">
                                Contact us.
                            </Link>
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 mx-lg-auto">
                            <div className="accordion mt-6">
                                <div data-aos="fade-up" data-aos-delay={0}>
                                    <div className="px-0 card collapse-custom mb-3 bg-linear-2 rounded-3">
                                        <div className="p-0 card-header border-0 bg-transparent">
                                            <Link
                                                className="collapsed p-3 fw-bold d-flex align-items-center"
                                                data-bs-toggle="collapse"
                                                href="#collapse1"
                                            >
                                                <span className="me-3 arrow" />
                                                <h6 className="mb-0 fs-20">
                                                    <span>
                                                        How are your prices
                                                        determined?
                                                    </span>
                                                </h6>
                                            </Link>
                                        </div>
                                        <div
                                            id="collapse1"
                                            className="collapse"
                                            data-bs-parent=".accordion"
                                        >
                                            <p className="pe-3 fs-6 fw-regular ps-7">
                                                Our prices are based on project
                                                complexity, required features,
                                                and the time needed to deliver a
                                                secure and scalable solution. We
                                                provide starting prices as a
                                                guide, and final costs are
                                                shared after understanding your
                                                specific requirements.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div data-aos="fade-up" data-aos-delay={200}>
                                    <div className="px-0 card collapse-custom mb-3 bg-linear-2 rounded-3">
                                        <div className="p-0 card-header border-0 bg-transparent">
                                            <Link
                                                className="p-3 fw-bold d-flex align-items-center"
                                                data-bs-toggle="collapse"
                                                href="#collapse2"
                                            >
                                                <span className="me-3 arrow" />
                                                <h6 className="mb-0 fs-20">
                                                    <span>
                                                        Do you offer custom
                                                        pricing packages?
                                                    </span>
                                                </h6>
                                            </Link>
                                        </div>
                                        <div
                                            id="collapse2"
                                            className="collapse show"
                                            data-bs-parent=".accordion"
                                        >
                                            <p className="pe-3 fs-6 fw-regular ps-7">
                                                ✅ Yes. Every business is
                                                unique, so if none of the
                                                standard plans fit, we’ll create
                                                a tailored package that matches
                                                your needs and budget.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div data-aos="fade-up" data-aos-delay={400}>
                                    <div className="px-0 card collapse-custom mb-3 bg-linear-2 rounded-3">
                                        <div className="p-0 card-header border-0 bg-transparent">
                                            <Link
                                                className="collapsed p-3 fw-bold d-flex align-items-center"
                                                data-bs-toggle="collapse"
                                                href="#collapse3"
                                            >
                                                <span className="me-3 arrow" />
                                                <h6 className="mb-0 fs-20">
                                                    <span>
                                                        What is included in the
                                                        starting price?
                                                    </span>
                                                </h6>
                                            </Link>
                                        </div>
                                        <div
                                            id="collapse3"
                                            className="collapse"
                                            data-bs-parent=".accordion"
                                        >
                                            <p className="pe-3 fs-6 fw-regular ps-7">
                                                The starting price covers the
                                                core features and essentials of
                                                each service (as listed under
                                                each plan). Advanced
                                                integrations, premium features,
                                                or ongoing support may come at
                                                an additional cost.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div data-aos="fade-up" data-aos-delay={600}>
                                    <div className="px-0 card collapse-custom mb-3 bg-linear-2 rounded-3">
                                        <div className="p-0 card-header border-0 bg-transparent">
                                            <Link
                                                className="collapsed p-3 fw-bold d-flex align-items-center"
                                                data-bs-toggle="collapse"
                                                href="#collapse4"
                                            >
                                                <span className="me-3 arrow" />
                                                <h6 className="mb-0 fs-20">
                                                    <span>
                                                        Do you provide ongoing
                                                        support and maintenance?
                                                    </span>
                                                </h6>
                                            </Link>
                                        </div>
                                        <div
                                            id="collapse4"
                                            className="collapse"
                                            data-bs-parent=".accordion"
                                        >
                                            <p className="pe-3 fs-6 fw-regular ps-7">
                                                Yes. We offer maintenance
                                                packages for all services,
                                                including bug fixes, feature
                                                updates, and performance
                                                optimization. This ensures your
                                                system stays up-to-date and
                                                secure.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div data-aos="fade-up" data-aos-delay={800}>
                                    <div className="px-0 card collapse-custom mb-3 bg-linear-2 rounded-3">
                                        <div className="p-0 card-header border-0 bg-transparent">
                                            <Link
                                                className="collapsed p-3 fw-bold d-flex align-items-center"
                                                data-bs-toggle="collapse"
                                                href="#collapse5"
                                            >
                                                <span className="me-3 arrow" />
                                                <h6 className="mb-0 fs-20">
                                                    <span>
                                                        How long does it take to
                                                        deliver a project?
                                                    </span>
                                                </h6>
                                            </Link>
                                        </div>
                                        <div
                                            id="collapse5"
                                            className="collapse"
                                            data-bs-parent=".accordion"
                                        >
                                            <p className="pe-3 fs-6 fw-regular ps-7">
                                                Delivery time depends on project
                                            </p>
                                            <ul className="pe-3 fs-6 fw-regular ps-7">
                                                <li>
                                                    Landing pages: 1–2 weeks
                                                </li>
                                                <li>
                                                    Ecommerce websites: 3–5
                                                    weeks
                                                </li>
                                                <li>
                                                    Custom web apps: 6–12+ weeks
                                                </li>
                                            </ul>
                                            <p className="pe-3 fs-6 fw-regular ps-7">
                                                We’ll provide a clear timeline
                                                after the project briefing.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div data-aos="fade-up" data-aos-delay={600}>
                                    <div className="px-0 card collapse-custom mb-3 bg-linear-2 rounded-3">
                                        <div className="p-0 card-header border-0 bg-transparent">
                                            <Link
                                                className="collapsed p-3 fw-bold d-flex align-items-center"
                                                data-bs-toggle="collapse"
                                                href="#collapse6"
                                            >
                                                <span className="me-3 arrow" />
                                                <h6 className="mb-0 fs-20">
                                                    <span>
                                                        Can you integrate with
                                                        systems I already use?
                                                    </span>
                                                </h6>
                                            </Link>
                                        </div>
                                        <div
                                            id="collapse6"
                                            className="collapse"
                                            data-bs-parent=".accordion"
                                        >
                                            <p className="pe-3 fs-6 fw-regular ps-7">
                                                Absolutely. Our team specializes
                                                in API integrations (payments,
                                                email, chat, AI, etc.), ensuring
                                                seamless connection between your
                                                existing systems and new
                                                solutions.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div data-aos="fade-up" data-aos-delay={600}>
                                    <div className="px-0 card collapse-custom mb-3 bg-linear-2 rounded-3">
                                        <div className="p-0 card-header border-0 bg-transparent">
                                            <Link
                                                className="collapsed p-3 fw-bold d-flex align-items-center"
                                                data-bs-toggle="collapse"
                                                href="#collapse7"
                                            >
                                                <span className="me-3 arrow" />
                                                <h6 className="mb-0 fs-20">
                                                    <span>
                                                        Do you work with
                                                        startups and small
                                                        businesses?
                                                    </span>
                                                </h6>
                                            </Link>
                                        </div>
                                        <div
                                            id="collapse7"
                                            className="collapse"
                                            data-bs-parent=".accordion"
                                        >
                                            <p className="pe-3 fs-6 fw-regular ps-7">
                                                Yes! We work with clients of all
                                                sizes — from startups to
                                                enterprises. Our pricing plans
                                                are flexible, making it easy for
                                                smaller businesses to start
                                                affordably and scale over time
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div data-aos="fade-up" data-aos-delay={600}>
                                    <div className="px-0 card collapse-custom mb-3 bg-linear-2 rounded-3">
                                        <div className="p-0 card-header border-0 bg-transparent">
                                            <Link
                                                className="collapsed p-3 fw-bold d-flex align-items-center"
                                                data-bs-toggle="collapse"
                                                href="#collapse8"
                                            >
                                                <span className="me-3 arrow" />
                                                <h6 className="mb-0 fs-20">
                                                    <span>
                                                        How can I get started?
                                                    </span>
                                                </h6>
                                            </Link>
                                        </div>
                                        <div
                                            id="collapse8"
                                            className="collapse"
                                            data-bs-parent=".accordion"
                                        >
                                            <p className="pe-3 fs-6 fw-regular ps-7">
                                                Simply reach out through our
                                                <Link href="/contact">
                                                    {" "}
                                                    Contact page
                                                </Link>{" "}
                                                or request a quote. We’ll
                                                discuss your needs, prepare a
                                                proposal, and set clear
                                                milestones before starting.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
