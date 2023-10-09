import React from 'react'
import logo from '../images/sungrow/logo_25_m.png'
import bp from '../images/sungrow/bp.png'
import cl from '../images/sungrow/cl.png'
import cs from '../images/sungrow/cs.png'
import invo from '../images/sungrow/invo.png'
import la from '../images/sungrow/la.png'
import qualilty from '../images/sungrow/qualiity.png'
import relaibility from '../images/sungrow/relaibility.png'
import tw from '../images/sungrow/tw.png'
import { Link } from 'react-router-dom'

const Company = () => {
    return (
        <>
            <section className="company-page flex flex-col">
                <div className="header relative text-center">
                    <img src={logo} alt="" className='mt-8 w-[165px] inline-block' />
                    <Link to={'/home'} className="icon absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9.9688 11.5347L9.96878 11.5347C9.84576 11.6555 9.74774 11.7993 9.68031 11.9579C9.61287 12.1165 9.57735 12.2869 9.57576 12.4593C9.57417 12.6316 9.60655 12.8026 9.67105 12.9625C9.73544 13.1221 9.83059 13.2674 9.95106 13.3903L9.96945 13.4087L9.97009 13.4093L16.3048 19.6299L16.3048 19.6299L16.3069 19.632C16.4708 19.7978 16.5628 20.0214 16.5632 20.2545C16.5635 20.4876 16.4722 20.7115 16.3088 20.8778C16.1455 21.0441 15.9233 21.1394 15.6902 21.1432C15.4572 21.1471 15.232 21.059 15.0632 20.8982L15.0632 20.8982L15.0611 20.8962L8.72467 14.6743L8.72425 14.6739L8.68666 14.6367L8.68665 14.6368L8.68451 14.6346C8.4004 14.3452 8.17607 14.0028 8.02432 13.6267C7.87258 13.2507 7.7964 12.8484 7.80013 12.443C7.80386 12.0375 7.88743 11.6367 8.04607 11.2635C8.20471 10.8903 8.4353 10.552 8.72468 10.268C8.72469 10.268 8.72469 10.268 8.7247 10.268L15.0616 4.04657L15.0616 4.04655L15.0637 4.04453C15.2324 3.88369 15.4576 3.79567 15.6907 3.79949C15.9237 3.80332 16.1459 3.89867 16.3093 4.06496C16.4726 4.23125 16.564 4.45513 16.5636 4.68822C16.5633 4.92131 16.4712 5.1449 16.3074 5.31069L16.2487 5.37012H16.2465L9.9688 11.5347Z" fill="#212121" stroke="#212121" stroke-width="0.4"></path>
                        </svg>
                    </Link>
                </div>
                <div className="company-page-content flex-1">
                    <div className="title bold">CORPORATE PROFILE</div>
                    <div className="profile"><div className="profile-content">
                        <div className="flex items-center justify-between">
                            <span className="label">COMPANY NAME</span>
                            <span className="value">Ocean Network Express Pte. Ltd.</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="label">CEO</span>
                            <span className="value">Jeremy Nixon</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="label">LOCATION</span>
                            <span className="value">7 Straits View,#16-01 Marina One East Tower,Singapore 018936</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="label">DATE OF ESTABLISHMENT</span>
                            <span className="value">July 7th, 2017</span>
                        </div>
                        <div>
                            <div className="label">BUSINESS DOMAIN</div>
                            <div className="value">
                                Container Shipping Businesses(Including worldwide terminal operation except for Japan)
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="title bold">
                        OCEAN NETWORK EXPRESS
                    </div>
                    <div className="companyInfos">
                        <div>
                            Business Integration of container shipping by three Japanese shipping companies.
                        </div>
                        <div>
                            Business Integration of container shipping by three Japanese shipping companies.
                            Ocean Network Express was established on July 7, 2017 by the integration of 'K' Line, MOL and NYK.
                            The Holding company was set up in Japan on July 7th 2017 and simultaneously a business management
                            company was established in Singapore. Regional headquarters have been established in Hong Kong, Singapore,
                            UK, USA and Brazil and services commenced in April 2018.
                        </div>
                        <div>Providing a wide service coverage with the 7th largest fleet in the world.</div>
                        <div>
                            In April 2017, 'K' Line, MOL and NYK, started services as "THE Alliance" with other major shipping companies.
                            Ocean Network Express will continue to provide services as an alliance member. In addition to this alliance,
                            we are continuing to further strengthen our services to Asia, Latin America and Africa regions.
                            We will further expand the number of ports in the future to Asia, North America, Europe,
                            the Mediterranean Sea and the Middle East, also planning to expand our direct service to perform a wide service coverage.
                            Our fleet size is 1,505,181 TEU which is the 7th largest in the world (as of June 2022).
                            Operations will be performed through a fleet of 205 vessels, including 35 super-large ships,
                            such as the world largest 20,000TEU container-ships, in a service network covering over 120 countries around the world.
                        </div>
                    </div>
                    <div className="title bold">CORE VALUES</div>
                    <div className="values"><div className="flex">
                        <img src={la} alt="" />
                        <div>
                            <div className="values-title">
                                Lean &amp; Agile
                            </div>
                            <div className="values-content">
                                Breaking through conventions to make ideas into reality quickly
                            </div>
                        </div>
                    </div>
                        <div className="flex">
                            <img src={tw} alt="" />
                            <div>
                                <div className="values-title">Teamwork</div>
                                <div className="values-content">
                                    Respect individual diversity to build a team that can work together to create new value
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <img src={bp} alt="" />
                            <div>
                                <div className="values-title">Best Practice</div>
                                <div className="values-content">
                                    Continuing to improve ourselves based on the knowledge cultivated internally and externally to deliver the best services
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <img src={cl} alt="" />
                            <div>
                                <div className="values-title">Challenge</div>
                                <div className="values-content">
                                    Leveraging on individual strengths and continuing to meet challenge without fear of failure
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <img src={qualilty} alt="" />
                            <div>
                                <div className="values-title">Quality</div>
                                <div className="values-content">
                                    Pursuing the best quality that always exceeds customer expectations
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <img src={relaibility} alt="" />
                            <div>
                                <div className="values-title">Reliability</div>
                                <div className="values-content">
                                    Delivering stable, sustainable and professional services
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <img src={invo} alt="" />
                            <div>
                                <div className="values-title">Innovation</div>
                                <div className="values-content">
                                    Delivering services that contribute to the customer’s business through self innovation and creativity
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <img src={cs} alt="" />
                            <div>
                                <div className="values-title">Customer Satisfaction</div>
                                <div className="values-content">
                                    Focus on customer needs well and deliver satisfaction that exceeds expectations
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white fixed w-full bottom-0 rounded-[24px_24px_0_0] ">
                    <div className="company-page-bottom  w-full">
                        <button data-v-0df625cb="" type="primary" className="button flex items-center justify-center button-primary default w-full">
                            Download APP
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Company