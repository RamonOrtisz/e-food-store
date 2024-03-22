import { Container, HeroConteiner } from './styles'

import HeroBanner from '../../assets/image/hero.png'

const Hero = () => {
  return (
    <HeroConteiner style={{ backgroundImage: `url(${HeroBanner})` }}>
      <Container className="container">
        <span>italiana</span>
        <h3>La Dolce Vita Trattoria</h3>
      </Container>
    </HeroConteiner>
  )
}

export default Hero
