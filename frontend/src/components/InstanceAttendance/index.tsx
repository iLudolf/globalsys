import React from 'react'
import { Container, PropsColor, Button } from './styles'

interface Props extends PropsColor {}

export const InstanceAttendance = ({ colorIco }: Props) => {
  return (
    <Container>
      <Button>Precisa de ajuda?{'   '}</Button>
    </Container>
  )
}
