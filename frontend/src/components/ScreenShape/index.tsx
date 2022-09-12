import React from 'react'
import {
  Container,
  CircleOne,
  CircleTwo,
  CircleThree,
  PlayIco,
  PropsColor,
} from './styles'

interface Props extends PropsColor {}

export const ScreenShape = ({
  width,
  height,
  colorOne,
  colorTwo,
  colorThree,
  colorIco,
}: Props) => {
  return (
    <Container>
      <PlayIco colorIco={colorIco} />

      <CircleThree colorThree={colorThree} />
      <CircleTwo colorTwo={colorTwo} />
      <CircleOne colorOne={colorOne} />
    </Container>
  )
}
