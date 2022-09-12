import styled, { keyframes } from 'styled-components'
import { Gear } from 'phosphor-react'

export interface PropsColor {
  width?: string
  height?: string
  colorOne?: string
  colorTwo?: string
  colorThree?: string
  colorIco?: string
}

const myAnin = keyframes`
0% {
		transform: rotate(0);
	}

	100% {
		transform: rotate(360deg);
	}
`

export const Container = styled.div<PropsColor>`
  min-width: 200px;
  display: flex;
  flex-direction: row;
`

export const PlayIco = styled(Gear).attrs({
  weight: 'fill',
})<PropsColor>`
  color: ${({ colorIco }) => colorIco};
  width: 40px;
  height: 40px;
  margin-left: 95px;
  z-index: 2;
  animation: ${myAnin} 1s;
`
