import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button,Navbar,Nav,Container } from 'react-bootstrap';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';
export default function Navbarz() {
  
    return (
        <>
           <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand to="/">Nemo</Navbar.Brand>
    <Nav className="me-auto">
      
       <div class="nav-item">
   <NavLink className="nav-link" to="/about">About me</NavLink>  
      </div>
      <div class="nav-item">
   <NavLink className="nav-link" to="/portfolio">Portfolio</NavLink>  
      </div>
      <div class="nav-item">
   <NavLink className="nav-link" to="/contact">Contact us</NavLink>  
      </div>
      <div class="nav-item">
   <NavLink className="nav-link" to="/Resume">Resume</NavLink>
      </div>
       
    </Nav>
    </Container>
  </Navbar>
        </>
      );
}