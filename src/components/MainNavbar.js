import { Container,Navbar ,Nav} from "react-bootstrap"
import './MainNavbar.css';

const MainNavbar = () => {
    return (
        <div className="Nav">
      <Navbar className="MainNav" bg="primary" variant="dark">
    <Container>
    <Navbar.Brand className="API">API CHECKPOINT</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link></Nav.Link>
      <Nav.Link ></Nav.Link>
      <Nav.Link ></Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}

export default MainNavbar
