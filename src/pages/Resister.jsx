import React, {useState, useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { FaGoogle, FaGithub} from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Resister = () => {
  const {signUp,authError,setAuthError, user, setUser} = useContext(AuthContext)
  const [passwordCheaked, setPasswordCheaked] = useState("")
  const [error, setError]  = useState("")
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.form?.pathname || "/"
  
  const handlePassword =(e) =>{
    const pass = e.target.value
    setPasswordCheaked(pass)
    if(pass.length < 6){
      setError("The password is less than 6 characters.")

    }
    else{
      setError("")
    }
    
  }
  const handleResister = (event) =>{
    event.preventDefault()
    const form = event.target;
    const name = form.name.value
    const email = form.email.value
    const password = form.Password.value
    const photoUrl = form.photoUrl.value
    // console.log(name,Password,photoUrl)

    
      signUp(email, password)
      .then (result =>{
        const resisterUser = result.user
        setUser(resisterUser)
        setAuthError("")
        event.target.reset()
        userProfileUpdate(result.user, name, photoUrl)
        navigate(from, {replace: true})
       
      })
      .catch(error =>{
        console.log(error.message)
        setAuthError("Invalid email or Password")
      } )

    
// user profile update
      const userProfileUpdate = (user, name, photoUrl) =>{
        updateProfile(user, {
          displayName: name,
          photoURL: photoUrl
        })
        .then(() => {
          console.log(name)
        }).catch((error) => {
          console.log(error)
        });
      }
  }
    return (
        <Container className='d-flex  justify-content-center'>
          <div className=' w-50'>
          <h1 className='text-primary fs-4  text-center py-3'>Register Here Please!</h1>
            <Form onSubmit={handleResister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control  type="text" name="name" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"   onChange={handlePassword} value={passwordCheaked} name="Password" placeholder="Password" required />
        </Form.Group>
        <p className="text-danger">{error}</p>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" name="photoUrl" placeholder="Enter Photo URL" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <p className="text-danger">{authError}</p>
      </Form>
      <h1 className='text-danger fs-6   py-1'>
      Already I have an account <Link to='/login'>Login</Link>
      </h1>
          </div>
        </Container>
    );
};

export default Resister;