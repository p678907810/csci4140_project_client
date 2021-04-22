import React from 'react'
import {Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar,Button,Form,Nav,FormControl} from 'react-bootstrap';
const NavBar = () => {
    return(
    <nav>
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand>VMusic</Navbar.Brand>
        <Nav className="mr-auto">
            <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
            <LinkContainer to="/explore"><Nav.Link>Explore</Nav.Link></LinkContainer>
            <LinkContainer to="/addVTuber"><Nav.Link>Add Vtuber</Nav.Link></LinkContainer>
            <LinkContainer to="/addSong"><Nav.Link>Add Song</Nav.Link></LinkContainer>
        </Nav>
        
    </Navbar>
    </nav>  
     
    )
}
export default NavBar;