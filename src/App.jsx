import Galeria from './components/Galeria'
import Calculadora from './components/Calculadora'
import Actividades from './components/Actividades'
import Reservacion from './components/Reservacion'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {

  return (
    <div>

      <header className="bg-success text-white text-center p-4">

        <h1>
          Excursión a Semuc Champey
        </h1>

        <p>
          Descubre uno de los destinos naturales más impresionantes
          de Guatemala, famoso por sus pozas de agua cristalina
          y sus increíbles paisajes.
        </p>

      </header>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

        <div className="container">

          <a className="navbar-brand" href="#inicio">
            Semuc Champey
          </a>

          <div className="navbar-nav">

            <a className="nav-link" href="#inicio">
              Inicio
            </a>

            <a className="nav-link" href="#galeria">
              Galería
            </a>

            <a className="nav-link" href="#actividades">
              Actividades
            </a>

            <a className="nav-link" href="#cotizacion">
              Cotización
            </a>

            <a className="nav-link" href="#reservacion">
              Reservación
            </a>

            <a className="nav-link" href="#resenas">
              Reseñas
            </a>

          </div>

        </div>

      </nav>

      <main>

        <section
          id="inicio"
          className="container py-5"
        >

          <h2>
            Descripción del Lugar
          </h2>

          <p>
            Semuc Champey es un monumento natural ubicado en
            Lanquín, Alta Verapaz. Es reconocido por sus piscinas
            naturales de color turquesa formadas sobre un puente
            de piedra caliza y rodeadas de abundante vegetación.
          </p>

        </section>

        <div id="galeria">
          <Galeria />
        </div>

        <section
          className="container py-5"
          id="itinerario"
        >

          <h2>
            Tabla de Itinerario
          </h2>

          <div className="table-responsive">

            <table className="table table-bordered table-striped">

              <thead className="table-success">

                <tr>
                  <th>Fecha</th>
                  <th>Horario</th>
                  <th>Actividad</th>
                  <th>Lugar</th>
                </tr>

              </thead>

              <tbody>

                <tr>
                  <td>15/09/2026</td>
                  <td>06:00 a.m.</td>
                  <td>Salida desde Ciudad de Guatemala</td>
                  <td>Terminal de Buses</td>
                </tr>

                <tr>
                  <td>15/09/2026</td>
                  <td>12:30 p.m.</td>
                  <td>Almuerzo</td>
                  <td>Lanquín</td>
                </tr>

                <tr>
                  <td>15/09/2026</td>
                  <td>02:00 p.m.</td>
                  <td>Recorrido por Semuc Champey</td>
                  <td>Pozas Naturales</td>
                </tr>

                <tr>
                  <td>15/09/2026</td>
                  <td>04:30 p.m.</td>
                  <td>Visita al Mirador</td>
                  <td>Cerro Semuc Champey</td>
                </tr>

                <tr>
                  <td>15/09/2026</td>
                  <td>06:00 p.m.</td>
                  <td>Regreso al hospedaje</td>
                  <td>Lanquín</td>
                </tr>

              </tbody>

            </table>

          </div>

        </section>

        <div id="actividades">
          <Actividades />
        </div>

        <div id="cotizacion">
          <Calculadora />
        </div>

        <div id="reservacion">
          <Reservacion />
        </div>

        <div id="resenas">
          <Testimonials />
        </div>

      </main>

      <Footer />

    </div>
  )
}

export default App