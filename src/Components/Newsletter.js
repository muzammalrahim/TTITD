import React, { Component } from 'react'
import {Row, Col, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { FaCcVisa, FaCcPaypal,FaCcAmazonPay } from "react-icons/fa"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


export default class Newsletter extends Component {
    render() {
    return (
        <div className="coupen">
            <div className="discount-coupen p-4">
                <div id="color-overlay"></div>
                <div className="subs-form">
                    <Container>
                        <Row>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <h6>Stay in the picture, join our newsletter</h6>
                                        
                                    <Form.Control type="email" placeholder="art@knowingorigin.com" />
                                        <Button variant="primary" type="submit">
                                        Subscribe
                                    </Button>
                                </Form.Group>
                                
                            </Form>
                        </Row>
                    </Container>
                
                </div>
            </div>
        </div>
    )
}

}
