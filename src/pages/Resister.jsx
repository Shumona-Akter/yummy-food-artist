import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { FaGoogle, FaGithub} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Resister = () => {
    return (
        <Container className='d-flex  justify-content-center'>
          <div className=' w-50'>
          <h1 className='text-primary fs-4  text-center py-3'>Register Here Please!</h1>
            <Form >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" placeholder="Enter Photo URL" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <h1 className='text-danger fs-6   py-1'>
      Already I have an account <Link to='/login'>Login</Link>
      </h1>
          </div>
        </Container>
    );
};

export default Resister;