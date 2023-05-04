import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chef from './Chef';
import { Card, Col, Container, Row } from 'react-bootstrap';

const AllChef = () => {
    const allChef = useLoaderData()
    console.log(allChef)
    return (
        <Container className='my-5 py-5'>
             <h6 className='text-warning text-center display-5 mt-5  fw-bold'>OUR THAI CHEF'S</h6>
             <h6 className='text-black text-center fs-5 mb-5  fw-bold'>We are fluent in making appetizing meals.</h6>
                  
                 <Row xs={1} md={6} className="g-4">
            {
                allChef.map(chef => <Chef key={chef.id} chef={chef}></Chef>)
            }
        </Row>
        </Container>
       
    );
};

export default AllChef;