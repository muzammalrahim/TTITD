import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import Header from '../../Components/Header';
import BannerImg from '../../Pages/Home/BannerImg';
import Gallery from '../../Pages/Home/Gallery';
import Footer from '../../Components/FooterFolder/Footer';
import SimpleCountdownTimer from '../../Pages/Home/CountDown';
import {Row, Col, Container } from 'react-bootstrap';
import Sales from '../Home/Sales';
import Newsletter from '../../Components/Newsletter';





export default class Home extends Component {
    render() {
        return (
            <div className="main-home">
                {/* header */}
                <div className="header">
                <Header/>
                </div>
                {/* header */}

                {/* main-banner */}
                <div className="h-banner-img">
                    <BannerImg />
                </div>
                 {/* main-banner */}

                {/* Gallery */}
                <div>
                    <Gallery/>
                </div>
                {/* Gallery */}

                {/* Counter */}
                <div className='counter-main pt-5 pb-5'>
                    <Container>
                        <Row className="pt-5 pb-5">
                            <Col xs={12} lg={8}>
                                <div className='pb-4'>
                                    <h2>
                                    Featured drop by Frenetik Void coming 16th Apr
                                    </h2>
                                </div>
                                <div  className=''>
                                    <SimpleCountdownTimer/>
                                </div>
                                <div className="gallery-btn mt-5">
                                    <Link>Learn More</Link>
                                </div>
                                <div className='pt-4'>
                                    <h6>Nebulae by Frenetik Void</h6>
                                </div>

                                
                            </Col>
                        </Row>
                        
                    </Container> 
                </div>
                {/* Counter */}

                {/* Sales*/}
                <div>
                    <Sales/>
                </div>
                {/* Sales*/}

                {/* Guest Editor*/}
                <div className='guest-editor pt-5 pl-5'>
                    <Container className="pb-5">
                            <div className='inner-content pt-5 pb-5'>
                            <h3>Guest editor</h3>
                            <h3> Art rapture</h3>
                            <div className="gallery-btn mt-5">
                                <Link>View Gallery</Link>
                            </div>
                        </div>
                        
                    </Container>
                    
                </div>
                {/* Guest Editor*/}

                {/* Art Section*/}
                <div className="art-sec pt-5">
                    <Container className="pb-5">
                    <div className='inner-content pt-5'>
                        
                            <h3>Collection</h3>
                            <h3> 3D Art</h3>
                            <div className="gallery-btn mt-5">
                                <Link>View Collection</Link>
                            </div>
                        
                    </div>
                    </Container>
                </div>
                {/* Art Section*/}

                {/* About*/}
                <div className='about-nfts pt-5 pb-5'>
                    <Container>
                        <Row className="pt-5 pb-5">
                            <Col lg='6'>
                                <h1>What are NFTs?</h1>
                            </Col>
                            <Col lg='6'>
                                <p>Every digital artwork on KnownOriginauthentic and truly unique. 
                                    Blockchain technology makes this new to digital ownership 
                                    possible. Use our platform to showcase sell your work to
                                     collectors who care about authenticity.</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
                {/* About*/}

                {/* New Release*/}
                <div className='new-release pt-5 '>
                    <Container>
                        <div className='inner-content pt-5'>
                            <h3>New Release by</h3>
                            <h3> AGK42</h3>
                            <div className="gallery-btn mt-5">
                                <Link>View Artwork</Link>
                            </div>
                        </div>
                        </Container>
                </div>
                {/* New Release*/}

                {/* Become Artist*/}
                <div className='become-artist pt-5 pb-5'>
                    <div className="pt-3 pb-3">
                        <Container>
                            <Row className="pt-5 pb-4">
                                <Col lg='6'>
                                    <h1>Become an artist on <br/>KnownOrigin</h1>
                                </Col>
                                <Col lg='6'>
                                    <p>
                                        Join our community of creatives, showcase and sell your 
                                        digital artworks.Digitally sign yourwork by creating a 
                                        tokenized certificate.
                                    </p>
                                    <div className="gallery-btn mt-4 mb-4">
                                        <Link>Apply to Join</Link>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    
                </div>
                {/* Become Artist*/}

                {/* Spot light sec*/}
                <div className='spot-light pt-5'>
                    <Container>
                        <div className='inner-content pt-5'>
                            <h3>Artist spotlight</h3>
                            <h3>Alex Shell</h3>
                            <div className="gallery-btn mt-4 mb-4">
                                <Link>Read the Article</Link>
                            </div>
                        </div>
                        </Container>
                </div>
                {/* Spot light sec*/}

                {/* Join Community*/}
                <div className='join-community pt-5 pb-5'>
                    <div className="pt-3 pb-3">
                        <Container>
                            <Row className="pt-5 pb-4">
                                <Col lg='6'>
                                    <h1>Join our community</h1>
                                </Col>
                                <Col lg='6'>
                                    <p className="m-0">
                                    Meet the KnownOrigin team, artist and collectors for platform updates, 
                                    announcements and more...
                                    </p>
                                    <div className="gallery-btn mt-4 mb-4">
                                        <Link>Launch Discord</Link>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    
                </div>
                {/* Join Community*/}

                {/* newletter */}
                    <Newsletter/>
                {/* newletter */}

                {/* footer*/}
                <div>
                    <Footer/>
                </div>
                {/* footer*/}
            </div>
        )
    }
}
