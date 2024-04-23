import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function AppHeader (){
  return(
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>

        <Navbar.Brand href="#home">Creaciones Concretas 
        {/* <div className='logo-container'><img className='logo-img' src={require('../assets/images/logo.jpg')}/> <p>Creaciones Concretas</p></div> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#about">Nosotros</Nav.Link>
            <Nav.Link href="#services">Servicios</Nav.Link>
            <Nav.Link href="#works">Trabajos</Nav.Link>
            {/* <Nav.Link href="#teams">Equipo</Nav.Link> */}
            <Nav.Link href="#testimonials">Testimonios</Nav.Link>
            {/* <Nav.Link href="#pricing">Cotizaciones</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link> */}
            <Nav.Link href="#contact">Contactenos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}