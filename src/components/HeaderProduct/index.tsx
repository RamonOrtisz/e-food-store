import { Container, Content, Logo, TitleFood } from './styles'

import logo from '../../assets/image/logo.png'

const HeaderProduct = () => {
  return (
    <Container>
      <Content>
        <TitleFood>Restaurantes</TitleFood>
        <Logo href="">
          <img src={logo} alt="" />
        </Logo>
        <a href="">o produtos no carrinho</a>
      </Content>
    </Container>
  )
}

export default HeaderProduct
