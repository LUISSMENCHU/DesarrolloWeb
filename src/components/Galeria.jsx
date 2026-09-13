import { useState } from 'react'

function Galeria() {

  const [imagenSeleccionada, setImagenSeleccionada] = useState(null)

  const imagenes = [
    {
      imagen: '/imagenes/semuc1.jpg',
      titulo: 'Vista panorámica',
      descripcion: 'Vista panorámica de Semuc Champey.'
    },
    {
      imagen: '/imagenes/semuc2.jpg',
      titulo: 'Pozas naturales',
      descripcion: 'Pozas naturales de agua cristalina.'
    },
    {
      imagen: '/imagenes/semuc3.jpg',
      titulo: 'Paisaje natural',
      descripcion: 'Paisaje natural de Semuc Champey.'
    },
    {
      imagen: '/imagenes/semuc4.jpg',
      titulo: 'Mirador',
      descripcion: 'Vista desde el mirador de Semuc Champey.'
    }
  ]

  return (
    <section>
      <h2>Galería de Imágenes</h2>

      <div className="row">

        {imagenes.map((imagen, index) => (
          <div className="col-md-6 mb-3" key={index}>

            <img
              src={imagen.imagen}
              alt={imagen.titulo}
              className="img-fluid rounded"
              onClick={() => setImagenSeleccionada(imagen)}
              style={{ cursor: 'pointer' }}
            />

          </div>
        ))}

      </div>

      {imagenSeleccionada && (

        <div className="modal d-block">

          <div className="modal-dialog modal-lg">

            <div className="modal-content">

              <div className="modal-header">

                <h5 className="modal-title">
                  {imagenSeleccionada.titulo}
                </h5>

                <button
                  className="btn-close"
                  onClick={() => setImagenSeleccionada(null)}
                ></button>

              </div>

              <div className="modal-body text-center">

                <img
                  src={imagenSeleccionada.imagen}
                  alt={imagenSeleccionada.titulo}
                  className="img-fluid"
                />

                <p className="mt-3">
                  {imagenSeleccionada.descripcion}
                </p>

              </div>

            </div>

          </div>

        </div>

      )}

    </section>
  )
}

export default Galeria