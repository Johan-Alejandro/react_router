import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <Navbar expand="lg" className="bg-success">
      <Container>
        <Navbar.Brand href="#home">Happy Cake</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/home" className="text-white p-3">
              Home
            </Link>
            <Link to="/contact" className="text-white p-3">
              Contacto
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
