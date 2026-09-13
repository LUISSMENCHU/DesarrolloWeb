import { useState } from 'react'

function Reservacion() {

  const [nombre, setNombre] = useState('')
  const [personas, setPersonas] = useState('')
  const [mensaje, setMensaje] = useState('')

  function enviarSolicitud(e) {

    e.preventDefault()

    if (nombre === '' || personas === '') {
      setMensaje('Debe completar todos los campos.')
      return
    }

    if (Number(personas) < 0) {
      setMensaje('El número de personas no puede ser negativo.')
      return
    }

    setMensaje(
      '¡Gracias ' + nombre +
      '! Su solicitud para ' +
      personas +
      ' personas fue registrada.'
    )
  }

  return (
    <section>

      <h2>Reservación</h2>

      <form onSubmit={enviarSolicitud}>

        <div className="mb-3">

          <label className="form-label">
            Nombre completo:
          </label>

          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

        </div>

        <div className="mb-3">

          <label className="form-label">
            Número de personas:
          </label>

          <input
            type="number"
            className="form-control"
            min="0"
            value={personas}
            onChange={(e) => setPersonas(e.target.value)}
          />

        </div>

        <button
          type="submit"
          className="btn btn-success"
        >
          Enviar Solicitud
        </button>

      </form>

      {mensaje !== '' && (
        <p className="mt-3">
          {mensaje}
        </p>
      )}

    </section>
  )
}

export default Reservacion