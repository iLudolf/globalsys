import styled, { keyframes } from 'styled-components'
import { Play } from 'phosphor-react'

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

export const CircleOne = styled.div<PropsColor>`
  position: absolute;
  opacity: 0.5;
  width: 80px;
  height: 80px;
  background-color: ${({ colorOne }) => colorOne};
  border-radius: 100%;
  margin-left: 100px;
`

export const CircleTwo = styled.div<PropsColor>`
  position: absolute;
  opacity: 0.5;
  width: 80px;
  height: 80px;
  background-color: ${({ colorTwo }) => colorTwo};
  border-radius: 100%;
  margin-left: 90px;
`

export const CircleThree = styled.div<PropsColor>`
  position: absolute;
  opacity: 0.5;
  width: 80px;
  height: 80px;
  background-color: ${({ colorThree }) => colorThree};
  border-radius: 100%;
  margin-left: 80px;
`

export const PlayIco = styled(Play).attrs({
  weight: 'fill',
})<PropsColor>`
  color: ${({ colorIco }) => colorIco};
  width: 50px;
  height: 50px;
  margin-left: 95px;
  z-index: 2;
  padding: 15px;

  animation: ${myAnin} 1s;
`
