import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaCopyright, FaFacebook, FaGithub, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
       <div className='bg-secondary p-4'>
         <Container>
             <Row>
                <Col sm={8} lg={4}><h1 className='text-white fs-6'>Yummy Food Artist</h1></Col>
                <Col sm={4} lg={4} className='text-white '><h1 className='fs-6'><FaCopyright></FaCopyright>2018 Qode Interactive, All Rights Reserved</h1></Col>
                <Col sm={4} lg={4}>
                <h1 className='fs-6 text-white text-end'>Follow us <FaFacebook/> <FaYoutube></FaYoutube> <FaGithub></FaGithub></h1>
                </Col>
            </Row>
        </Container>
       </div>
    );
};

export default Footer;
