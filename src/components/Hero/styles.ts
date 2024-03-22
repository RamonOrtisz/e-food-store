import styled from 'styled-components'
import { colors } from '../../styles'

export const HeroConteiner = styled.div`
  height: 280px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  color: ${colors.white};
  width: 100%;
  position: relative;
  margin-bottom: 56px;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    content: '';
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 145px;
  padding-top: 25px;
  font-size: 32px;

  span {
    font-weight: 100;
    z-index: 1;
  }

  h3 {
    z-index: 1;
  }
`
