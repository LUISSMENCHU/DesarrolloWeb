import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import { api } from '../services/api'
import Registro from './Registro'

function Login() {
  const { state, dispatch } = useAuth()
  const navigate = useNavigate()
  const [correo, setCorreo] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function iniciarSesion(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const { usuario, token } = await api('/auth/login', {
        method: 'POST', body: JSON.stringify({ email: correo, password: contrasena }),
      })
      localStorage.setItem('techstore_usuario', JSON.stringify(usuario))
      localStorage.setItem('techstore_token', token)
      dispatch({ type: 'LOGIN', payload: { usuario, token } })
      navigate('/')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="container py-5">
    <Card className="p-4 mx-auto mb-4" style={{ maxWidth: '500px' }}>
      <h2 className="text-center mb-4">Iniciar Sesión</h2>
      {state.expirationMessage && <Alert variant="warning">{state.expirationMessage}</Alert>}
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
    <Registro />
    </main>
  )
}

export default Login
