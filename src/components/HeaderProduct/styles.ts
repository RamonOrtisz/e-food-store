import styled from 'styled-components'
import banner from '../../assets/image/banner.png'
import { colors } from '../../styles'

export const Container = styled.div`
  background-image: url(${banner});
  padding-top: 35px;
  padding-bottom: 60px;
  color: ${colors.orange};
`
export const Content = styled.div`
  display: flex;
  font-size: 18px;
  align-items: center;
  justify-content: space-between;

  a {
    font-size: 18px;
    font-weight: bold;
    color: ${colors.orange};
  }
`
export const Logo = styled.a`
  text-decoration: none;
`
export const TitleFood = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
