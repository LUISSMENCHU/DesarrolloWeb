import { useState } from 'react'

function Calculadora() {

  const [personas, setPersonas] = useState(1)
  const [paquete, setPaquete] = useState(150)
  const [transporte, setTransporte] = useState(false)
  const [alimentacion, setAlimentacion] = useState(false)

  let total = personas * paquete

  if (transporte) {
    total = total + personas * 50
  }

  if (alimentacion) {
    total = total + personas * 75
  }

  return (
    <section>

      <h2>Cotización de la Excursión</h2>

      <div className="mb-3">
        <label className="form-label">
          Número de asistentes:
        </label>

        <input
          type="number"
          className="form-control"
          min="0"
          value={personas}
          onChange={(e) => setPersonas(Number(e.target.value))}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          Tipo de paquete:
        </label>

        <select
          className="form-select"
          value={paquete}
          onChange={(e) => setPaquete(Number(e.target.value))}
        >
          <option value="150">Básico - Q150</option>
          <option value="250">Completo - Q250</option>
          <option value="350">Premium - Q350</option>
        </select>
      </div>

      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          checked={transporte}
          onChange={(e) => setTransporte(e.target.checked)}
        />

        <label className="form-check-label">
          Transporte (+Q50 por persona)
        </label>
      </div>

      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          checked={alimentacion}
          onChange={(e) => setAlimentacion(e.target.checked)}
        />

        <label className="form-check-label">
          Alimentación completa (+Q75 por persona)
        </label>
      </div>

      <h3 className="mt-4">
        Total: Q{total}
      </h3>

    </section>
  )
}

export default Calculadora