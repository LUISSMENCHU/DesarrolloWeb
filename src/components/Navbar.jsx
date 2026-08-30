import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

function Menu() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>

        <Navbar.Brand href="#inicio">
          TechStore
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className="me-auto">

            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#productos">Productos</Nav.Link>
            <Nav.Link href="#laptops">Laptops</Nav.Link>
            <Nav.Link href="#celulares">Celulares</Nav.Link>
            <Nav.Link href="#accesorios">Accesorios</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

export default Menu