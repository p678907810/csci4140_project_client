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
            <LinkContainer to="/aboutus"><Nav.Link>About Us</Nav.Link></LinkContainer>
            <LinkContainer to="/addVTuber"><Nav.Link>Add Vtuber</Nav.Link></LinkContainer>
            <LinkContainer to="/makeplaylist"><Nav.Link>Make Song</Nav.Link></LinkContainer>
        </Nav>
        <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
        </Form>
        
    </Navbar>
    </nav>  
     
    )
}
export default NavBar;