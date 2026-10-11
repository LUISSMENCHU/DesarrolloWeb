import { useCallback, useEffect, useState } from 'react'
import { Alert, Badge, Button, Card, Form, Spinner } from 'react-bootstrap'
import { api } from '../services/api'

const initialForm = { nombre: '', categoria: '', descripcion: '', precio: '', stock: '' }

export default function Productos() {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [form, setForm] = useState(initialForm)
  const [editingId, setEditingId] = useState(null)
  const [saving, setSaving] = useState(false)

  const cargar = useCallback(async () => {
    setLoading(true)
    try {
      const data = await api('/recursos')
      setProductos(data.productos)
      setError('')
    } catch (err) { setError(err.message) } finally { setLoading(false) }
  }, [])

  useEffect(() => { cargar() }, [cargar])

  async function guardar(e) {
    e.preventDefault()
    setSaving(true)
    try {
      const payload = { ...form, precio: Number(form.precio), stock: Number(form.stock || 0) }
      await api(editingId ? `/recursos/${editingId}` : '/recursos', { method: editingId ? 'PUT' : 'POST', body: JSON.stringify(payload) })
      setForm(initialForm); setEditingId(null); await cargar()
    } catch (err) { setError(err.message) } finally { setSaving(false) }
  }

  function editar(producto) {
    setEditingId(producto._id)
    setForm({ nombre: producto.nombre, categoria: producto.categoria, descripcion: producto.descripcion || '', precio: producto.precio, stock: producto.stock || 0 })
  }

  async function eliminar(id) {
    try { await api(`/recursos/${id}`, { method: 'DELETE' }); await cargar() } catch (err) { setError(err.message) }
  }

  return <>
    <h2 className="text-center mb-4">Productos destacados</h2>
    {error && <Alert variant="danger" dismissible onClose={() => setError('')}>{error}</Alert>}
    {loading ? <div className="text-center py-4"><Spinner animation="border" role="status" /><span className="visually-hidden">Cargando productos…</span></div> : productos.length === 0 ? <Alert variant="info">Aún no hay productos. Puedes agregar el primero.</Alert> : <div className="row">
      {productos.map(producto => <div className="col-md-6 col-lg-3 mb-4" key={producto._id}>
        <Card className="h-100"><Card.Body>
          <Card.Title>{producto.nombre}</Card.Title><Card.Text>{producto.descripcion}</Card.Text>
          <p>Categoría: <Badge bg="secondary">{producto.categoria}</Badge></p>
          <Badge bg="success">Q{Number(producto.precio).toLocaleString('es-GT')}</Badge>
          <p className="mt-2 mb-0">Existencias: {producto.stock ?? 0}</p>
        </Card.Body><Card.Footer className="d-flex gap-2">
          <Button size="sm" variant="outline-primary" onClick={() => editar(producto)}>Editar</Button>
          <Button size="sm" variant="outline-danger" onClick={() => eliminar(producto._id)}>Eliminar</Button>
        </Card.Footer></Card>
      </div>)}
    </div>}
    <Card className="p-4 mt-3 mx-auto" style={{ maxWidth: 650 }}>
      <h3>{editingId ? 'Editar producto' : 'Agregar producto'}</h3>
      <Form onSubmit={guardar}>
        <Form.Group className="mb-3"><Form.Label>Nombre</Form.Label><Form.Control required value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })} /></Form.Group>
        <Form.Group className="mb-3"><Form.Label>Categoría</Form.Label><Form.Control required value={form.categoria} onChange={e => setForm({ ...form, categoria: e.target.value })} /></Form.Group>
        <Form.Group className="mb-3"><Form.Label>Descripción</Form.Label><Form.Control as="textarea" value={form.descripcion} onChange={e => setForm({ ...form, descripcion: e.target.value })} /></Form.Group>
        <div className="row"><Form.Group className="mb-3 col"><Form.Label>Precio (Q)</Form.Label><Form.Control required type="number" min="0" step="0.01" value={form.precio} onChange={e => setForm({ ...form, precio: e.target.value })} /></Form.Group>
        <Form.Group className="mb-3 col"><Form.Label>Existencias</Form.Label><Form.Control type="number" min="0" value={form.stock} onChange={e => setForm({ ...form, stock: e.target.value })} /></Form.Group></div>
        <Button type="submit" disabled={saving}>{saving ? 'Guardando…' : editingId ? 'Guardar cambios' : 'Crear producto'}</Button>{editingId && <Button className="ms-2" variant="secondary" onClick={() => { setEditingId(null); setForm(initialForm) }}>Cancelar</Button>}
      </Form>
    </Card>
  </>
}
