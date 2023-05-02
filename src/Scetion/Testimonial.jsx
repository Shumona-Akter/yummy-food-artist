import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonial = () => {
    return (
        <div style={{background: `url(https://img.freepik.com/free-photo/confident-young-male-cook-chef-uniform-standing-pointing-white-wall-isolated-orange-wall-with-copy-space_141793-101281.jpg?w=740&t=st=1682997707~exp=1682998307~hmac=3cd5519fc9a8a3fdc9a1f74e57bb3b6a5c43596e0f42847335b964847863c1f9) no-repeat top / cover` , }} className='p-5'>
            <Container className='my-5 '>
           <Row className='py-5'>
                <Col md={6} className='pe-3'>
                  <h6 className='text-warning fs-3 fst-italic  fw-bold'>Testimonials</h6>
                  <h1 className='display-5 fw-bold my-4'>What Clients Say
                    About <span className='text-warning'>Yummy Food Artist</span></h1>
                  <p>As an AI language model, I don't have access to specific information about individual chefs and their clients. However, in general, clients tend to share positive feedback about chefs who are skilled in creating delicious and visually appealing dishes, who are able to cater to dietary restrictions or preferences, who have a professional and friendly demeanor, and who provide excellent customer service. Clients appreciate chefs who are able to listen to their needs and preferences, and who are able to create custom menus or dishes that meet their specific requirements. Additionally, clients may also value chefs who are knowledgeable about different cuisines and cooking techniques, who use high-quality ingredients, and who are able to provide a unique and memorable dining experience.</p>
                  
                  <Rating style={{ maxWidth: 100 }} value={Rating} readOnly />
                  <h6 className='fs-4 text-danger fw-bold '> <span className='fs-6 text-danger fw-bold'>4.5M</span> </h6>
                  
                </Col>
                
                <Col md={6}>
                  
                </Col>
        </Row>
        </Container>
            
        </div>
    );
};

export default Testimonial;