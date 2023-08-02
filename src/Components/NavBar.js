import React from 'react'
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { logout } from '../JS(redux)/actions/user';
import './NavBar.css'


const NavBar = () => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const isAuthAdmin= useSelector((state) => state.adminReducer.isAuthAdmin);
  const dispatch = useDispatch();
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">The Employee Dashboard</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link> 

            { isAuth || isAuthAdmin ?

              <div className='scroll'>
             
              (<Nav.Link href="/profile">Profile</Nav.Link>) 
              (<NavDropdown title="switch" id="basic-nav-dropdown">
              <NavDropdown.Item href="/switch">switch</NavDropdown.Item>
              <NavDropdown.Item href="/switch/add">add switch</NavDropdown.Item>
              <NavDropdown.Item href="/switch/edit">Edit</NavDropdown.Item>
              </NavDropdown>)            


              (<NavDropdown title="request" id="basic-nav-dropdown">
              <NavDropdown.Item href="/request">request</NavDropdown.Item>
              <NavDropdown.Item href="/request/add">add request</NavDropdown.Item>
              <NavDropdown.Item href="/request/edit">Edit</NavDropdown.Item>
              </NavDropdown>)
              
              
              </div>
              : null } 

              {isAuthAdmin?
              ((<Nav.Link href="/users">USERS</Nav.Link>) )
            : null}

            { isAuth || isAuthAdmin ?

              (<Link to='/'> 
              <button onClick={() => dispatch((logout()))}>logout</button>
              </Link>)
              :
              
              (<div className='other'>
                <Nav.Link href="/register">Register</Nav.Link>
                <Nav.Link href="/Login">Login</Nav.Link>
              </div>)
            }

            
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar