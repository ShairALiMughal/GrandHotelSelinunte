import React from 'react'
import { Link } from 'react-router-dom'

function FooterSix() {
    return (
        <>
            {/* footer style six */}
            <footer className="rts__section rts__footer is__home__six footer__background">
                <div className="container">
                    <div className="row">
                        <div className="footer__widget__wrapper">
                            <div className="rts__widget">
                                <span className="widget__title">Quick Links</span>
                                <ul>
                                    <li>
                                        <Link to="#">
                                            <i className="flaticon-marker" /> 280 Augusta Avenue, M5T 2L9
                                            Toronto, Canada
                                        </Link>
                                    </li>
                                </ul>
                                <div className="footer__social__link mt-20">
                                    <Link to="#" className="link__item">
                                        Facebook
                                    </Link>
                                    <Link to="#" className="link__item">
                                        Linkedin
                                    </Link>
                                    <Link to="#" className="link__item">
                                        Twitter
                                    </Link>
                                </div>
                            </div>
                            <div className="rts__widget">
                                <Link to="/">
                                    <img src="/assets/images/logo/logo__two.svg" alt="footer logo" />
                                </Link>
                            </div>
                            <div className="rts__widget">
                                <span className="widget__title">Contact Us</span>
                                 <ul>
                                    <li>
                                        <Link to="tel:+393288170176">
                                            <i className="flaticon-phone-flip" /> +393288170176
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="mailto:booking@grandhotelselinunte.com">
                                            <i className="flaticon-envelope" />
                                            booking@grandhotelselinunte.com
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <i className="flaticon-marker" /> Contrada, Via Trenta Salme, 91022 Marinella TP, Italy
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright__text">
                    <div className="container">
                        <div className="row">
                            <div className="copyright__wrapper">
                                <p className="mb-0">
                                    Copyright © {new Date().getFullYear()} Grand Hotel Selinunte. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* footer style six end */}
        </>

    )
}

export default FooterSix