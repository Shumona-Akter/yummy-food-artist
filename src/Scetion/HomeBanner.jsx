import React from 'react';
import { Button, Container, Image } from 'react-bootstrap';
// import {Banner} from '../../src/assets/home-banner.jpg'

const HomeBanner = () => {
    return (
        <div style={{background: `url(https://img.freepik.com/free-photo/bearded-master-chef-prepares-fresh-salmon_496169-111.jpg?w=740&t=st=1682992199~exp=1682992799~hmac=d81b3af1730f03b7551c4b4737fb8ac564999f3227b1f97558c2f82c5f4d565a) no-repeat top / cover` , }} className='p-5'>
           <Container className='py-5 text-end'>
                    <h1 className='text-danger display-1 fw-bold'>Welcome</h1>
                     <h2 className='text-warning display-6 fw-bold'>Yummy Food Artist</h2>
                     <p className='text-warning fs-6  ms-auto py-3'>The perfact chef for your restaurant. A chef is a <br /> professional cook and tradesman who is  proficient in all aspects of <br /> food preparation, often focusing on a particular cuisine.</p>
                     <Button className='btn-danger'>Book Now</Button>
           </Container>
        </div>
    );
};

export default HomeBanner;