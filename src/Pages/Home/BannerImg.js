import React, { Component } from 'react';
// import MainImg from '../../images/banner_img.jpg';
import {Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';


export default class BannerImg extends Component {
    render() {
        return (
            <div className="img-wrap pb-5">
                {/* <img className="main-img w-100" src={MainImg} alt="header image"/> */}
                <Container>
                    <div className="overlay"></div>
                    <div className="main-banenr-inner pt-5 pb-5">
                        <div className='banner-inner pb-5'>
                            <h1 className="pt-4 pb-5">Discover and collect <br/>rare artwork from<br/> the black rock desert</h1>
                            <span className="web-buttons border mb-5">
                                <Link className='collection-btn' to ='/home'>start collecting</Link>
                                <Link className='learn-more-btn' to ='/home'><u>learn more</u></Link>
                            </span>
                        </div>
                        
                    </div>
                </Container>
                

            </div>
        )
    }
}
