import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
const Chef = ({chef}) => {
    console.log(chef)
    const {id, chefPicture, chefName,  yearsOfExperience, numberOfRecipes,totalLikes
    } = chef
    return (
            <Col md={4} className=''>
                <Card>
                  
            <LazyLoad height={250}  threshold={0.95} onContentVisible={() => {console.log('loaded!')}}>
            <Card.Img variant="top" src={chefPicture}  />
          </LazyLoad>
                    
                    <Card.Body style={{height:"210px"}}>
                      <Card.Title className='text-warning text-decoration-none fs-4 fw-bold'>{chefName}</Card.Title>
                      <Card.Text>
                        <h6>{yearsOfExperience} Years of experience</h6>
                        <h6>{numberOfRecipes} Recipes</h6>
                        <h6>{totalLikes} Likes</h6>
                        <Button className='btn-danger'><Link  to={`/${id}`}  className='text-white text-decoration-none'>Read More</Link></Button>
                      </Card.Text>
                    </Card.Body>
          </Card>
            </Col>
    );
};

export default Chef;