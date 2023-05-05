import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaHandPointRight } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import LazyLoad from 'react-lazy-load';

  

const ChefDetailsmain = () => {
    const {id} = useParams()
    const chefDetails = useLoaderData()
    console.log(chefDetails)
    const {chefName,chefPicture, numberOfRecipes
,shortBio,totalLikes,totalRecipes,yearsOfExperience    } = chefDetails
const [isDisable, setDisable] =useState(false)
const [isDisable1, setDisable1] =useState(false)
const [isDisable2, setDisable2] =useState(false)
const notify = () => {
  toast("Your favorite items😊")
  setDisable(!isDisable)
};
const notify2 = () => {
  toast("Your favorite items😊")
  setDisable1(!isDisable1)
};
const notify3 = () => {
  toast("Your favorite items😊")
  setDisable2(!isDisable2)
};
    
    


    return (
        <>
            <div className='' >
               <div className='py-5' style={{background:`url(https://i.ibb.co/ZxrNZ2P/chef-Bg-0a21efd7.jpg) no-repeat center / cover`, }}>
                        <div className="row container mx-auto py-5" >
                          <div className="col-lg-6">
                          <h1 className='text-danger fs-1 fw-bold'>{chefName}</h1>
                         <p className='text-white fs-6  '>{shortBio}</p>
                         <h2 className='text-white fs-6 fw-bold'>{yearsOfExperience} years  experience.</h2>
                         <h6 className='text-white'>{numberOfRecipes} Recipes</h6>
                         
                        <h6 className='text-white fs-6'><span className='text-danger'><FaHandPointRight/></span> {totalLikes} M like</h6>
                         <Button className='btn-danger my-3'>Book Now</Button>
                          </div>
                          <div className="col-lg-6">
                          <LazyLoad height={300}  threshold={0.95} onContentVisible={() => {console.log('loaded!')}}>
                          <img src={chefPicture} className='img-fluid' alt="" />
                        </LazyLoad>
                              
                          </div>
                        </div>
               </div>
            </div>

            <Container className='py-5 my-5'>
              <h1 className='text-danger text-center my-3 fs-2 fw-bold'>{chefName}</h1>
              <h1 className='text-warning text-center fs-5 mb-5'>Best Three Recipes Here</h1>
            <Row xs={1} md={3} className="g-4">
                            <Col>
                              <Card style={{height:"670px"}}>
                                
                                <Card.Img variant="top" style={{height:"250px"}} src={totalRecipes.recipes?.recipe1?.img} />
                                <Card.Body>
                                  <Card.Title>{totalRecipes.recipes?.recipe1?.name}</Card.Title>
                                  <Card.Text>
                                    <p className='text-black fs-6'><span className='text-warning'>Ingredients:</span> {totalRecipes.recipes?.recipe1?.ingredients}</p>
                                    <p className='text-black fs-6'><span className='text-warning'>Cooking_method:</span> {totalRecipes.recipes?.recipe1?.cooking_method}</p>
                                    <Rating style={{ maxWidth: 100 }} value={Rating} readOnly />
                                    <p className=' fs-6 text-warning'>Rating:  {totalRecipes.recipes?.recipe1?.rating} M</p>
                                    <Button  onClick={notify} disabled={isDisable}
                                    >Favorite</Button>
                                  </Card.Text>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{height:"670px"}}>
                                <Card.Img variant="top" style={{height:"250px"}} src={totalRecipes.recipes?.recipe2?.img} />
                                <Card.Body>
                                  <Card.Title>{totalRecipes.recipes?.recipe2?.name}</Card.Title>
                                  <Card.Text>
                                    <p className='text-black fs-6'><span className='text-warning'>Ingredients:</span> {totalRecipes.recipes?.recipe2?.ingredients}</p>
                                    <p className='text-black fs-6'><span className='text-warning'>Cooking_method:</span> {totalRecipes.recipes?.recipe2?.cooking_method}</p>
                                    <Rating style={{ maxWidth: 100 }} value={Rating} readOnly />
                                    <p className=' fs-6 text-warning'>Rating:  {totalRecipes.recipes?.recipe2?.rating} M</p>
                                    <Button onClick={notify2}  disabled={isDisable1}>Favorite</Button>
                                    <ToastContainer />
                                  </Card.Text>
                                </Card.Body>
                              </Card>
                            </Col>
                            <Col>
                              <Card style={{height:"670px"}}>
                                <Card.Img variant="top" style={{height:"250px"}} src={totalRecipes.recipes?.recipe3?.img} />
                                <Card.Body>
                                  <Card.Title>{totalRecipes.recipes?.recipe3?.name}</Card.Title>
                                  <Card.Text>
                                    <p className='text-black fs-6'><span className='text-warning'>Ingredients:</span> {totalRecipes.recipes?.recipe3?.ingredients}</p>
                                    <p className='text-black fs-6'><span className='text-warning'>Cooking_method:</span> {totalRecipes.recipes?.recipe3?.cooking_method}</p>
                                    <Rating style={{ maxWidth: 100 }} value={Rating} readOnly />
                                    <p className=' fs-6 text-warning'>Rating:  {totalRecipes.recipes?.recipe3?.rating} M</p>
                                    <Button onClick={notify3} disabled={isDisable2}>Favorite</Button>
                                  </Card.Text>
                                </Card.Body>
                              </Card>
                            </Col>
                           
                        </Row>

            </Container>
        </>
    );
};
// ReactDOM.render(<App />, document.body);
export default ChefDetailsmain;