import { useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import { api } from '../services/api'

function Login() {
  const { dispatch } = useAuth()
  const [correo, setCorreo] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function iniciarSesion(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const { usuario } = await api('/auth/login', {
        method: 'POST', body: JSON.stringify({ email: correo, password: contrasena }),
      })
      dispatch({ type: 'LOGIN', payload: usuario })
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="p-4 mx-auto" style={{ maxWidth: '500px' }}>
      <h2 className="text-center mb-4">Iniciar Sesión</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={iniciarSesion}>
        <Form.Group className="mb-3">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control type="email" required value={correo} onChange={(e) => setCorreo(e.target.value)} placeholder="correo@ejemplo.com" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" required value={contrasena} onChange={(e) => setContrasena(e.target.value)} placeholder="Contraseña" />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={loading}>{loading ? 'Validando…' : 'Iniciar Sesión'}</Button>
      </Form>
    </Card>
  )
}

export default Login
