import React from 'react'
import {
  Container,
  Navbar,
  Options,
  Title,
  GroupSignUp,
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
import { Profile } from '../../components/Profile'
import { PortalLogoType } from '../../components/PortalLogoType'

export const Chat = () => {
  return (
    <>
      <Container>
        <Navbar>
          <PortalLogoType
            color={'#2058a4'}
            description={'Atendimentos'}
            url={'/dashboard'}
          />
          <div>
            <Options>
              <Title href="/">Página Inicial</Title>
            </Options>

            <Options>
              <Title href="/#">Workflow</Title>
            </Options>
          </div>

          <GroupSignUp to="#">
            <Profile
              name={String(localStorage.getItem('GLOBAL_SYS_STOREGE_USER'))}
              profile={String(
                localStorage.getItem('GLOBAL_SYS_STOREGE_PROFILE'),
              )}
              profileID={String(
                localStorage.getItem('GLOBAL_SYS_STOREGE_PROFILE_ID'),
              )}
              email={String(localStorage.getItem('GLOBAL_SYS_STOREGE_EMAIL'))}
            />
          </GroupSignUp>
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
        <Footer />
      </Container>
    </>
  )
}
