import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">1houseKeeper</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Family</Nav.Link>
                <Nav.Link href="#link">Maintenance</Nav.Link>
                <Nav.Link href="#link">Pets</Nav.Link>
                <NavDropdown title="Properties" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Cars</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Electronics</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Collections</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Tools</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.5">Books</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.6">Floor Plan</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
