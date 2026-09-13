import { useState } from 'react'

function Actividades() {

  const [buscar, setBuscar] = useState('')

  const actividades = [
    'Nadar en las pozas naturales.',
    'Realizar caminatas por senderos ecológicos.',
    'Visitar el mirador de Semuc Champey.',
    'Tomar fotografías de los paisajes.',
    'Observar la flora y fauna.',
    'Explorar las cuevas de Lanquín.',
    'Disfrutar áreas de descanso.',
    'Conocer la gastronomía local.'
  ]

  const actividadesFiltradas = actividades.filter((actividad) =>
    actividad.toLowerCase().includes(buscar.toLowerCase())
  )

  return (
    <section>

      <h2>Actividades</h2>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Buscar actividad"
        value={buscar}
        onChange={(e) => setBuscar(e.target.value)}
      />

      <ul>
        {actividadesFiltradas.map((actividad, index) => (
          <li key={index}>
            {actividad}
          </li>
        ))}
      </ul>

    </section>
  )
}

export default Actividades