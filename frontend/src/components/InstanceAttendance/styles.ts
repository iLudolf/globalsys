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

export const Container = styled.div<PropsColor>``

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
export const Button = styled.div`
  position: fixed;
  bottom: 15%;
  right: 100px;
  min-width: 200px;
  flex-direction: row;
  display: flex;

  background-color: ${({ theme }) => theme.backgroundInfo};
  text-decoration: none;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  border-radius: 100%;

  background-color: #287add;
  padding: 25px;
  padding-left: 20px;
  padding-right: 20px;
  border: 1px solid #2c7cdd;
  border-radius: 5px;
  margin-left: 10px;
  border-radius: 9999px;
  font-size: 18px;
  align-items: center;
  cursor: pointer;
`
