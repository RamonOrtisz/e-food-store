import { Container, Content, Logo, TitleFood } from './styles'

import logo from '../../assets/image/logo.png'

const HeaderProduct = () => {
  return (
    <Container>
      <Content className="container">
        <TitleFood>Restaurantes</TitleFood>
        <Logo href="/">
          <img src={logo} alt="" />
        </Logo>
        <a href="">0 produtos </a>
      </Content>
    </Container>
  )
}

export default HeaderProduct
