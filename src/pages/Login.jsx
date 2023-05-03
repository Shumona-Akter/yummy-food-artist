import React, { useContext} from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { FaGoogle, FaGithub} from "react-icons/fa";
import {useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
  const {user,signInGoogle,signInGithub, setUser,authError,setAuthError,signIn,} = useContext(AuthContext)
  
  // const location = useLocation()
  console.log(location)


  const form = Location.state?.form?.pathname || "/"

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
  // github
  const handleGithubSignIn = ()=>{
    signInGithub()
    .then(result =>{
      const googleUser = result.user
     setUser(googleUser)
    })
    .catch(error => {
      console.log(error)
    })
    
  }

  // github sign in

  // sign in google
  const handleSignIn = (event)=>{
    event.preventDefault()
    const form = event.target;
    const email = form.email.value
    // const password = form.Password.value
    const password = form.password.value
    console.log(email,password)
    signIn(email, password)
    .then(result =>{
      const loggedUser = result.user
      setUser(loggedUser)
      setAuthError("")
      event.target.reset()
      
    })
    .catch(err => {
      setAuthError("Invalid email or password")
    })
  }
    return (
        <Container className='d-flex  justify-content-center'>
          <div className=' w-50'>
          <h1 className='text-primary fs-4  text-center py-3'>Login Here Please!</h1>
            <Form onSubmit={handleSignIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>
       
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <p className="text-danger">{authError}</p>
      </Form>
      <h1 className='text-primary fs-6  text-center py-1'>Sign in with</h1>
      <div className='text-center'>
        <Button className='text-white btn-warning' onClick={handleGoogleSignIn}><FaGoogle></FaGoogle></Button>
        <Button className='text-white btn-warning mx-3 ' onClick={handleGithubSignIn}><FaGithub/></Button>
      </div>
      <h1 className='text-danger fs-6  text-center py-1'>
            I have no an account <Link to='/resister'>Register</Link>
      </h1>
          </div>
        </Container>
    );
};

export default Login;