import styled from 'styled-components'
import { colors } from '../../styles'

export const FoodContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  color: ${colors.white};
  gap: 32px;

  li {
    background-color: ${colors.orange};
    width: 320px;

    > img {
      width: 100%;
      height: 167px;
      max-height: 100%;
      padding: 8px;
    }
  }
`

export const ProductContainer = styled.div`
  padding-left: 8px;

  p {
    width: 304px;
    height: 88px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin-bottom: 4px;
  }
`
export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`
export const ButtonCart = styled.button`
  width: 304px;
  height: 24px;
  top: 804px;
  left: 179px;
  gap: 0px;
  opacity: 0px;
  margin-bottom: 8px;
  color: ${colors.orange};
  background-color: ${colors.matte};
  border: none;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`

export const Modal = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.7;
  }
`

export const ContainerModal = styled.div`
  z-index: 1;
  width: 1024px;
  padding: 32px;
  background-color: ${colors.orange};
  display: flex;
  color: ${colors.white};
  gap: 24px;

  > div {
    img {
      width: 240px;
      height: 240px;
    }
  }
`

export const ContentModal = styled.div`
  h2 {
    margin-bottom: 16px;
    font-size: 18px;
  }

  p,
  span {
    font-size: 14px;
  }

  span {
    margin: 20px 0;
    display: block;
  }
`

export const TitleClose = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    max-width: 16px;
    max-height: 16px;
    cursor: pointer;
  }
`
