import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';

const OurStory = () => {
    return (
        <Container className=''>
           <Row>
                <Col md={6} className='pe-3'>
                  <h6 className='text-warning fs-3 fst-italic  fw-bold'>Our Story</h6>
                  <h1 className='display-5 fw-bold my-4'>Traditional & Modern  Service <span className='text-warning'>Since 1970</span></h1>
                  <p>The value of history is that it helps us understand the present and the future. In food service, knowledge of our professional heritage helps us see why we do things as we do, how our cooking techniques have been developed and refined, and how we can continue to develop and innovate in the years ahead.</p>
                </Col>
                <Col md={6}>
                  <Image src="https://img.freepik.com/free-photo/chef-holding-pan-with-fire-inside_144627-16644.jpg?w=740&t=st=1682995704~exp=1682996304~hmac=30a67c16c252dfed1efa32a4211bee48757390d329d1307e418fbb5660fc4d32" fluid />
                </Col>
        </Row>
        </Container>
    );
};

export default OurStory;