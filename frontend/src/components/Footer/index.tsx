import React from 'react'
import { Container, Hr, Group, Link, Logo } from './styles'

export const Footer = () => {
  return (
    <>
      <Container>
        <Hr />

        <Group>
          <a href="/">
            <Logo src={`${process.env.PUBLIC_URL}/assets/Image/logo.png`} />
          </a>
          <div>
            <Link href="#" target="#">
              Privacidade
            </Link>
            <Link href="#" target="_blank">
              Termos de uso
            </Link>
          </div>
        </Group>
      </Container>
    </>
  )
}
