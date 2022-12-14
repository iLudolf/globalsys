import React from 'react'
import { Container, Group, VerticalBar, Description, Element } from './styles'
import { Logo } from '../../Logo'

export const ModalLoading = () => {
  return (
    <>
      <Container>
        <Group>
          <Element>
            <Logo />
            <VerticalBar color={'#0071bd'} />
            <Description>Plataforma de Atendimento Globalsys</Description>
          </Element>
        </Group>
      </Container>
    </>
  )
}
