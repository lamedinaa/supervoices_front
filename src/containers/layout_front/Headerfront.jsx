import React from 'react';
import { NavbarBrand,Navbar, Container, NavDropdown,Nav } from "react-bootstrap";


class Headerfront extends React.Component {

    render(){
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/">Supervoices</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="inscripcion">Incribirse</Nav.Link>
                        <Nav.Link href="login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }



}



export default Headerfront; 
