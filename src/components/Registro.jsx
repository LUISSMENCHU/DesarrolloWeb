
import { useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { api } from '../services/api'

function Registro() {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function registrar(e) {
    e.preventDefault()
    setMensaje('')
    setError('')
    setLoading(true)

    try {
      const respuesta = await api('/auth/register', {
        method: 'POST',
        body: JSON.stringify({
          nombre,
          email: correo,
          password: contrasena
        })
      })

      setMensaje(`Cuenta creada correctamente para ${respuesta.usuario.email}. Ya puedes iniciar sesión.`)
      setNombre('')
      setCorreo('')
      setContrasena('')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="p-4 mx-auto" style={{ maxWidth: '500px' }}>
      <h2 className="text-center mb-4">Crear cuenta</h2>

      {mensaje && <Alert variant="success">{mensaje}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={registrar}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre completo</Form.Label>
          <Form.Control
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            type="email"
            required
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Contraseña (mínimo 8 caracteres)</Form.Label>
          <Form.Control
            type="password"
            minLength={8}
            required
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
        </Form.Group>

        <Button type="submit" disabled={loading}>
          {loading ? 'Registrando…' : 'Crear cuenta'}
        </Button>
      </Form>
    </Card>
  )
}

export default Registro
