import React from 'react'
import {Row, Col, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn} from "react-icons/fa";
import FooterLogo from '../../images/square_logo.jpg';


function Footer() {
    return (
        <div className="footer-main pt-3 border-top">
            <Container>
            <div className='footer-inner'>
                    <div className='f-logo'>
                        <img className='footer-img' src={FooterLogo} alt=""/>
                    </div>
                    <div className='footer-menu pt-2'>
                        <ul className='m-0'>
                            <li className='pr-3'><Link>Home</Link></li>
                            <li className='pr-3'><Link>Gallery</Link></li>
                            <li className='pr-3'><Link>About</Link></li>
                            <li className='pr-3'><Link>Contact Us</Link></li>
                            <li className='pr-3'><Link>Art</Link></li>
                            <li className=''><Link>Events</Link></li>
                        </ul>
                    </div>
                    <div className='adress'>
                    {/* <ul className='p-0'>
                            <h4>Contact Info</h4>
                            <li><Link><FaGlobeAsia/><span className="pr-3">1234 Your Address, Country.</span></Link></li>
                            <li><Link><FaPhoneAlt/><span className="pl-2">+1 234 5678 9999</span></Link></li>
                            <li><Link> <FaEnvelope/><span className="pl-2">mail@domain.com</span></Link></li>
                        </ul> */}
                        <ul className="m-0 footer-social-links pb-3 p-0">
                                <li className="pr-3"><FaFacebookF/></li>
                                <li className="pr-3"><FaTwitter/></li>
                                <li className="pr-3"><FaInstagram/></li>
                                <li><FaLinkedinIn/></li>
                            
                        </ul>
                    </div>
                </div>
            </Container>
               


            <div className="copy-rigt">
                <Container>
                    <Row className="p-1">
                        <Col xs="12" md="12" className="pl-0">
                            <p className="mt-1 mb-1 pl-5">Copyright 2021 - All right reserved</p>
                        </Col>
                    </Row>
                </Container>

            </div>
        </div>
    )
}

export default Footer
