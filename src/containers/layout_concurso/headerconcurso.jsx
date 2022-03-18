import React from 'react';
import { NavbarBrand,Navbar, Container, NavDropdown,Nav } from "react-bootstrap";
import {Link} from 'react-router-dom';

class Headerconcurso extends React.Component {

    render(){
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="">Supervoices</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Container>
                            <Link to={"inscripcion"}>Inscripción</Link>
                        </Container>
                        <Container>
                            <Link to="login"></Link>
                        </Container>         
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }



}



export default Headerconcurso; 