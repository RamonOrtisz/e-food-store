import styled from 'styled-components'

import Banner from '../../assets/image/banner.png'
import { colors } from '../../styles'

export const HeaderContainer = styled.div`
  background-image: url(${Banner});
  padding: 40px;
  text-align: center;
  margin-bottom: 80px;
`

export const HeaderText = styled.h2`
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  width: 540px;
  margin: 136px auto 0;
  color: ${colors.orange};
`
