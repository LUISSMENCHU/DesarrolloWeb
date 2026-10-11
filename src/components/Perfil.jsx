import { Card, Badge, Button } from 'react-bootstrap'
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
        <strong>Rol:</strong>{' '}
        <Badge bg="primary">{usuario.rol || 'cliente'}</Badge>
      </Card.Text>

      <Card.Text>
        <strong>Cuenta creada:</strong> {usuario.createdAt ? new Date(usuario.createdAt).toLocaleDateString() : '—'}
      </Card.Text>

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
