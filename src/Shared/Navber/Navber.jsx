import React, { useContext, useState } from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Navber.css'
import { AuthContext } from '../../provider/AuthProvider';
const Navber = () => {
    const [isActive, setIsActive] = useState(true)
    const {user} = useContext(AuthContext)
    return (
        <Navbar bg="black py-4" expand="lg">
      <Container>
        <Link to='/' className='text-danger fs-5 fw-bold text-decoration-none'>Yummy Food Artist</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto ">
          <NavLink to="/" className={`text-warning      text-decoration-none fs-5 fw-bold ${isActive?"text-danger":""}`}><span>Home</span></NavLink>
          <NavLink to="" className={`text-warning text-decoration-none fs-5 fw-bold ${isActive?"text-danger":""}`}><span className='ps-4'>About us</span></NavLink>
          <NavLink to="" className={`text-warning text-decoration-none fs-5 fw-bold ${isActive?"text-danger":""}`}><span className='ps-4'>services</span></NavLink>
          <NavLink to="" className={`text-warning text-decoration-none fs-5 fw-bold ${isActive?"text-danger":""}`}><span className='ps-4'>Shop</span></NavLink>
          <NavLink to="" className={`text-warning text-decoration-none fs-5 fw-bold ${isActive?"text-danger":""}`}><span className='ps-4'>Blog</span></NavLink>
          </Nav>
          <div className="d-flex align-items-center text-white">
            <p>profile</p>
            {
              user?<Button className='btn btn-danger'><Link to='/login' className='text-decoration-none text-white'>Logout</Link></Button>:<Button className='btn btn-danger'><Link to='/login' className='text-decoration-none text-white'>Login</Link></Button>
            }
            
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Navber;