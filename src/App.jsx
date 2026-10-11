import Menu from './components/Navbar'
import Carrusel from './components/Carousel'
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


        {/* LAPTOPS */}
        <section id="laptops" className="container py-5">

  <h2>Laptops</h2>

  <p>
    Conoce las características de nuestros equipos.
  </p>

  <div className="table-responsive">

    <table className="table table-bordered table-striped">

      <thead className="table-dark">

        <tr>
          <th>Producto</th>
          <th>Procesador</th>
          <th>RAM</th>
          <th>Almacenamiento</th>
          <th>Precio</th>
        </tr>

      </thead>

      <tbody>

        <tr>
          <td>Dell Inspiron</td>
          <td>Intel Core i5</td>
          <td>8 GB</td>
          <td>512 GB SSD</td>
          <td>Q5,500</td>
        </tr>

        <tr>
          <td>HP Pavilion</td>
          <td>Intel Core i5</td>
          <td>8 GB</td>
          <td>512 GB SSD</td>
          <td>Q5,800</td>
        </tr>

      </tbody>

    </table>

  </div>

</section>
        {/* CELULARES */}
        <section id="celulares" className="container py-5">

          <h2>Celulares</h2>

          <div className="card">

            <div className="card-body">

              <h5>Samsung Galaxy A56</h5>

              <p>
                Smartphone para comunicación,
                entretenimiento y uso diario.
              </p>

              <ul>
                <li>Pantalla AMOLED</li>
                <li>Cámara de alta resolución</li>
                <li>Almacenamiento amplio</li>
              </ul>

              <span className="badge bg-primary">
                Q3,200
              </span>

            </div>

          </div>

        </section>


        {/* ACCESORIOS */}
        <section id="accesorios" className="container py-5">

          <h2>Accesorios</h2>

          <div className="row">

            <div className="col-md-6 mb-3">

              <div className="card">

                <div className="card-body">

                  <h5>Mouse Logitech M90</h5>

                  <p>
                    Mouse óptico para uso diario.
                  </p>

                  <span className="badge bg-success">
                    Q90
                  </span>

                </div>

              </div>

            </div>


            <div className="col-md-6 mb-3">

              <div className="card">

                <div className="card-body">

                  <h5>Teclado Mecánico</h5>

                  <p>
                    Teclado para trabajo y entretenimiento.
                  </p>

                  <span className="badge bg-success">
                    Q350
                  </span>

                </div>

              </div>

            </div>

          </div>

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
          {/* REGISTRO */}
        <section id="registro" className="container py-4">
          <Registro />
        </section>
        </section>
                            {/* LOGIN */}
        {!state.isAuthenticated && (
          <section id="login" className="container py-5">

            <Login />

        </section>
        )}

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
