import React from 'react'
import {
  Container,
  ContainerLogo,
  GroupLog,
  Description,
  VerticalBar,
} from './styles'

import { Logo } from '../../Logo'

export const PageLoader = () => {
  return (
    <>
      <Container>
        <ContainerLogo>
          <GroupLog>
            <Logo />
            <VerticalBar color={'#2058a4'} />
            <Description>Carregando informações</Description>
          </GroupLog>
        </ContainerLogo>
      </Container>
    </>
  )
}
