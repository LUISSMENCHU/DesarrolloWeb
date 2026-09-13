import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { useAuth } from '../context/AuthContext'

function Menu() {

  const { state, dispatch } = useAuth()

  function cerrarSesion() {
    dispatch({
      type: 'LOGOUT'
    })
  }

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

          <Nav>

            {!state.isAuthenticated && (
              <Nav.Link href="#login">
                Iniciar Sesión
              </Nav.Link>
            )}

            {state.isAuthenticated && (
              <>
                <Nav.Link href="#perfil">
                  {state.usuario.nombre}
                </Nav.Link>

                <Nav.Link href="#perfil">
                  Perfil
                </Nav.Link>

                <Button
                  variant="outline-light"
                  onClick={cerrarSesion}
                  className="ms-2"
                >
                  Cerrar Sesión
                </Button>
              </>
            )}

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu