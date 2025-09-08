import Link from "next/link";

interface ServiceMenuProps {
    title: string;
}

export default function ServiceMenu({ title }: ServiceMenuProps) {
    console.log("Title is", title);
    const services = [
        { name: "Custom Web Application", href: "/custom-web-applications" },
        {
            name: "Ecommerce Development",
            href: "/ecommerce-development",
            active: true,
        },
        { name: "Website and Landing Page Design", href: "/website-design" },
        { name: "Api Integration Services", href: "/api-integration-services" },
        { name: "SEO Optimization", href: "/seo-optimization" },
        { name: "Cybersecurity Consulting", href: "/cybersecurity-consulting" },
    ];
    return (
        <>
            <div className="block-search p-3 bg-secondary-2 rounded-4 border-primary-2">
                <h6>Search</h6>
                <form className="input-group mt-3" data-aos="zoom-in">
                    <input
                        type="text"
                        className="form-control border-0"
                        placeholder="Enter Your Keywords"
                        aria-label="Enter Your Keywords"
                        aria-describedby="button-addon2"
                    />
                    <button
                        aria-label="search"
                        type="submit"
                        className="btn btn-primary bg-white border-0 rounded-end-2"
                        id="button-addon2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
                                fill="#292929"
                            />
                        </svg>
                    </button>
                </form>
            </div>
            <div className="block-our-services p-3 bg-secondary-2 rounded-4 border-primary-2 mt-4">
                <h6 className="fw-medium mb-3">Our Services</h6>
                {services.map((service) => {
                    const isActive = service.name === title;
                    return (
                        <Link
                            key={service.href}
                            href={service.href}
                            className={`btn btn-white text-capitalize d-flex justify-content-between align-items-center mb-3 p-3 rounded-3 ${
                                isActive ? "active" : ""
                            }`}
                        >
                            <span className="fw-medium">{service.name}</span>
                            <i className="fa-solid fa-arrow-right" />
                        </Link>
                    );
                })}
            </div>
            <div className="block-form mt-4 p-3 bg-secondary-2 rounded-4 border-primary-2">
                <h6 className="fw-medium mb-5">Send Us Message</h6>
                <form action="#" className="input-group">
                    <div className="position-relative mb-3 w-100">
                        <input
                            type="text"
                            className="py-3 ps-4 form-control bg-white"
                            name="name"
                            placeholder="Your name *"
                        />
                    </div>
                    <div className="position-relative mb-3 w-100">
                        <input
                            type="text"
                            className="py-3 ps-4 form-control bg-white"
                            name="name"
                            placeholder="Email address *"
                        />
                    </div>
                    <div className="position-relative mb-3 w-100">
                        <input
                            type="text"
                            className="py-3 ps-4 form-control bg-white"
                            name="phone"
                            placeholder="Phone number"
                        />
                    </div>
                    <div className="position-relative w-100">
                        <textarea
                            name="message"
                            id="message"
                            cols={30}
                            rows={8}
                            className="py-3 ps-4 w-100 form-control message bg-white"
                            placeholder="Your message"
                            defaultValue={""}
                        />
                    </div>
                    <button
                        aria-label="submit"
                        className="btn btn-primary my-3 w-100 rounded-4"
                        type="submit"
                    >
                        <span className="text-white fs-7">
                            {" "}
                            submit request{" "}
                        </span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={17}
                            height={16}
                            viewBox="0 0 17 16"
                            fill="none"
                        >
                            <g clipPath="url(#clip0_1435_2052)">
                                <path
                                    d="M16.3167 7.55759C16.3165 7.5574 16.3163 7.55719 16.3161 7.557L13.0504 4.307C12.8057 4.06353 12.41 4.06444 12.1665 4.30912C11.923 4.55378 11.9239 4.9495 12.1686 5.193L14.3612 7.375H1.125C0.779813 7.375 0.5 7.65481 0.5 8C0.5 8.34519 0.779813 8.625 1.125 8.625H14.3612L12.1686 10.807C11.9239 11.0505 11.923 11.4462 12.1665 11.6909C12.41 11.9356 12.8058 11.9364 13.0504 11.693L16.3162 8.443C16.3163 8.44281 16.3165 8.44259 16.3167 8.4424C16.5615 8.19809 16.5607 7.80109 16.3167 7.55759Z"
                                    fill="white"
                                />
                            </g>
                        </svg>
                    </button>
                </form>
            </div>
            <div className="sidebar__widget px-3 py-4 mt-4 bg-secondary-2 rounded-4 border-primary-2">
                <h6 className="sidebar__widget-title mb-4">Popular tags</h6>
                <div className="sidebar__tag-list">
                    <ul className="list-wrap d-flex flex-wrap gap-2">
                        <li>
                            <Link
                                href="#"
                                className="btn-white btn text-capitalize px-4 py-3 fs-7 mb-0"
                            >
                                Innovation
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="btn-white btn text-capitalize px-4 py-3 fs-7 mb-0"
                            >
                                Growth
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="btn-white btn text-capitalize px-4 py-3 fs-7 mb-0"
                            >
                                Strategy
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="btn-white btn text-capitalize px-4 py-3 fs-7 mb-0"
                            >
                                Scalability
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="btn-white btn text-capitalize px-4 py-3 fs-7 mb-0 active"
                            >
                                Branding
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="btn-white btn text-capitalize px-4 py-3 fs-7 mb-0"
                            >
                                Marketing
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="btn-white btn text-capitalize px-4 py-3 fs-7 mb-0"
                            >
                                Solutions
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="btn-white btn text-capitalize px-4 py-3 fs-7 mb-0"
                            >
                                Collaboration
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="btn-white btn text-capitalize px-4 py-3 fs-7 mb-0"
                            >
                                Vision
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="btn-white btn text-capitalize px-4 py-3 fs-7 mb-0"
                            >
                                Creativity
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="btn-white btn text-capitalize px-4 py-3 fs-7 mb-0"
                            >
                                Technology
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="btn-white btn text-capitalize px-4 py-3 fs-7 mb-0"
                            >
                                Impact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
