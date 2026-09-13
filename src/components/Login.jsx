import { useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'

function Login() {

  const { dispatch } = useAuth()

  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [error, setError] = useState('')

  function iniciarSesion(e) {

    e.preventDefault()

    if (nombre === '' || correo === '') {
      setError('Por favor, complete todos los campos.')
      return
    }

    const usuario = {
      nombre: nombre,
      email: correo,
      tipo: 'Cliente',
      fechaAcceso: new Date().toLocaleDateString(),
      pedidos: [
        'Laptop Dell Inspiron',
        'Mouse Logitech M90'
      ]
    }

    dispatch({
      type: 'LOGIN',
      payload: usuario
    })

    setError('')
  }

  return (
    <Card className="p-4 mx-auto" style={{ maxWidth: '500px' }}>
      <h2 className="text-center mb-4">Iniciar Sesión</h2>

      {error && (
        <Alert variant="danger">
          {error}
        </Alert>
      )}

      <Form onSubmit={iniciarSesion}>

        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ingrese su nombre"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="Ingrese su correo"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Iniciar Sesión
        </Button>

      </Form>
    </Card>
  )
}

export default Login