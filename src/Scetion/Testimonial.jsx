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
                  <p>Professional chefs are highly skilled culinary experts who have undergone extensive training and education in the art and science of cooking. They possess a deep knowledge of various cuisines, ingredients, cooking techniques, and food safety practices. Professional chefs are able to create innovative and flavorful dishes while maintaining consistency in taste, presentation, and quality. They also have excellent organizational and time management skills, as well as the ability to work well under pressure in a fast-paced kitchen environment. Professional chefs often work long hours and are dedicated to perfecting their craft, constantly seeking new culinary techniques and trends to incorporate into their menus. Above all, professional chefs prioritize the satisfaction and enjoyment of their customers and strive to create memorable dining experiences.</p>
                  
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