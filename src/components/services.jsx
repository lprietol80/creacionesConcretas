import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const servicesData = [
  {
    id: 1,
    icon: 'fas fa-clone',
    title: 'Renovación de cocinas',
    description: 'Desmontar su antigua cocina, la demolición implica retirar electrodomésticos, gabinetes y accesorios viejos para tener espacio para reconstruir. En algunos casos podría implicar que sea necesario la eliminación de la pared o parte de la misma.'
  },
  {
    id: 2,
    icon: 'fas fa-snowflake',
    title: 'Renovación de baños',
    description: 'Desconectamos y retiramos el sanitario, para proceder con la demolición de los paneles de yesos y cualquier accesorio que esté, reemplazando, aprovechando los espacios y reorganizándolos.'
  },
  {
    id: 3,
    icon: 'fas fa-plug',
    title: 'Ampliación de casas',
    description: 'Hacemos extensión física de las viviendas de manera horizontal y vertical con el fin de incorporar nuevas áreas cerradas a la vivienda.'
  },
  {
    id: 4,
    icon: 'fas fa-desktop',
    title: 'Espacios diáfanos',
    description: 'Analizamos e identificamos paredes u obstáculos divisorios que impidan la circulación de la luz al interior de la vivienda buscando que los espacios del interior se vean mas amplios y llenos de luz natural.'
  },
  {
    id: 5,
    icon: 'fas fa-trophy',
    title: 'Arreglo de interiores',
    description: 'Tomamos las ideas de nuestros clientes para hacer realidad de cambiar el propósito de sus espacios. Podríamos ayudarte a convertir una habitación en oficina o un estudio en una sala de televisión.'
  },
  {
    id: 6,
    icon: 'fas fa-life-ring',
    title: '!Y muchos mas servicios!',
    description: 'Remodelación en general, creamos o arreglamos sus decks, tambien hacemos trabajos de pintura en general.  Mejoramos sus espacios para que los disfrutes con tus amigos y familiares.'
  }
]

function AppServices() {
  return (
    <section id="services" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Nuestros servicios</h2>
          <div className="subtitle">Servicios que brindamos</div>
        </div>
        <Row>
          {
            servicesData.map(services => {
              return (
                <Col sm={4} className='holder' key={services.id}>
                  <div className="icon">
                    <i className={services.icon}></i>
                  </div>
                  <h3>{services.title}</h3>
                  <p>{services.description}</p>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </section>
  );
}

export default AppServices;