import { useState } from 'react'

function Testimonials() {

  const nombres = [
    'Ana Gómez',
    'Carlos López',
    'María Pérez',
    'José Ramírez',
    'Sofía Morales'
  ]

  const comentarios = [
    'Una experiencia inolvidable.',
    'Las pozas son muy bonitas.',
    'Excelente atención durante el recorrido.',
    'Recomiendo visitar el mirador.',
    'Volvería nuevamente con mi familia.'
  ]

  const [numero, setNumero] = useState(0)

  function cambiarOpinion() {

    if (numero === nombres.length - 1) {
      setNumero(0)
    } else {
      setNumero(numero + 1)
    }

  }

  return (
    <section>

      <h2>Opiniones de Visitantes</h2>

      <div className="card">

        <div className="card-body">

          <h5 className="card-title">
            {nombres[numero]}
          </h5>

          <p className="card-text">
            {comentarios[numero]}
          </p>

          <button
            className="btn btn-primary"
            onClick={cambiarOpinion}
          >
            Ver otra opinión
          </button>

        </div>

      </div>

    </section>
  )
}

export default Testimonials