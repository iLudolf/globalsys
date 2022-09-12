import React from 'react'
import { Container, PlayIco, PropsColor } from './styles'

interface Props extends PropsColor {}

export const IcoStart = ({ colorIco }: Props) => {
  return (
    <Container>
      <PlayIco colorIco={colorIco} />
    </Container>
  )
}
