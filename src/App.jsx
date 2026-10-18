import Footer from './components/Footer'
import Login from './components/Login'
import Perfil from './components/Perfil'
import { useAuth } from './context/AuthContext'
import Productos from './components/Productos'
import Registro from './components/Registro'

function App() {
  const { state } = useAuth()

  return (
    <div>
      <header className="container py-5 text-center" id="inicio">
        <h1>Bienvenido a TechStore</h1>
        <p>Productos disponibles desde nuestro catálogo.</p>
      </header>

      <main>
        <section id="productos" className="container py-4">
          <Productos />
        </section>

        <section id="contacto" className="container py-5">
          <h2>Contacto</h2>
          <form onSubmit={(event) => event.preventDefault()}>
            <div className="mb-3">
              <label className="form-label" htmlFor="contact-name">Nombre</label>
              <input id="contact-name" type="text" className="form-control" placeholder="Ingrese su nombre" />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="contact-email">Correo electrónico</label>
              <input id="contact-email" type="email" className="form-control" placeholder="correo@ejemplo.com" />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="contact-message">Mensaje</label>
              <textarea id="contact-message" className="form-control" rows="4" />
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
          </form>
        </section>

        <section id="registro" className="container py-4"><Registro /></section>
        {!state.isAuthenticated && <section id="login" className="container py-5"><Login /></section>}
        <section id="perfil" className="container py-5"><Perfil /></section>
      </main>
      <Footer />
    </div>
  )
}

export default App
