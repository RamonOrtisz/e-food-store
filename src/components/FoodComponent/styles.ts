import { styled } from 'styled-components'
import { colors } from '../../styles'

export const FoodContainer = styled.div`
  background-color: ${colors.white};
  position: relative;
  max-width: 480px;
  width: 100%;
  color: ${colors.orange};

  > img {
    width: 100%;
    heigaht: 240px;
    max-height: 100%;
  }
`

export const TagContent = styled.div`
  position: absoluite;
  top: 16px;
  right: 16px;
`

export const InfosContainer = styled.div`
  padding: 8px;
  border: 1px solid ${colors.orange};
  border-top: none;

  p {
    line-height: 22px;
    margin-bottom: 32px;
  }
`

export const TitleContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
  font-size: 18px;
`

export const RatingContent = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`

export const LinkButton = styled.a`
  background-color: ${colors.orange};
  color: ${colors.white};
  cursor: pointer;
  padding: 4px 6px;
  text-decoration: none;
`
