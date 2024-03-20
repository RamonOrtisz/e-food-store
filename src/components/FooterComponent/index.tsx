import { Container, ListLink, LogoLink } from './styles'

import logo from '../../assets/image/logo.png'
import face from '../../assets/image/facebook.png'
import twi from '../../assets/image/twitter.png'
import insta from '../../assets/image/instagram.png'

const FooterComponent = () => (
  <Container>
    <div className="container">
      <LogoLink href="#">
        <img src={logo} alt="" />
      </LogoLink>
      <ListLink>
        <li>
          <a href="">
            <img src={face} alt="" />
          </a>
          <a href="">
            <img src={twi} alt="" />
          </a>
          <a href="">
            <img src={insta} alt="" />
          </a>
        </li>
      </ListLink>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
        estabelecimento contratado.{' '}
      </p>
    </div>
  </Container>
)

export default FooterComponent
