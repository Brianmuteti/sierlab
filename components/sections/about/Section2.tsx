export default function Section2() {
    return (
        <>
            {/*startup about section 2*/}
            <section className="startup-about-section-2 position-relative overflow-hidden py-90 bg-linear-2">
                <div className="container">
                    <div className="text-center mb-80">
                        <span className="text-primary">Our Values</span>
                        <h2 className="text-dark my-3 text-anime-style-2">
                            How Sierlab helps
                        </h2>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6 text-lg-start text-center">
                            <div className="position-relative d-inline-block mt-lg-0 mt-5">
                                <div className="zoom-img rounded-4 overflow-hidden position-relative z-1">
                                    <img
                                        data-aos="zoom-in"
                                        src="assets/imgs/pages/startup/page-about/about-3.png"
                                        alt="Sierlab"
                                    />
                                </div>
                                <div className="position-absolute position-relative top-0 start-0 translate-middle-md z-0">
                                    <img
                                        className="rotateme"
                                        src="assets/imgs/pages/startup/page-about/circle-linear.png"
                                        alt="Sierlab"
                                    />
                                </div>
                                <div className="bg-linear-1 shadow-1 p-3 d-flex gap-3 rounded-4 d-inline-block position-md-absolute position-relative bottom-0 start-md-50 start-0 ms-md-10 ms-5 mb-5 z-2 rightToLeft mt-md-0 mt-5">
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={38}
                                            height={38}
                                            viewBox="0 0 38 38"
                                            fill="none"
                                        >
                                            <path
                                                d="M35.4186 11.1294L31.5086 7.21941C31.4253 7.13977 31.2913 7.08545 31.1864 7.08545H31.0126V5.89438C31.0126 4.6671 30.0134 3.66426 28.7825 3.66426H27.3814V2.63247C27.3814 1.40155 26.3822 0.402344 25.1513 0.402344H5.10903C3.87811 0.402344 2.87891 1.40155 2.87891 2.63247V28.5975C2.87891 29.8284 3.87811 30.8277 5.10903 30.8277H6.51013V31.8631C6.51013 33.0904 7.50934 34.0896 8.74026 34.0896H11.0464V35.9214C11.0464 36.7976 11.7596 37.5108 12.6357 37.5108H33.9595C34.8356 37.5108 35.5488 36.7975 35.5488 35.9214V11.4479C35.5489 11.361 35.5018 11.2162 35.4186 11.1294ZM11.0464 8.67477V33.1845H8.74026C8.00891 33.1845 7.41523 32.5907 7.41523 31.863V5.89438C7.41523 5.16667 8.00898 4.56936 8.74026 4.56936H28.7824C29.5138 4.56936 30.1075 5.16667 30.1075 5.89438V7.08545H12.6357C11.7596 7.08545 11.0464 7.79869 11.0464 8.67477ZM34.6438 35.9214C34.6438 36.2979 34.3397 36.6057 33.9596 36.6057H12.6358C12.2593 36.6057 11.9516 36.2979 11.9516 35.9214V8.67477C11.9516 8.29825 12.2593 7.99054 12.6358 7.99054H30.7339V10.3112C30.7339 11.1874 31.447 11.9005 32.3232 11.9005H34.6438V35.9214Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M30.4371 21.951H29.8832C29.7456 21.4695 29.5538 21.0097 29.3112 20.568L29.7022 20.1771C30.0787 19.8006 30.0787 19.1923 29.7022 18.8195L28.3482 17.4655C27.9753 17.089 27.3671 17.089 26.9906 17.4655L26.5996 17.8565C26.1579 17.6139 25.6981 17.4221 25.2166 17.2845V16.7306C25.2166 16.1984 24.7858 15.7676 24.2572 15.7676H22.342C21.8134 15.7676 21.379 16.1984 21.379 16.7306V17.2845C20.9011 17.4221 20.4378 17.6139 19.9997 17.8565L19.6087 17.4655C19.2322 17.089 18.624 17.089 18.2475 17.4655L16.8935 18.8195C16.5206 19.1923 16.5206 19.8006 16.8935 20.1771L17.2881 20.568C17.0456 21.0097 16.8536 21.4695 16.7125 21.951H16.1586C15.63 21.951 15.1992 22.3818 15.1992 22.9104V24.8255C15.1992 25.3541 15.63 25.7885 16.1586 25.7885H16.7125C16.8536 26.2664 17.0456 26.7298 17.2881 27.1679L16.8935 27.5589C16.5206 27.9354 16.5206 28.5436 16.8935 28.9201L18.2475 30.2742C18.624 30.647 19.2322 30.647 19.6087 30.2742L19.9997 29.8795C20.4377 30.1221 20.9011 30.314 21.379 30.4552V31.0091C21.379 31.5377 21.8135 31.9685 22.342 31.9685H24.2572C24.7858 31.9685 25.2166 31.5377 25.2166 31.0091V30.4552C25.6981 30.314 26.1578 30.1221 26.5996 29.8795L26.9906 30.2742C27.3671 30.647 27.9753 30.647 28.3482 30.2742L29.7022 28.9201C30.0787 28.5436 30.0787 27.9354 29.7022 27.5589L29.3112 27.1679C29.5538 26.7298 29.7457 26.2664 29.8832 25.7885H30.4371C30.9694 25.7885 31.4001 25.354 31.4001 24.8255V22.9103C31.4002 22.3818 30.9694 21.951 30.4371 21.951ZM30.4951 24.8255C30.4951 24.8581 30.4698 24.8835 30.4371 24.8835H29.5357C29.3257 24.8835 29.1411 25.0247 29.094 25.2311C28.9492 25.8574 28.6994 26.4511 28.3591 27.0014C28.2505 27.1824 28.2758 27.4141 28.4243 27.5626L29.0651 28.1997C29.0868 28.2215 29.0868 28.2577 29.0651 28.2794L27.7111 29.6333C27.6893 29.6551 27.6531 29.6551 27.6315 29.6333L26.9906 28.9925C26.8422 28.8441 26.6105 28.8188 26.4331 28.931C25.8828 29.2713 25.2891 29.5175 24.6628 29.6659C24.4564 29.713 24.3116 29.894 24.3116 30.104V31.0091C24.3116 31.038 24.2863 31.0634 24.2573 31.0634H22.3422C22.3096 31.0634 22.2842 31.0381 22.2842 31.0091V30.104C22.2842 29.894 22.1394 29.713 21.9366 29.6659C21.3103 29.5175 20.713 29.2713 20.1663 28.931C19.9853 28.8188 19.7536 28.8441 19.6051 28.9925L18.968 29.6333C18.9462 29.6551 18.9101 29.6551 18.8883 29.6333L17.5344 28.2794C17.5126 28.2576 17.5126 28.2214 17.5344 28.1997L18.1752 27.5626C18.3236 27.4141 18.3489 27.1824 18.2367 27.0014C17.8964 26.4511 17.6502 25.8574 17.5018 25.2311C17.4547 25.0247 17.2737 24.8835 17.0637 24.8835H16.1586C16.1297 24.8835 16.1043 24.8582 16.1043 24.8255V22.9103C16.1043 22.8814 16.1296 22.856 16.1586 22.856H17.0637C17.2737 22.856 17.4547 22.7112 17.5018 22.5049C17.6502 21.8785 17.8964 21.2848 18.2367 20.7345C18.3489 20.5571 18.3236 20.3254 18.1752 20.177L17.5344 19.5362C17.5126 19.5144 17.5126 19.4783 17.5344 19.4565L18.8883 18.1025C18.9101 18.0808 18.9463 18.0808 18.968 18.1025L19.6051 18.7433C19.7536 18.8917 19.9853 18.9171 20.1663 18.8085C20.713 18.4682 21.3103 18.2184 21.9366 18.0736C22.143 18.0265 22.2842 17.8418 22.2842 17.6319V16.7304C22.2842 16.6978 22.3095 16.6725 22.3422 16.6725H24.2573C24.2863 16.6725 24.3116 16.6978 24.3116 16.7304V17.6319C24.3116 17.8418 24.4564 18.0265 24.6628 18.0736C25.2891 18.2184 25.8829 18.4682 26.4331 18.8085C26.6105 18.9171 26.8422 18.8917 26.9906 18.7433L27.6315 18.1025C27.6532 18.0808 27.6894 18.0808 27.7111 18.1025L29.0651 19.4565C29.0868 19.4783 29.0868 19.5144 29.0651 19.5362L28.4243 20.177C28.2758 20.3254 28.2505 20.5571 28.3591 20.7345C28.6994 21.2849 28.9492 21.8785 29.094 22.5049C29.1411 22.7112 29.3257 22.856 29.5357 22.856H30.4371C30.4697 22.856 30.4951 22.8813 30.4951 22.9103V24.8255Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M27.0519 23.8659C27.0519 25.9367 25.3684 27.6202 23.2976 27.6202C21.2267 27.6202 19.5469 25.9367 19.5469 23.8659C19.5469 21.7987 21.2267 20.1152 23.2976 20.1152C25.3684 20.1152 27.0519 21.7987 27.0519 23.8659Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M14.0209 10.405H21.0817C21.3317 10.405 21.5343 10.2024 21.5343 9.95251C21.5343 9.70262 21.3316 9.5 21.0817 9.5H14.0209C13.7709 9.5 13.5684 9.70262 13.5684 9.95251C13.5684 10.2024 13.7709 10.405 14.0209 10.405Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M20.0158 11.8217C20.0158 11.5717 19.8132 11.3691 19.5633 11.3691H14.0209C13.7709 11.3691 13.5684 11.5718 13.5684 11.8217C13.5684 12.0716 13.771 12.2742 14.0209 12.2742H19.5633C19.8133 12.2742 20.0158 12.0716 20.0158 11.8217Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h5 className="text-white mb-0">40</h5>
                                        <p className="text-white mb-0 text-nowrap">
                                            Projects.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 mt-lg-0 mt-md-8 mt-3">
                            <h4 className="text-dark my-3 text-anime-style-2">
                                Streamline your business workflow
                            </h4>
                            <p className="mb-4 wow img-custom-anim-top">
                                We specialize in building robust, scalable, and
                                secure digital systems for businesses that want
                                to streamline operations, grow efficiently, and
                                stay ahead of the curve. Whether you're a
                                startup or an enterprise, we design solutions
                                that fit your goals.
                            </p>
                            <nav className="wow img-custom-anim-right">
                                <div
                                    className="nav nav-tabs border-bottom-0 mb-5"
                                    id="nav-tab"
                                    role="tablist"
                                >
                                    <button
                                        aria-label="Mission"
                                        className="nav-link position-relative btn-text active"
                                        id="nav-mission-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#nav-mission"
                                        type="button"
                                        role="tab"
                                        aria-controls="nav-mission"
                                        aria-selected="true"
                                    >
                                        Mission
                                    </button>
                                    <button
                                        aria-label="Vision"
                                        className="nav-link position-relative btn-text"
                                        id="nav-vision-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#nav-vision"
                                        type="button"
                                        role="tab"
                                        aria-controls="nav-vision"
                                        aria-selected="false"
                                    >
                                        Vision
                                    </button>
                                    <button
                                        aria-label="Values"
                                        className="nav-link position-relative btn-text"
                                        id="nav-values-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#nav-values"
                                        type="button"
                                        role="tab"
                                        aria-controls="nav-values"
                                        aria-selected="false"
                                    >
                                        Values
                                    </button>
                                </div>
                            </nav>
                            <div className="tab-content" id="nav-tabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="nav-mission"
                                    role="tabpanel"
                                    aria-labelledby="nav-mission-tab"
                                    tabIndex={0}
                                >
                                    <p className="wow img-custom-anim-top">
                                        At Sierlab, our mission is to bridge the
                                        gap between business challenges and
                                        digital transformation. We empower
                                        organizations by delivering tailor-made
                                        software solutions that simplify
                                        operations, enhance productivity, and
                                        drive measurable growth. Whether it’s an
                                        HR system for a growing team, a custom
                                        ecommerce platform, or a secure hospital
                                        MIS, our goal is to build solutions that
                                        work — securely, efficiently, and with
                                        lasting value.
                                    </p>
                                    <p className="wow img-custom-anim-top">
                                        Our mission is grounded in:
                                    </p>
                                    <ul className="list-unstyled">
                                        <li
                                            className="d-flex align-items-center mb-3 gap-3"
                                            data-aos="fade-up"
                                            data-aos-delay={0}
                                        >
                                            <div className="position-relative">
                                                <svg
                                                    className="fill-primary position-absolute top-50 start-50 translate-middle"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={20}
                                                    height={21}
                                                    viewBox="0 0 20 21"
                                                    fill="none"
                                                >
                                                    <path
                                                        opacity="0.2"
                                                        d="M17.0711 3.79231C15.1823 1.9036 12.6711 0.863403 10 0.863403C7.32887 0.863403 4.81762 1.9036 2.92891 3.79231C1.04016 5.68106 0 8.19231 0 10.8634C0 13.5345 1.04016 16.0457 2.92891 17.9345C4.81766 19.8232 7.32887 20.8634 10 20.8634C12.6711 20.8634 15.1823 19.8232 17.0711 17.9345C18.9598 16.0457 20 13.5345 20 10.8634C20 8.19231 18.9598 5.6811 17.0711 3.79231ZM10 19.6915C5.13215 19.6915 1.17188 15.7313 1.17188 10.8634C1.17188 5.99555 5.13215 2.03528 10 2.03528C14.8679 2.03528 18.8281 5.99555 18.8281 10.8634C18.8281 15.7313 14.8679 19.6915 10 19.6915Z"
                                                        fill="#794AFF"
                                                    />
                                                </svg>
                                                <svg
                                                    className="fill-primary"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={10}
                                                    height={8}
                                                    viewBox="0 0 10 8"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M9.77752 0.654773C9.54873 0.426023 9.17771 0.426023 8.94893 0.654812L3.77475 5.82899L1.05104 3.10528C0.822246 2.87649 0.45123 2.87649 0.222402 3.10528C-0.00642578 3.33407 -0.00642578 3.70509 0.222402 3.93391L3.36041 7.07192C3.47482 7.18634 3.62478 7.24352 3.77471 7.24352C3.92463 7.24352 4.07463 7.1863 4.189 7.07192L9.77752 1.48341C10.0063 1.25462 10.0063 0.883601 9.77752 0.654773Z"
                                                        fill="#794AFF"
                                                    />
                                                </svg>
                                            </div>
                                            <p className="mb-0 text-dark">
                                                Client-centric development —
                                                Solutions built around your
                                                workflows and goals
                                            </p>
                                        </li>
                                        <li
                                            className="d-flex align-items-center mb-3 gap-3"
                                            data-aos="fade-up"
                                            data-aos-delay={200}
                                        >
                                            <div className="position-relative">
                                                <svg
                                                    className="fill-primary position-absolute top-50 start-50 translate-middle"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={20}
                                                    height={21}
                                                    viewBox="0 0 20 21"
                                                    fill="none"
                                                >
                                                    <path
                                                        opacity="0.2"
                                                        d="M17.0711 3.79231C15.1823 1.9036 12.6711 0.863403 10 0.863403C7.32887 0.863403 4.81762 1.9036 2.92891 3.79231C1.04016 5.68106 0 8.19231 0 10.8634C0 13.5345 1.04016 16.0457 2.92891 17.9345C4.81766 19.8232 7.32887 20.8634 10 20.8634C12.6711 20.8634 15.1823 19.8232 17.0711 17.9345C18.9598 16.0457 20 13.5345 20 10.8634C20 8.19231 18.9598 5.6811 17.0711 3.79231ZM10 19.6915C5.13215 19.6915 1.17188 15.7313 1.17188 10.8634C1.17188 5.99555 5.13215 2.03528 10 2.03528C14.8679 2.03528 18.8281 5.99555 18.8281 10.8634C18.8281 15.7313 14.8679 19.6915 10 19.6915Z"
                                                        fill="#794AFF"
                                                    />
                                                </svg>
                                                <svg
                                                    className="fill-primary"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={10}
                                                    height={8}
                                                    viewBox="0 0 10 8"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M9.77752 0.654773C9.54873 0.426023 9.17771 0.426023 8.94893 0.654812L3.77475 5.82899L1.05104 3.10528C0.822246 2.87649 0.45123 2.87649 0.222402 3.10528C-0.00642578 3.33407 -0.00642578 3.70509 0.222402 3.93391L3.36041 7.07192C3.47482 7.18634 3.62478 7.24352 3.77471 7.24352C3.92463 7.24352 4.07463 7.1863 4.189 7.07192L9.77752 1.48341C10.0063 1.25462 10.0063 0.883601 9.77752 0.654773Z"
                                                        fill="#794AFF"
                                                    />
                                                </svg>
                                            </div>
                                            <p className="mb-0 text-dark">
                                                Technical excellence —
                                                Leveraging modern technologies
                                                to ensure speed, scalability,
                                                and security
                                            </p>
                                        </li>
                                        <li
                                            className="d-flex align-items-center mb-3 gap-3"
                                            data-aos="fade-up"
                                            data-aos-delay={400}
                                        >
                                            <div className="position-relative">
                                                <svg
                                                    className="fill-primary position-absolute top-50 start-50 translate-middle"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={20}
                                                    height={21}
                                                    viewBox="0 0 20 21"
                                                    fill="none"
                                                >
                                                    <path
                                                        opacity="0.2"
                                                        d="M17.0711 3.79231C15.1823 1.9036 12.6711 0.863403 10 0.863403C7.32887 0.863403 4.81762 1.9036 2.92891 3.79231C1.04016 5.68106 0 8.19231 0 10.8634C0 13.5345 1.04016 16.0457 2.92891 17.9345C4.81766 19.8232 7.32887 20.8634 10 20.8634C12.6711 20.8634 15.1823 19.8232 17.0711 17.9345C18.9598 16.0457 20 13.5345 20 10.8634C20 8.19231 18.9598 5.6811 17.0711 3.79231ZM10 19.6915C5.13215 19.6915 1.17188 15.7313 1.17188 10.8634C1.17188 5.99555 5.13215 2.03528 10 2.03528C14.8679 2.03528 18.8281 5.99555 18.8281 10.8634C18.8281 15.7313 14.8679 19.6915 10 19.6915Z"
                                                        fill="#794AFF"
                                                    />
                                                </svg>
                                                <svg
                                                    className="fill-primary"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={10}
                                                    height={8}
                                                    viewBox="0 0 10 8"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M9.77752 0.654773C9.54873 0.426023 9.17771 0.426023 8.94893 0.654812L3.77475 5.82899L1.05104 3.10528C0.822246 2.87649 0.45123 2.87649 0.222402 3.10528C-0.00642578 3.33407 -0.00642578 3.70509 0.222402 3.93391L3.36041 7.07192C3.47482 7.18634 3.62478 7.24352 3.77471 7.24352C3.92463 7.24352 4.07463 7.1863 4.189 7.07192L9.77752 1.48341C10.0063 1.25462 10.0063 0.883601 9.77752 0.654773Z"
                                                        fill="#794AFF"
                                                    />
                                                </svg>
                                            </div>
                                            <p className="mb-0 text-dark">
                                                Long-term partnership — Offering
                                                support beyond launch, guiding
                                                you through your digital journey
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="nav-vision"
                                    role="tabpanel"
                                    aria-labelledby="nav-vision-tab"
                                    tabIndex={0}
                                >
                                    <p className="wow img-custom-anim-top">
                                        Our vision is to become a trusted
                                        digital backbone for businesses
                                        globally, enabling them to operate
                                        smarter, faster, and more securely. We
                                        envision a future where every business —
                                        regardless of size — has access to
                                        enterprise-grade digital infrastructure
                                        without complexity.
                                    </p>
                                    <p className="wow img-custom-anim-top">
                                        We are building a future where:
                                    </p>
                                    <ul className="list-unstyled">
                                        <li
                                            className="d-flex align-items-center mb-3 gap-3"
                                            data-aos="fade-up"
                                            data-aos-delay={0}
                                        >
                                            <div className="position-relative">
                                                <svg
                                                    className="fill-primary position-absolute top-50 start-50 translate-middle"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={20}
                                                    height={21}
                                                    viewBox="0 0 20 21"
                                                    fill="none"
                                                >
                                                    <path
                                                        opacity="0.2"
                                                        d="M17.0711 3.79231C15.1823 1.9036 12.6711 0.863403 10 0.863403C7.32887 0.863403 4.81762 1.9036 2.92891 3.79231C1.04016 5.68106 0 8.19231 0 10.8634C0 13.5345 1.04016 16.0457 2.92891 17.9345C4.81766 19.8232 7.32887 20.8634 10 20.8634C12.6711 20.8634 15.1823 19.8232 17.0711 17.9345C18.9598 16.0457 20 13.5345 20 10.8634C20 8.19231 18.9598 5.6811 17.0711 3.79231ZM10 19.6915C5.13215 19.6915 1.17188 15.7313 1.17188 10.8634C1.17188 5.99555 5.13215 2.03528 10 2.03528C14.8679 2.03528 18.8281 5.99555 18.8281 10.8634C18.8281 15.7313 14.8679 19.6915 10 19.6915Z"
                                                        fill="#794AFF"
                                                    />
                                                </svg>
                                                <svg
                                                    className="fill-primary"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={10}
                                                    height={8}
                                                    viewBox="0 0 10 8"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M9.77752 0.654773C9.54873 0.426023 9.17771 0.426023 8.94893 0.654812L3.77475 5.82899L1.05104 3.10528C0.822246 2.87649 0.45123 2.87649 0.222402 3.10528C-0.00642578 3.33407 -0.00642578 3.70509 0.222402 3.93391L3.36041 7.07192C3.47482 7.18634 3.62478 7.24352 3.77471 7.24352C3.92463 7.24352 4.07463 7.1863 4.189 7.07192L9.77752 1.48341C10.0063 1.25462 10.0063 0.883601 9.77752 0.654773Z"
                                                        fill="#794AFF"
                                                    />
                                                </svg>
                                            </div>
                                            <p className="mb-0 text-dark">
                                                Businesses no longer rely on
                                                fragmented tools but operate on
                                                integrated, scalable platforms
                                            </p>
                                        </li>
                                        <li
                                            className="d-flex align-items-center mb-3 gap-3"
                                            data-aos="fade-up"
                                            data-aos-delay={200}
                                        >
                                            <div className="position-relative">
                                                <svg
                                                    className="fill-primary position-absolute top-50 start-50 translate-middle"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={20}
                                                    height={21}
                                                    viewBox="0 0 20 21"
                                                    fill="none"
                                                >
                                                    <path
                                                        opacity="0.2"
                                                        d="M17.0711 3.79231C15.1823 1.9036 12.6711 0.863403 10 0.863403C7.32887 0.863403 4.81762 1.9036 2.92891 3.79231C1.04016 5.68106 0 8.19231 0 10.8634C0 13.5345 1.04016 16.0457 2.92891 17.9345C4.81766 19.8232 7.32887 20.8634 10 20.8634C12.6711 20.8634 15.1823 19.8232 17.0711 17.9345C18.9598 16.0457 20 13.5345 20 10.8634C20 8.19231 18.9598 5.6811 17.0711 3.79231ZM10 19.6915C5.13215 19.6915 1.17188 15.7313 1.17188 10.8634C1.17188 5.99555 5.13215 2.03528 10 2.03528C14.8679 2.03528 18.8281 5.99555 18.8281 10.8634C18.8281 15.7313 14.8679 19.6915 10 19.6915Z"
                                                        fill="#794AFF"
                                                    />
                                                </svg>
                                                <svg
                                                    className="fill-primary"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={10}
                                                    height={8}
                                                    viewBox="0 0 10 8"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M9.77752 0.654773C9.54873 0.426023 9.17771 0.426023 8.94893 0.654812L3.77475 5.82899L1.05104 3.10528C0.822246 2.87649 0.45123 2.87649 0.222402 3.10528C-0.00642578 3.33407 -0.00642578 3.70509 0.222402 3.93391L3.36041 7.07192C3.47482 7.18634 3.62478 7.24352 3.77471 7.24352C3.92463 7.24352 4.07463 7.1863 4.189 7.07192L9.77752 1.48341C10.0063 1.25462 10.0063 0.883601 9.77752 0.654773Z"
                                                        fill="#794AFF"
                                                    />
                                                </svg>
                                            </div>
                                            <p className="mb-0 text-dark">
                                                Small and medium enterprises can
                                                compete globally through
                                                powerful digital capabilities
                                            </p>
                                        </li>
                                        <li
                                            className="d-flex align-items-center mb-3 gap-3"
                                            data-aos="fade-up"
                                            data-aos-delay={400}
                                        >
                                            <div className="position-relative">
                                                <svg
                                                    className="fill-primary position-absolute top-50 start-50 translate-middle"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={20}
                                                    height={21}
                                                    viewBox="0 0 20 21"
                                                    fill="none"
                                                >
                                                    <path
                                                        opacity="0.2"
                                                        d="M17.0711 3.79231C15.1823 1.9036 12.6711 0.863403 10 0.863403C7.32887 0.863403 4.81762 1.9036 2.92891 3.79231C1.04016 5.68106 0 8.19231 0 10.8634C0 13.5345 1.04016 16.0457 2.92891 17.9345C4.81766 19.8232 7.32887 20.8634 10 20.8634C12.6711 20.8634 15.1823 19.8232 17.0711 17.9345C18.9598 16.0457 20 13.5345 20 10.8634C20 8.19231 18.9598 5.6811 17.0711 3.79231ZM10 19.6915C5.13215 19.6915 1.17188 15.7313 1.17188 10.8634C1.17188 5.99555 5.13215 2.03528 10 2.03528C14.8679 2.03528 18.8281 5.99555 18.8281 10.8634C18.8281 15.7313 14.8679 19.6915 10 19.6915Z"
                                                        fill="#794AFF"
                                                    />
                                                </svg>
                                                <svg
                                                    className="fill-primary"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={10}
                                                    height={8}
                                                    viewBox="0 0 10 8"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M9.77752 0.654773C9.54873 0.426023 9.17771 0.426023 8.94893 0.654812L3.77475 5.82899L1.05104 3.10528C0.822246 2.87649 0.45123 2.87649 0.222402 3.10528C-0.00642578 3.33407 -0.00642578 3.70509 0.222402 3.93391L3.36041 7.07192C3.47482 7.18634 3.62478 7.24352 3.77471 7.24352C3.92463 7.24352 4.07463 7.1863 4.189 7.07192L9.77752 1.48341C10.0063 1.25462 10.0063 0.883601 9.77752 0.654773Z"
                                                        fill="#794AFF"
                                                    />
                                                </svg>
                                            </div>
                                            <p className="mb-0 text-dark">
                                                Secure systems and smart
                                                automation are accessible to all
                                                industries, including
                                                healthcare, logistics, retail,
                                                and public institutions
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="nav-values"
                                    role="tabpanel"
                                    aria-labelledby="nav-values-tab"
                                    tabIndex={0}
                                >
                                    <p className="wow img-custom-anim-top">
                                        At Sierlab we build trust and value
                                        through clear communication, reliable
                                        support, and best‑practice development.
                                    </p>
                                    <ul className="list-unstyled">
                                        <li
                                            className="d-flex align-items-center mb-3 gap-3"
                                            data-aos="fade-up"
                                            data-aos-delay={0}
                                        >
                                            <div className="position-relative">
                                                <svg
                                                    className="fill-primary position-absolute top-50 start-50 translate-middle"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={20}
                                                    height={21}
                                                    viewBox="0 0 20 21"
                                                    fill="none"
                                                >
                                                    <path
                                                        opacity="0.2"
                                                        d="M17.0711 3.79231C15.1823 1.9036 12.6711 0.863403 10 0.863403C7.32887 0.863403 4.81762 1.9036 2.92891 3.79231C1.04016 5.68106 0 8.19231 0 10.8634C0 13.5345 1.04016 16.0457 2.92891 17.9345C4.81766 19.8232 7.32887 20.8634 10 20.8634C12.6711 20.8634 15.1823 19.8232 17.0711 17.9345C18.9598 16.0457 20 13.5345 20 10.8634C20 8.19231 18.9598 5.6811 17.0711 3.79231ZM10 19.6915C5.13215 19.6915 1.17188 15.7313 1.17188 10.8634C1.17188 5.99555 5.13215 2.03528 10 2.03528C14.8679 2.03528 18.8281 5.99555 18.8281 10.8634C18.8281 15.7313 14.8679 19.6915 10 19.6915Z"
                                                        fill="#794AFF"
                                                    />
                                                </svg>
                                                <svg
                                                    className="fill-primary"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={10}
                                                    height={8}
                                                    viewBox="0 0 10 8"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M9.77752 0.654773C9.54873 0.426023 9.17771 0.426023 8.94893 0.654812L3.77475 5.82899L1.05104 3.10528C0.822246 2.87649 0.45123 2.87649 0.222402 3.10528C-0.00642578 3.33407 -0.00642578 3.70509 0.222402 3.93391L3.36041 7.07192C3.47482 7.18634 3.62478 7.24352 3.77471 7.24352C3.92463 7.24352 4.07463 7.1863 4.189 7.07192L9.77752 1.48341C10.0063 1.25462 10.0063 0.883601 9.77752 0.654773Z"
                                                        fill="#794AFF"
                                                    />
                                                </svg>
                                            </div>
                                            <p className="mb-0 text-dark">
                                                Client-Focused: We tailor our
                                                solutions to your unique
                                                processes
                                            </p>
                                        </li>
                                        <li
                                            className="d-flex align-items-center mb-3 gap-3"
                                            data-aos="fade-up"
                                            data-aos-delay={200}
                                        >
                                            <div className="position-relative">
                                                <svg
                                                    className="fill-primary position-absolute top-50 start-50 translate-middle"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={20}
                                                    height={21}
                                                    viewBox="0 0 20 21"
                                                    fill="none"
                                                >
                                                    <path
                                                        opacity="0.2"
                                                        d="M17.0711 3.79231C15.1823 1.9036 12.6711 0.863403 10 0.863403C7.32887 0.863403 4.81762 1.9036 2.92891 3.79231C1.04016 5.68106 0 8.19231 0 10.8634C0 13.5345 1.04016 16.0457 2.92891 17.9345C4.81766 19.8232 7.32887 20.8634 10 20.8634C12.6711 20.8634 15.1823 19.8232 17.0711 17.9345C18.9598 16.0457 20 13.5345 20 10.8634C20 8.19231 18.9598 5.6811 17.0711 3.79231ZM10 19.6915C5.13215 19.6915 1.17188 15.7313 1.17188 10.8634C1.17188 5.99555 5.13215 2.03528 10 2.03528C14.8679 2.03528 18.8281 5.99555 18.8281 10.8634C18.8281 15.7313 14.8679 19.6915 10 19.6915Z"
                                                        fill="#794AFF"
                                                    />
                                                </svg>
                                                <svg
                                                    className="fill-primary"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={10}
                                                    height={8}
                                                    viewBox="0 0 10 8"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M9.77752 0.654773C9.54873 0.426023 9.17771 0.426023 8.94893 0.654812L3.77475 5.82899L1.05104 3.10528C0.822246 2.87649 0.45123 2.87649 0.222402 3.10528C-0.00642578 3.33407 -0.00642578 3.70509 0.222402 3.93391L3.36041 7.07192C3.47482 7.18634 3.62478 7.24352 3.77471 7.24352C3.92463 7.24352 4.07463 7.1863 4.189 7.07192L9.77752 1.48341C10.0063 1.25462 10.0063 0.883601 9.77752 0.654773Z"
                                                        fill="#794AFF"
                                                    />
                                                </svg>
                                            </div>
                                            <p className="mb-0 text-dark">
                                                Scalable Design:
                                                Forward-compatible frameworks to
                                                support growth
                                            </p>
                                        </li>
                                        <li
                                            className="d-flex align-items-center mb-3 gap-3"
                                            data-aos="fade-up"
                                            data-aos-delay={400}
                                        >
                                            <div className="position-relative">
                                                <svg
                                                    className="fill-primary position-absolute top-50 start-50 translate-middle"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={20}
                                                    height={21}
                                                    viewBox="0 0 20 21"
                                                    fill="none"
                                                >
                                                    <path
                                                        opacity="0.2"
                                                        d="M17.0711 3.79231C15.1823 1.9036 12.6711 0.863403 10 0.863403C7.32887 0.863403 4.81762 1.9036 2.92891 3.79231C1.04016 5.68106 0 8.19231 0 10.8634C0 13.5345 1.04016 16.0457 2.92891 17.9345C4.81766 19.8232 7.32887 20.8634 10 20.8634C12.6711 20.8634 15.1823 19.8232 17.0711 17.9345C18.9598 16.0457 20 13.5345 20 10.8634C20 8.19231 18.9598 5.6811 17.0711 3.79231ZM10 19.6915C5.13215 19.6915 1.17188 15.7313 1.17188 10.8634C1.17188 5.99555 5.13215 2.03528 10 2.03528C14.8679 2.03528 18.8281 5.99555 18.8281 10.8634C18.8281 15.7313 14.8679 19.6915 10 19.6915Z"
                                                        fill="#794AFF"
                                                    />
                                                </svg>
                                                <svg
                                                    className="fill-primary"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={10}
                                                    height={8}
                                                    viewBox="0 0 10 8"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M9.77752 0.654773C9.54873 0.426023 9.17771 0.426023 8.94893 0.654812L3.77475 5.82899L1.05104 3.10528C0.822246 2.87649 0.45123 2.87649 0.222402 3.10528C-0.00642578 3.33407 -0.00642578 3.70509 0.222402 3.93391L3.36041 7.07192C3.47482 7.18634 3.62478 7.24352 3.77471 7.24352C3.92463 7.24352 4.07463 7.1863 4.189 7.07192L9.77752 1.48341C10.0063 1.25462 10.0063 0.883601 9.77752 0.654773Z"
                                                        fill="#794AFF"
                                                    />
                                                </svg>
                                            </div>
                                            <p className="mb-0 text-dark">
                                                Security First: Strong
                                                cybersecurity, compliance, and
                                                risk management
                                            </p>
                                        </li>
                                        <li
                                            className="d-flex align-items-center mb-3 gap-3"
                                            data-aos="fade-up"
                                            data-aos-delay={400}
                                        >
                                            <div className="position-relative">
                                                <svg
                                                    className="fill-primary position-absolute top-50 start-50 translate-middle"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={20}
                                                    height={21}
                                                    viewBox="0 0 20 21"
                                                    fill="none"
                                                >
                                                    <path
                                                        opacity="0.2"
                                                        d="M17.0711 3.79231C15.1823 1.9036 12.6711 0.863403 10 0.863403C7.32887 0.863403 4.81762 1.9036 2.92891 3.79231C1.04016 5.68106 0 8.19231 0 10.8634C0 13.5345 1.04016 16.0457 2.92891 17.9345C4.81766 19.8232 7.32887 20.8634 10 20.8634C12.6711 20.8634 15.1823 19.8232 17.0711 17.9345C18.9598 16.0457 20 13.5345 20 10.8634C20 8.19231 18.9598 5.6811 17.0711 3.79231ZM10 19.6915C5.13215 19.6915 1.17188 15.7313 1.17188 10.8634C1.17188 5.99555 5.13215 2.03528 10 2.03528C14.8679 2.03528 18.8281 5.99555 18.8281 10.8634C18.8281 15.7313 14.8679 19.6915 10 19.6915Z"
                                                        fill="#794AFF"
                                                    />
                                                </svg>
                                                <svg
                                                    className="fill-primary"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={10}
                                                    height={8}
                                                    viewBox="0 0 10 8"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M9.77752 0.654773C9.54873 0.426023 9.17771 0.426023 8.94893 0.654812L3.77475 5.82899L1.05104 3.10528C0.822246 2.87649 0.45123 2.87649 0.222402 3.10528C-0.00642578 3.33407 -0.00642578 3.70509 0.222402 3.93391L3.36041 7.07192C3.47482 7.18634 3.62478 7.24352 3.77471 7.24352C3.92463 7.24352 4.07463 7.1863 4.189 7.07192L9.77752 1.48341C10.0063 1.25462 10.0063 0.883601 9.77752 0.654773Z"
                                                        fill="#794AFF"
                                                    />
                                                </svg>
                                            </div>
                                            <p className="mb-0 text-dark">
                                                Transparent Communication: You
                                                always know your project's
                                                status and value
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
