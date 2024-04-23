import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Pagination from 'react-bootstrap/Pagination';

const worksData = [
  {
    id: 1,
    link: '#works',
    image: require('../assets/images/img2.jpg'),
    title: 'Antes',
    subtitle: 'Arreglamos tus decks'
  },
  {
    id: 2,
    link: '#works',
    image: require('../assets/images/img3.jpg'),
    title: 'Después',
    subtitle: 'Reparacion '
  },
  {
    id: 3,
    link: '#works',
    image: require('../assets/images/img4.jpg'),
    title: 'Antes',
    subtitle: 'remodelación'
  },
  {
    id: 4,
    link: '#works',
    image: require('../assets/images/img5.jpg'),
    title: 'Después',
    subtitle: 'remodelación completa'
  },
  {
    id: 5,
    link: '#works',
    image: require('../assets/images/img6.jpg'),
    title: 'Reparaciones',
    subtitle: 'Reparamos sus espacios'
  },
  {
    id: 6,
    link: '#works',
    image: require('../assets/images/img7.jpg'),
    title: 'Pintura',
    subtitle: 'Exelentes acabados'
  },
  {
    id: 7,
    link: '#works',
    image: require('../assets/images/img8.jpg'),
    title: 'Construcción interior',
    subtitle: 'vivienda renovada'
  },
  {
    id: 8,
    link: '#works',
    image: require('../assets/images/img9.jpg'),
    title: 'Pintura interior',
    subtitle: 'pintamos tus espacios'
  },
  {
    id: 9,
    link: '#works',
    image: require('../assets/images/img10.jpg'),
    title: 'Renovación cocinas',
    subtitle: 'cocinas expectaculares'
  }
]

let active = 1;
let items = [];
for (let number = 1; number <= 3; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

function AppWorks() {
  return (
    <section id="works" className="block works-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Trabajos</h2>
          <div className="subtitle">Algunos trabajos</div>
        </div>
        <Row className='portfoliolist'>
          {
            worksData.map(works => {
              return (
                <Col sm={4} key={works.id}>
                  <div className='portfolio-wrapper'>
                    <a href={works.link}>
                      <Image src={works.image} />
                      <div className='label text-center'>
                        <h3>{works.title}</h3>
                        <p>{works.subtitle}</p>
                      </div>
                    </a>
                  </div>
                </Col>
              );
            })
          }
        </Row>
        <Pagination>{items}</Pagination>
      </Container>  
    </section>
  );
}

export default AppWorks;