import logo from '../../assets/image/logo.png'
import { HeaderContainer, HeaderText } from './styles'

const HeaderComponent = () => {
  return (
    <HeaderContainer>
      <div className="container">
        <img src={logo} alt="logo" />
      </div>
      <HeaderText>
        Viva experiências gastronômicas no conforto da sua casa
      </HeaderText>
    </HeaderContainer>
  )
}

export default HeaderComponent
