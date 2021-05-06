import React, { Component } from 'react'
import {Row, Col, Container } from 'react-bootstrap';
import {Link } from 'react-router-dom';
import Gallery1 from '../../images/g1.jpg';
import Gallery2 from '../../images/g2.jpg';
import Gallery3 from '../../images/g3.jpg';
import Gallery4 from '../../images/g4.jpg';
import Gallery5 from '../../images/g5.jpg';
import Gallery6 from '../../images/g6.jpg';
import Card from 'react-bootstrap/Card';
import ListIcon from '../../images/list-icon.png';
import Avatar1 from '../../images/avatar1.png';
import Avatar2 from '../../images/avatar2.png';
import Avatar3 from '../../images/avatar3.png';
import Avatar4 from '../../images/avatar4.png';
import Avatar5 from '../../images/avatar5.png';
import Avatar6 from '../../images/avatar6.png';



export default class Sales extends Component {
    render() {
        return (
            <div className="gallery-main mt-5 mb-5">
                <Container>
                    <Row>
                        <Col xs="12" lg='6'>
                            <h3 className="inner-title">Upcoming sales</h3>
                        </Col>
                        {/* <Col xs="12" lg='6'>
                            <div className="web-buttons">
                                <Link className='collection-btn' to ='/home'>start collecting</Link>
                                <Link className='learn-more-btn' to ='/home'>learn more</Link>
                            </div>
                        </Col> */}
                    </Row>

                    {/* row 1 */}
                    <Row className="pt-5 gallery-inner"> 
                        <Col xs='12' lg='4'>
                            <Card>
                            <Link><Card.Img className='g-img' variant="top" src={Gallery1} alt=""/></Link>
                                <Card.Body className="pl-3">
                                    <Row>
                                        <Col xs='8' className="pl-0">
                                            <Link><p className='heading-inner'>Self- Let me in</p></Link>
                                        </Col>
                                        <Col xs='4' className="right-side pr-0"><p>1 of 1</p></Col>
                                    </Row>
                                    <Row>
                                        <Col xs='8' className="pl-0">
                                            <p><span className="pr-2"><img src={Avatar1} alt=""/></span>damnengine</p>
                                        </Col>
                                        <Col xs='4' className="right-side pr-0"><p><span className="pr-1"><img src={ListIcon} alt=""/></span>0.75</p></Col>
                                    </Row>
                                   
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs='12' lg='4'>
                            <Card>
                            <Link><Card.Img  className='g-img' variant="top" src={Gallery2} alt=""/></Link>
                                <Card.Body className="pl-3">
                                    <Row>
                                        <Col xs='8' className="pl-0">
                                            <Link><p className='heading-inner'>Front Row - The Place Theater</p></Link>
                                        </Col>
                                        <Col xs='4' className="right-side pr-0"><p>3 available</p></Col>
                                    </Row>
                                    <Row>
                                        <Col xs='8' className="pl-0">
                                            <p><span className="pr-2"><img src={Avatar2} alt=""/></span>worldlost</p>
                                        </Col>
                                        <Col xs='4' className="right-side pr-0"><p><span className="pr-1"><img src={ListIcon} alt=""/></span>0.40</p></Col>
                                    </Row>
                                   
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs='12' lg='4'>
                            <Card>
                            <Link><Card.Img  className='g-img' variant="top" src={Gallery3} alt=""/></Link>
                                <Card.Body className="pl-3">
                                    <Row>
                                        <Col xs='8' className="pl-0">
                                            <Link><p className='heading-inner'>Heartfelt Vibration 2021 sabet</p></Link>
                                        </Col>
                                        <Col xs='4' className="right-side pr-0"><p>8 available</p></Col>
                                    </Row>
                                    <Row>
                                        <Col xs='8' className="pl-0">
                                            <p><span className="pr-2"><img src={Avatar3} alt=""/></span>sabet</p>
                                        </Col>
                                        <Col xs='4' className="right-side pr-0"><p><span className="pr-1"><img src={ListIcon} alt=""/></span>1.00</p></Col>
                                    </Row>
                                   
                                </Card.Body>
                            </Card>
                        </Col>  
                    </Row>
                    {/* row 1 */}

                    {/* row 2*/}
                    <Row className="gallery-inner"> 
                    <Col xs='12' lg='4'>
                            <Card>
                            <Link><Card.Img  className='g-img' variant="top" src={Gallery4} alt=""/></Link>
                                <Card.Body className="pl-3">
                                    <Row>
                                        <Col xs='8' className="pl-0">
                                            <Link><p className='heading-inner'>Self- Let me in</p></Link>
                                        </Col>
                                        <Col xs='4' className="right-side pr-0"><p>1 of 1</p></Col>
                                    </Row>
                                    <Row>
                                        <Col xs='8' className="pl-0">
                                            <p><span className="pr-2"><img src={Avatar4} alt=""/></span>damnengine</p>
                                        </Col>
                                        <Col xs='4' className="right-side pr-0"><p><span className="pr-1"><img src={ListIcon} alt=""/></span>0.75</p></Col>
                                    </Row>
                                   
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs='12' lg='4'>
                            <Card>
                            <Link><Card.Img variant="top" src={Gallery5} /></Link>
                                <Card.Body className="pl-3">
                                    <Row>
                                        <Col xs='8' className="pl-0">
                                            <Link><p className='heading-inner'>Front Row - The Place Theater</p></Link>
                                        </Col>
                                        <Col xs='4' className="right-side pr-0"><p>3 available</p></Col>
                                    </Row>
                                    <Row>
                                        <Col xs='8' className="pl-0">
                                            <p><span className="pr-2"><img src={Avatar5} alt=""/></span>worldlost</p>
                                        </Col>
                                        <Col xs='4' className="right-side pr-0"><p><span className="pr-1"><img src={ListIcon} alt=""/></span>0.40</p></Col>
                                    </Row>
                                   
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs='12' lg='4'>
                            <Card>
                            <Link><Card.Img variant="top" src={Gallery6} alt=""/></Link>
                                <Card.Body className="pl-3">
                                    <Row>
                                        <Col xs='8' className="pl-0">
                                            <Link><p className='heading-inner'>Heartfelt Vibration 2021 sabet</p></Link>
                                        </Col>
                                        <Col xs='4' className="right-side pr-0"><p>8 available</p></Col>
                                    </Row>
                                    <Row>
                                        <Col xs='8' className="pl-0">
                                            <p><span className="pr-2"><img src={Avatar6} alt=""/></span>sabet</p>
                                        </Col>
                                        <Col xs='4' className="right-side pr-0"><p><span className="pr-1"><img src={ListIcon} alt=""/></span>1.00</p></Col>
                                    </Row>
                                   
                                </Card.Body>
                            </Card>
                        </Col>  
                    </Row>
                    {/* row 2 */}
                    <Row>
                        <Col xs='12' className='text-center'>
                            <div className="gallery-btn">
                                <Link>View Upcoming Sales</Link>
                            </div>
                        </Col>  
                    </Row>
                </Container>
            </div>
        )
    }
}
