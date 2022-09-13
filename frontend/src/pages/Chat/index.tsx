import React from 'react'
import {
  Container,
  Navbar,
  Options,
  Title,
  GroupSignUp,
  SignUp,
  Group,
  Body,
  Haader,
  Conversations,
  Message,
  InfoConversations,
  ProfileImage,
  MessageCurrent,
  Name,
  Date,
  AmountMessage,
  InfoMessage,
  InfoProfile,
} from './styles'

import { Footer } from '../../components/Footer'
import { Logo } from '../../components/Logo'
import { InstanceAttendance } from '../../components/InstanceAttendance'
export const Chat = () => {
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
          <Haader></Haader>
          <Group>
            <Conversations>
              <InfoConversations>
                <ProfileImage src="https://github.com/iLudolf.png" />
                <InfoProfile>
                  <Name>Israel Ludolf</Name>
                  <MessageCurrent>Text Message..</MessageCurrent>
                </InfoProfile>
                <InfoMessage>
                  <Date>09:00</Date>
                  <AmountMessage>5</AmountMessage>
                </InfoMessage>
              </InfoConversations>
            </Conversations>
            <Message></Message>
          </Group>
        </Body>
        <InstanceAttendance />
        <Footer />
      </Container>
    </>
  )
}
