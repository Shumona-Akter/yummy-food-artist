import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chef from './Chef';
import { Card, Col, Container, Row } from 'react-bootstrap';

const AllChef = () => {
    const allChef = useLoaderData()
    console.log(allChef)
    return (
        <Container className='my-5 py-5'>
             <h6 className='text-warning text-center display-5 my-5  fw-bold'>Our All Chef</h6>
                  
                 <Row xs={1} md={6} className="g-4">
            {
                allChef.map(chef => <Chef key={chef.id} chef={chef}></Chef>)
            }
        </Row>
        </Container>
       
    );
};

export default AllChef;