import { Container,Nav,Navbar,Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Nave = () => {
  return (
    <Navbar className="bg-white shadow-large mb-3">
    <Container>
      <Nav classname="me-auto">
        <Nav.Link to="/" as={NavLink}>
          Home
        </Nav.Link>
        <Nav.Link to="/store" as={NavLink}>
          Store
        </Nav.Link>
      </Nav>
      <Button></Button>
    </Container>
  </Navbar>
  )
}

export default Nave
