import Carousel from 'react-bootstrap/Carousel'

function Carrusel() {
  return (
    <Carousel>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/imagenes/laptop.jpg"
          alt="Laptop Dell Inspiron"
        />

        <Carousel.Caption>
          <h3>Laptop Dell Inspiron</h3>
          <p>Equipo ideal para estudio y trabajo.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/imagenes/celular.jpg"
          alt="Samsung Galaxy A56"
        />

        <Carousel.Caption>
          <h3>Samsung Galaxy A56</h3>
          <p>Conoce nuestros modelos de celulares.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/imagenes/accesorios.jpg"
          alt="Accesorios tecnológicos"
        />

        <Carousel.Caption>
          <h3>Accesorios</h3>
          <p>Complementa tus dispositivos tecnológicos.</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  )
}

export default Carrusel