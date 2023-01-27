import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return <>
    <Navbar className="navbar-area ">
      <Container>
        <Nav className="me-auto">
          <Nav.Link >
            <Link to={"/"}> Home</Link>
          </Nav.Link>
          <Nav.Link >
            <Link to={"/about"}> About Us</Link></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    <br />
  </>
}

export default Header;