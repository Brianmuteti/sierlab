import Link from "next/link";

export default function Section2() {
    return (
        <>
            {/*startup integrations section 1*/}
            <section className="startup-integrations-section-1 position-relative  overflow-hidden">
                <div className="container position-relative">
                    <div className="row">
                        <div className="col-lg">
                            <div className="row  g-4 mt-5">
                                <div
                                    className="col-lg-4 col-md-6"
                                    data-aos="fade-up"
                                    data-aos-delay={0}
                                >
                                    <div className="border rounded-3 p-5 bg-white card-services hover-up mb-lg-0 h-100">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <h6>PayPal</h6>
                                                <p className="fs-7">Payment</p>
                                            </div>
                                            <img
                                                src="assets/imgs/pages/startup/page-integrations/paypal.svg"
                                                alt="SierLab"
                                            />
                                        </div>
                                        <p className="mb-4">
                                            We integrate PayPal to facilitate
                                            seamless online payments.
                                        </p>
                                        <Link
                                            href="https://developer.paypal.com/api/rest/"
                                            className="text-primary text-uppercase fs-7 fw-semibold"
                                        >
                                            Lean More
                                            <svg
                                                className="ms-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={13}
                                                height={13}
                                                viewBox="0 0 13 13"
                                                fill="none"
                                            >
                                                <path
                                                    d="M7.07106 6.35416L1.41421 12.0111L0 10.5969L5.65686 4.93996L0.7071 -0.00976562H12.0209V11.304L7.07106 6.35416Z"
                                                    fill="#292929"
                                                />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <div
                                    className="col-lg-4 col-md-6"
                                    data-aos="fade-up"
                                    data-aos-delay={0}
                                >
                                    <div className="border rounded-3 p-5 bg-white card-services hover-up mb-lg-0 h-100">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <h6>Stripe</h6>
                                                <p className="fs-7">Payment</p>
                                            </div>
                                            <img
                                                src="assets/imgs/pages/startup/page-integrations/tool-stripe.svg"
                                                alt="SierLab"
                                            />
                                        </div>
                                        <p className="mb-4">
                                            We integrate Stripe to facilitate
                                            seamless online payments.
                                        </p>
                                        <Link
                                            href="https://stripe.com/docs/api"
                                            className="text-primary text-uppercase fs-7 fw-semibold"
                                        >
                                            Lean More
                                            <svg
                                                className="ms-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={13}
                                                height={13}
                                                viewBox="0 0 13 13"
                                                fill="none"
                                            >
                                                <path
                                                    d="M7.07106 6.35416L1.41421 12.0111L0 10.5969L5.65686 4.93996L0.7071 -0.00976562H12.0209V11.304L7.07106 6.35416Z"
                                                    fill="#292929"
                                                />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <div
                                    className="col-lg-4 col-md-6"
                                    data-aos="fade-up"
                                    data-aos-delay={0}
                                >
                                    <div className="border rounded-3 p-5 bg-white card-services hover-up mb-lg-0 h-100">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <h6>Mpesa</h6>
                                                <p className="fs-7">Payment</p>
                                            </div>
                                            <img
                                                src="assets/imgs/pages/startup/page-integrations/mpesa.svg"
                                                alt="SierLab"
                                            />
                                        </div>
                                        <p className="mb-4">
                                            We integrate Mpesa apis for TILL,
                                            PAYBILL
                                        </p>
                                        <Link
                                            href="https://developer.safaricom.co.ke/docs/api"
                                            className="text-primary text-uppercase fs-7 fw-semibold"
                                        >
                                            Lean More
                                            <svg
                                                className="ms-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={13}
                                                height={13}
                                                viewBox="0 0 13 13"
                                                fill="none"
                                            >
                                                <path
                                                    d="M7.07106 6.35416L1.41421 12.0111L0 10.5969L5.65686 4.93996L0.7071 -0.00976562H12.0209V11.304L7.07106 6.35416Z"
                                                    fill="#292929"
                                                />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <div
                                    className="col-lg-4 col-md-6"
                                    data-aos="fade-up"
                                    data-aos-delay={0}
                                >
                                    <div className="border rounded-3 p-5 bg-white card-services hover-up mb-lg-0 h-100">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <h6>Whatsapp</h6>
                                                <p className="fs-7">Messages</p>
                                            </div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="48"
                                                height="48"
                                                fill="green"
                                                className="bi bi-whatsapp"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                                            </svg>
                                        </div>
                                        <p className="mb-4">
                                            We integrate WhatsApp Business APIs
                                            for messaging and notifications.
                                        </p>
                                        <Link
                                            href="https://developers.facebook.com/docs/whatsapp"
                                            className="text-primary text-uppercase fs-7 fw-semibold"
                                        >
                                            Lean More
                                            <svg
                                                className="ms-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={13}
                                                height={13}
                                                viewBox="0 0 13 13"
                                                fill="none"
                                            >
                                                <path
                                                    d="M7.07106 6.35416L1.41421 12.0111L0 10.5969L5.65686 4.93996L0.7071 -0.00976562H12.0209V11.304L7.07106 6.35416Z"
                                                    fill="#292929"
                                                />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <div
                                    className="col-lg-4 col-md-6"
                                    data-aos="fade-up"
                                    data-aos-delay={0}
                                >
                                    <div className="border rounded-3 p-5 bg-white card-services hover-up mb-lg-0 h-100">
                                        <div className="d-flex align-items-center justify-content-betwehen">
                                            <div>
                                                <h6>ChatGPT</h6>
                                                <p className="fs-7">AI</p>
                                            </div>
                                            <img
                                                src="assets/imgs/pages/startup/page-integrations/chatgpt.svg"
                                                alt="SierLab"
                                            />
                                        </div>
                                        <p className="mb-4">
                                            We integrate ChatGPT APIs for
                                            conversational AI and customer
                                            support.
                                        </p>
                                        <Link
                                            href="https://platform.openai.com/docs/api-reference/chat"
                                            className="text-primary text-uppercase fs-7 fw-semibold"
                                        >
                                            Lean More
                                            <svg
                                                className="ms-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={13}
                                                height={13}
                                                viewBox="0 0 13 13"
                                                fill="none"
                                            >
                                                <path
                                                    d="M7.07106 6.35416L1.41421 12.0111L0 10.5969L5.65686 4.93996L0.7071 -0.00976562H12.0209V11.304L7.07106 6.35416Z"
                                                    fill="#292929"
                                                />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <div
                                    className="col-lg-4 col-md-6"
                                    data-aos="fade-up"
                                    data-aos-delay={0}
                                >
                                    <div className="border rounded-3 p-5 bg-white card-services hover-up mb-lg-0 h-100">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <h6>Twilio</h6>
                                                <p className="fs-7">Messages</p>
                                            </div>
                                            <img
                                                src="assets/imgs/pages/startup/page-integrations/twilio.svg"
                                                alt="SierLab"
                                            />
                                        </div>
                                        <p className="mb-4">
                                            We integrate Twilio APIs for SMS and
                                            voice communications.
                                        </p>
                                        <Link
                                            href="https://www.twilio.com/docs/usage/api"
                                            className="text-primary text-uppercase fs-7 fw-semibold"
                                        >
                                            Lean More
                                            <svg
                                                className="ms-2"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={13}
                                                height={13}
                                                viewBox="0 0 13 13"
                                                fill="none"
                                            >
                                                <path
                                                    d="M7.07106 6.35416L1.41421 12.0111L0 10.5969L5.65686 4.93996L0.7071 -0.00976562H12.0209V11.304L7.07106 6.35416Z"
                                                    fill="#292929"
                                                />
                                            </svg>
                                        </Link>
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
