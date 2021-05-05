import React, { Component } from 'react'
import {Row, Col, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { FaCcVisa, FaCcPaypal,FaCcAmazonPay } from "react-icons/fa"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


export default class Newsletter extends Component {
    render() {
    return (
        <div className="news-letter-main pt-4 pb-3">
            <Container>
                <h6 className='pb-3'>Stay in the picture, join our newsletter</h6>
                <Row>
                    <Col lg='3'></Col>
                    <Col lg='6'>
                    <Form>
                    <Form.Group controlId="formBasicEmail">
                        <div className='form-inner'>
                            <div className='form-btn'>
                                <Button variant="primary" type="submit">
                                Subscribe
                                </Button>
                            </div>  
                        </div>    
                        <Form.Control type="email" placeholder="art@knowingorigin.com" />     
                    </Form.Group>  
                </Form>
                    </Col>
                    <Col lg='3'></Col>
                </Row>
                
            </Container>
        </div>
    )
}

}
