const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'

export async function api(path, options = {}) {
  const headers = new Headers(options.headers || {})
  if (!headers.has('Content-Type')) headers.set('Content-Type', 'application/json')

  const token = localStorage.getItem('techstore_token')
  if (token && !headers.has('Authorization')) headers.set('Authorization', `Bearer ${token}`)

  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers,
  })
  const data = await response.json().catch(() => ({}))
  if (response.status === 401 && data.error === 'token_expired') {
    const message = 'La sesión ha expirado o ya no es válida. Por favor, inicie sesión nuevamente.'
    window.dispatchEvent(new CustomEvent('techstore:token-expired', { detail: { message } }))
    throw new Error(message)
  }
  if (!response.ok) throw new Error(data.message || 'No se pudo completar la solicitud.')
  return data
}
