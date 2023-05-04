import React from 'react';
import { Button, Container, Image } from 'react-bootstrap';
// import {banner} from '../assets/banner.jpg'
// import {banner} form "../assets/banner.jpg"


const HomeBanner = () => {
    return (
        <div style={{background: `url(https://img.freepik.com/free-photo/bearded-master-chef-prepares-fresh-salmon_496169-111.jpg?w=740&t=st=1682992199~exp=1682992799~hmac=d81b3af1730f03b7551c4b4737fb8ac564999f3227b1f97558c2f82c5f4d565a) no-repeat top / cover` , }} className='p-5 mb-5'>
           <Container className='py-5 text-end'>
                    <h1 className='text-danger display-3 fw-bold'>Welcome</h1>
                     <h2 className='text-warning display-6 fw-bold'> <span>Yummy</span> Food Artist</h2>
                     <p className='text-warning fs-6  ms-auto py-3'><span className='d-md-block'>
                     This restaurant is famous for a Thai food. The perfact 
                        </span><span className='d-md-block'>
                        chef for your restaurant. A chef is a  professional cook and </span>tradesman who is  proficient in all aspects of food preparation, often <span className='d-md-block'>focusing on a particular cuisine.</span></p>
                     <Button className='btn-danger'>Book Now</Button>
           </Container>
        </div>
    );
};

export default HomeBanner;