import React from 'react'
import Void from '../../components/Images/Void'
import { Container, Title, Button } from './styles'

export const NotFound = () => {
  document.title = 'Luvep | Not Found 404'

  return (
    <>
      <Container>
        <Title>404</Title>
        <Void
          title={'Página não encontrada'}
          descrpition={`A página que você procura não está disponível.`}
        />
        <Button href="/">Página Inicial</Button>
      </Container>
    </>
  )
}
