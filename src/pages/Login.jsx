import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { FaGoogle, FaGithub} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
  const {user,signInGoogle, setUser,setAuthError} = useContext(AuthContext)
  const handleGoogleSignIn = ()=>{
    signInGoogle()
    .then(result =>{
      const googleUser = result.user
     setUser(googleUser)
    })
    .catch(error => {
      console.log(error)
    })
    
  }
    return (
        <Container className='d-flex  justify-content-center'>
          <div className=' w-50'>
          <h1 className='text-primary fs-4  text-center py-3'>Login Here Please!</h1>
            <Form >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <h1 className='text-primary fs-6  text-center py-1'>Sign in with</h1>
      <div className='text-center'>
        <Button className='text-white btn-warning' onClick={handleGoogleSignIn}><FaGoogle></FaGoogle></Button>
        <Button className='text-white btn-warning mx-3'><FaGithub/></Button>
      </div>
      <h1 className='text-danger fs-6  text-center py-1'>
            I have no an account <Link to='/resister'>Register</Link>
      </h1>
          </div>
        </Container>
    );
};

export default Login;