import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chef from './Chef';
import { Card, Col, Container, Row } from 'react-bootstrap';

const AllChef = () => {
    const allChef = useLoaderData()
    console.log(allChef)
    return (
        <Container >
                 <Row xs={1} md={6} className="g-4">
            {
                allChef.map(chef => <Chef key={chef.id} chef={chef}></Chef>)
            }
        </Row>
        </Container>
       
    );
};

export default AllChef;