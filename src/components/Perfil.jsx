import { Card, Badge, ListGroup, Button } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'

function Perfil() {

  const { state, dispatch } = useAuth()

  const usuario = state.usuario

  function cerrarSesion() {
    dispatch({
      type: 'LOGOUT'
    })
  }

  if (!state.isAuthenticated) {
    return (
      <Card className="p-4 text-center">
        <h3>No hay una sesión iniciada</h3>
        <p>Inicie sesión para ver su perfil.</p>
      </Card>
    )
  }

  return (
    <Card className="p-4 mx-auto" style={{ maxWidth: '600px' }}>

      <Card.Title>
        Perfil de Usuario
      </Card.Title>

      <Card.Text>
        <strong>Nombre:</strong> {usuario.nombre}
      </Card.Text>

      <Card.Text>
        <strong>Correo:</strong> {usuario.email}
      </Card.Text>

      <Card.Text>
        <strong>Tipo de membresía:</strong>{' '}
        <Badge bg="primary">{usuario.tipo}</Badge>
      </Card.Text>

      <Card.Text>
        <strong>Fecha de acceso:</strong> {usuario.fechaAcceso}
      </Card.Text>

      <h5 className="mt-3">Historial de pedidos</h5>

      <ListGroup className="mb-3">
        {usuario.pedidos.map((pedido, index) => (
          <ListGroup.Item key={index}>
            {pedido}
          </ListGroup.Item>
        ))}
      </ListGroup>

      <Button
        variant="danger"
        onClick={cerrarSesion}
      >
        Cerrar Sesión
      </Button>

    </Card>
  )
}

export default Perfil