import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaHandPointRight } from 'react-icons/fa';


const ChefDetailsmain = () => {
    const {id} = useParams()
    const chefDetails = useLoaderData()
    console.log(chefDetails)
    const {chefName,chefPicture, numberOfRecipes
,shortBio,totalLikes,totalRecipes,yearsOfExperience    } = chefDetails
    return (
        <>
            <div style={{background: `url(${chefPicture}) no-repeat top / cover` , }} className='p-5'>
               <Container className='py-5 '>
                        <h1 className='text-danger display-5 fw-bold'>{chefName}</h1>
                         <h2 className='text-warning fs-4 fw-bold'>{yearsOfExperience} years  experience.</h2>
                         <p className='text-warning fs-6 w-50  pt-3'>{shortBio}</p>
                         <h6 className='text-primary'>{numberOfRecipes} Recipes</h6>
                         
                        <h6 className='text-primary fs-6'><span className='text-danger'><FaHandPointRight/></span> {totalLikes} M like</h6>
                         <Button className='btn-danger'>Book Now</Button>
               </Container>
            </div>

            <Container className='py-5 my-5'>
            <Row xs={1} md={3} className="g-4">
                            <Col>
                              <Card>
                                <Card.Img variant="top" src={totalRecipes.recipes?.recipe1?.img} />
                                <Card.Body>
                                  <Card.Title>{totalRecipes.recipes?.recipe1?.name}</Card.Title>
                                  <Card.Text>
                                    <p className='text-black fs-6'><span className='text-warning'>Ingredients:</span> {totalRecipes.recipes?.recipe1?.ingredients}</p>
                                    <p className='text-black fs-6'><span className='text-warning'>Cooking_method:</span> {totalRecipes.recipes?.recipe1?.cooking_method}</p>
                                    <Rating style={{ maxWidth: 100 }} value={Rating} readOnly />
                                    <p className=' fs-6 text-warning'>Rating:  {totalRecipes.recipes?.recipe1?.rating} M</p>
                                    <Button>Favorite</Button>
                                  </Card.Text>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card>
                                <Card.Img variant="top" src={totalRecipes.recipes?.recipe2?.img} />
                                <Card.Body>
                                  <Card.Title>{totalRecipes.recipes?.recipe2?.name}</Card.Title>
                                  <Card.Text>
                                    <p className='text-black fs-6'><span className='text-warning'>Ingredients:</span> {totalRecipes.recipes?.recipe2?.ingredients}</p>
                                    <p className='text-black fs-6'><span className='text-warning'>Cooking_method:</span> {totalRecipes.recipes?.recipe2?.cooking_method}</p>
                                    <Rating style={{ maxWidth: 100 }} value={Rating} readOnly />
                                    <p className=' fs-6 text-warning'>Rating:  {totalRecipes.recipes?.recipe2?.rating} M</p>
                                    <Button>Favorite</Button>
                                  </Card.Text>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card>
                                <Card.Img variant="top" src={totalRecipes.recipes?.recipe3?.img} />
                                <Card.Body>
                                  <Card.Title>{totalRecipes.recipes?.recipe3?.name}</Card.Title>
                                  <Card.Text>
                                    <p className='text-black fs-6'><span className='text-warning'>Ingredients:</span> {totalRecipes.recipes?.recipe3?.ingredients}</p>
                                    <p className='text-black fs-6'><span className='text-warning'>Cooking_method:</span> {totalRecipes.recipes?.recipe3?.cooking_method}</p>
                                    <Rating style={{ maxWidth: 100 }} value={Rating} readOnly />
                                    <p className=' fs-6 text-warning'>Rating:  {totalRecipes.recipes?.recipe3?.rating} M</p>
                                    <Button>Favorite</Button>
                                  </Card.Text>
                                </Card.Body>
                              </Card>
                            </Col>
                           
                        </Row>
            </Container>
        </>
    );
};

export default ChefDetailsmain;