import React from 'react'
import {
  Container,
  Navbar,
  Options,
  Title,
  GroupSignUp,
  SignUp,
  Group,
  Section,
  CardInfo,
  TitleCardInfo,
  DescriptionCardInfo,
  Person,
  Card,
  Body,
} from './styles'

import { Footer } from '../../components/Footer'
import { Logo } from '../../components/Logo'
import { InstanceAttendance } from '../../components/InstanceAttendance'
export const Home = () => {
  return (
    <>
      <Container>
        <Navbar>
          <Logo />
          <div>
            <Options>
              <Title href="/#">A Empresa</Title>
            </Options>

            <Options>
              <Title href="/#">Serviços</Title>
            </Options>

            <Options>
              <Title href="/#">Blog</Title>
            </Options>

            <Options>
              <Title href="/#">Vagas</Title>
            </Options>

            <Options>
              <Title href="/#">Portfólio</Title>
            </Options>

            <Options>
              <Title href="/#">Parceiros</Title>
            </Options>
          </div>

          <Group>
            <GroupSignUp to="/account.login">
              <SignUp>Painel do Gestor</SignUp>
            </GroupSignUp>
          </Group>
        </Navbar>
        <Body>
          <Section>
            <Card>
              <CardInfo>
                <TitleCardInfo>Sistema de atendimento</TitleCardInfo>
                <DescriptionCardInfo>
                  Mande uma mensagem em nossos canais de atendimento e iremos
                  responder o mais rápido possível.
                </DescriptionCardInfo>
              </CardInfo>
              <Person src="./assets/Image/qa.png" />
            </Card>
          </Section>
        </Body>
      </Container>
      <InstanceAttendance />
      <Footer />
    </>
  )
}
