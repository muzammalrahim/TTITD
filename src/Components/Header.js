import React, { Component } from 'react'
import {Row, Col, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link } from 'react-router-dom';
import Logo from '../images/square_logo.jpg';





export default class Header extends Component {
    render() {
        return (
                <div className="header-main">
                    <div className="header p-3">
                        <Container>
                            {/* web menu */}
                            <div className="web-menu">
                            <Row>  
                                
                                <Col xs="3">
                                    <Link to ='/home'><img className="web-logo" src={Logo} alt=""/></Link>
                                    
                                </Col>
                                <Col xs="9">
                                    <div className="home-menu pt-5">
                                        <Nav className="justify-content-center" activeKey="/home">
                                            <Nav.Item>
                                                <Nav.Link href="/home"  className="pr-4">Home</Nav.Link>
                                            </Nav.Item>

                                            <Nav.Item>
                                                <Nav.Link eventKey="link-1"  className="pr-4">Gallery</Nav.Link>
                                            </Nav.Item>

                                            <Nav.Item>
                                                <Nav.Link eventKey="link-2"  className="pr-4">About</Nav.Link>
                                            </Nav.Item>

                                            <Nav.Item>
                                                <Nav.Link eventKey="link-2"  className="pr-4">Contact</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="link-2"  className="pr-4">Art</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="link-2">Events</Nav.Link>
                                            </Nav.Item>
                                        
                                        </Nav>
                                    </div>
                                </Col>  
                            </Row>
                            </div>
                            {/* web menu */}

                            {/* Mobile menu */}
                                <div className="mob-menu">
                                <Row> 
                                    {/* web menu */}
                                    <div className="web-menu"></div>
                                    <Col lg="4" xs="3">
                                        <div className="brand-name">        
                                        <Link to ='/home'><img className="mob-logo" src={Logo} alt=""/></Link>
                                        </div>
                                        
                                    </Col>
                                    <Col lg="9" xs="9">
                                        <div className="home-menu">
                                        <Navbar className="p-0" expand="lg" w-100>

                                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                            <Navbar.Collapse id="basic-navbar-nav">
                                                <Nav className="m-auto border">
                                                <Nav.Link href="#">Home</Nav.Link>
                                                <Nav.Link eventKey="link-1">About</Nav.Link>
                                                <Nav.Link eventKey="link-2">Gallery</Nav.Link>
                                                <Nav.Link eventKey="link-3">Contact</Nav.Link>
                                                <Nav.Link eventKey="link-4">Art</Nav.Link>
                                                <Nav.Link eventKey="link-5">Events</Nav.Link>
                                                </Nav>    
                                                
                                            </Navbar.Collapse>
                                            </Navbar>
                                        </div>
                                    </Col>
                                    
                                    {/* web menu */}

                                </Row>
                                </div>
                                    

                            {/* Mobile menu */}
                        </Container>
                    </div>
                </div>
           
        )
    }
}
