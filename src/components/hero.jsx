import Carousel from 'react-bootstrap/Carousel';
let heroData = [
  {
    id:1,
    image: require('../assets/images/img-hero1.jpg'),
    title:'El mejor servicio para su casa',
    description:'Aquí empieza un buen proyecto, te invitamos a que conozca nuestro trabajo. Nos especializamos en dar un servicio de calidad para satisfacer las necesidades de nuestros clientes.',
    link:"#works"

  },
  {
    id:2,
    image: require('../assets/images/img-hero2.jpg'),
    title:'Somos tu aliado para darle una mejor imagen a tu negocio',
    description:'Aquí empieza un buen proyecto, te invitamos a que conozca nuestro trabajo. Nos especializamos en dar un servicio de calidad para satisfacer las necesidades de nuestros clientes. ',
    link:"#works"

  },
  {
    id:3,
    image: require('../assets/images/img-hero3.jpg'),
    title:'El servicio perfecto para renovar oficinas',
    description:' Aquí empieza un buen proyecto, te invitamos a que conozca nuestro trabajo. Nos especializamos en dar un servicio de calidad para satisfacer las necesidades de nuestros clientes. ',
    link:"#works"

  }
]


function AppHero (){
  return(
     <section id='home' className='hero-block'>
      <Carousel>
        {
          heroData.map (hero => {
            return (
              <Carousel.Item key={hero.id}>
                <img 
                  className="d-block w-100"
                  src={hero.image}
                  alt={"Slide "+ hero.id}               
                />
              <Carousel.Caption>
                <h3>{hero.title}</h3>
                <p>{hero.description}</p>
                <a className='btn btn-primary' href={hero.link}>Learn More<i className="fas fa-chevron-right"></i></a>
              </Carousel.Caption>
            </Carousel.Item>

            )
          })
        }



    </Carousel>
     </section>
  )

}

export default AppHero;