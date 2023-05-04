import React, { useContext, useState } from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Navber.css'
import { AuthContext } from '../../provider/AuthProvider';
const Navber = () => {
    // const [isActive, setIsActive] = useState(true)
    const {user, logOut} = useContext(AuthContext)
    // if(loading){
    //  return <h1>loading...</h1>
   
    // }
    // console.log(user.displayName
    //   )
    const handleLogout = ()=>{
      logOut()
      console.log(logOut())
      .then()
      .catch((error) => {
        console.log(error)
      });
    }
    return (
        <Navbar bg="secondary py-4" expand="lg">
      <Container>
        <Link to='/' className='text-danger fs-5 fw-bold text-decoration-none'>Yummy Food Artist</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="mx-auto ">
          <NavLink style={{fontSize:"18px", textDecoration:"none", padding:"20px"}} to="/" className={({ isActive}) => isActive ? "text-danger" : "text-warning" } > Home</NavLink>
          <NavLink style={{fontSize:"18px", textDecoration:"none", padding:"20px"}} to="/blog" className={({ isActive}) => isActive ? "text-danger" : "text-warning" } > Bolg</NavLink>
          
          
          </Nav>
          <div className="d-flex align-items-center text-white">
           
            {
              user?<div className='d-flex gap-3'>
              <img title={user?.displayName} style={{width: '50px' , height : '50px', borderRadius: '50%'}} src={user.photoURL} alt="user" />
              <Button className='btn btn-danger'><Link to='/login' className='text-decoration-none text-white' onClick={handleLogout}>Logout</Link></Button>
              </div>:<Button className='btn btn-danger'><Link to='/login' className='text-decoration-none text-white'>Login</Link></Button>
            }
            
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Navber;