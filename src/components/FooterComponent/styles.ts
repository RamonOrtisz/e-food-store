import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  margin-top: 120px;
  height: 298px;
  background: ${colors.lightOrange};

  p {
    display: flex;
    text-align: center;
    justify-content: center;
    margin: 0 auto;
    font-size: 10px;
    color: ${colors.orange};
  }
`
export const LogoLink = styled.a`
  display: flex;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 30px;
`
export const ListLink = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding-bottom: 80px;

  a {
    margin-right: 8px;
  }
`
