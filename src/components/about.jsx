import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';

import img1 from '../assets/images/img1.jpg';

function AppAbout() {
  const itemUno = 100;
  const itemDos = 100;
  const itemTres= 100;

  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Nosotros</h2>
          <div className="subtitle">Conoce un poco mas de nosotros</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={img1} />
          </Col>
          <Col sm={6}> Somos una empresa de construcción y renovación de viviendas, oficinas, y negocios comerciales con experiencia, responsabilidad, cumplimiento y altos estándares de calidad para darle forma a las ideas de nuestros clientes entregándoles una realidad visual y palpable de su visión. 
            {/* <p> Somos una empresa de remodelaciones que ofrece servicios integrales para su casa, oficina o negocio, aportamos buenas ideas y brindamos soluciones construidas de manera excepcional para nuestros clientes a través de nuestra experiencia lograda con el desarrollo de grandes proyectos.   Convirtiéndonos así en una de las mejores opciones de remodelación y la mejor solución a sus necesidades.</p> */}<br/><br/><br/>
            <div className='progress-block'>
              <h4>Responsabilidad</h4>
              <ProgressBar now={itemUno} label={`${itemUno}%`} />
            </div>
            <div className='progress-block'>
              <h4>Cumplimiento</h4>
              <ProgressBar now={itemDos} label={`${itemDos}%`} />
            </div>
            <div className='progress-block'>
              <h4>Calidad</h4>
              <ProgressBar now={itemTres} label={`${itemTres}%`} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppAbout;