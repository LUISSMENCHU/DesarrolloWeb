import { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Menu from './components/Navbar'
import Carrusel from './components/Carousel'
import Footer from './components/Footer'
import Login from './components/Login'
import Perfil from './components/Perfil'
import { useAuth } from './context/AuthContext'
import Productos from './components/Productos'

function App() {
    const { state } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
      if (state.expirationMessage) navigate('/login')
    }, [state.expirationMessage, navigate])

    useEffect(() => {
      if (state.isAuthenticated && window.location.pathname === '/login') navigate('/')
    }, [state.isAuthenticated, navigate])

    return (
      <Routes>
        <Route path="/login" element={state.isAuthenticated ? <TechStore state={state} /> : <Login />} />
        <Route path="*" element={state.isAuthenticated ? <TechStore state={state} /> : <Login />} />
      </Routes>
    )
}

function TechStore({ state }) {
  return (
    <div>

      <Menu />

      <main>

        {/* INICIO */}
        <section id="inicio" className="container py-5">

          <h1 className="text-center">
            Bienvenido a TechStore
          </h1>

          <p className="text-center">
            Tu tienda en línea de productos tecnológicos.
          </p>

          <Carrusel />

        </section>


        {/* PRODUCTOS */}
        <section id="productos" className="container py-5">

          <h2 className="text-center mb-4">
            Productos destacados
          </h2>

          <Productos />

        </section>

        {/* CONTACTO */}
        <section id="contacto" className="container py-5">

          <h2>Contacto</h2>

          <form>

            <div className="mb-3">

              <label className="form-label">
                Nombre
              </label>

              <input
                type="text"
                className="form-control"
                placeholder="Ingrese su nombre"
              />

            </div>

            <div className="mb-3">

              <label className="form-label">
                Correo electrónico
              </label>

              <input
                type="email"
                className="form-control"
                placeholder="correo@ejemplo.com"
              />

            </div>

            <div className="mb-3">

              <label className="form-label">
                Mensaje
              </label>

              <textarea
                className="form-control"
                rows="4"
              ></textarea>

            </div>

            <button
              type="submit"
              className="btn btn-primary"
            >
              Enviar
            </button>

          </form>
        </section>

        {/* PERFIL */}
        <section id="perfil" className="container py-5">

          <Perfil />

        </section>
      </main>
    <Footer />
    </div>
  )
}

export default App
