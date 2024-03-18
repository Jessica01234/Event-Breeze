import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import Logo from "../Assets/Logo.png";
import "./navbar.css";

function NavbarComp(){
    return(
        <div >
            
            {/* <Navbar expand="lg">
                <Container>
                <Navbar.Brand href="/"><img src={Logo} alt=""/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                    <Nav.Link style={{color:"white"}} href="/">Home</Nav.Link>
                    <Nav.Link className="" style={{color:"white"}}  href="/signup"><Button  variant="outline-warning">Sign Up</Button></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>  */}

            <Navbar expand="lg" className="bg-body-dark">
             <Container>
                <Navbar.Brand href="/"><img src={Logo} alt=""/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                <Nav.Link href="/signup">
                    <span className="getStarteBtn">Get Started</span>
                </Nav.Link>            
                </Nav>
                </Navbar.Collapse>
             </Container>
    </Navbar>
        </div>
    )
}
export default NavbarComp;