import React, { useState, useEffect, useRef } from 'react'

import {
  Container,
  Navbar,
  VerticalBar,
  GroupLog,
  Description,
  Options,
  Title,
  GroupButton,
  GroupSignUp,
  Profile,
  Group,
  InputSearch,
  ModalSearch,
  HeaderImage,
  Section,
  SectionLeft,
  GroupProfile,
  SectionRight,
  Body,
  ImagemProfile,
  Name,
  Hr,
  Status,
  Header,
  TitleInfoProfile,
  IcoPencilSimple,
  DescripitionIsVoid,
  DescripitionIsVoidText,
} from './styles'

import { Logo } from '../../components/Logo'
import { Notifications } from '../../components/Notifications'
import { Search } from '../../components/Search'

export const Me = () => {
  const useOnClickOutside = (ref: any, handler: any) => {
    useEffect(() => {
      const listener = (event: any) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return
        }
        handler(event)
      }
      document.addEventListener('mousedown', listener)
      return () => {
        document.removeEventListener('mousedown', listener)
      }
    }, [ref, handler])
  }

  const [openSearch, setOpenSearch] = useState<boolean>(false)
  const [openText, setOpenText] = useState<string>('')

  const handleSearch = () => {
    setOpenSearch(!openSearch)
  }
  const node = useRef<HTMLInputElement>(null)
  useOnClickOutside(node, () => setOpenSearch(false))

  return (
    <Container>
      <Navbar ref={node}>
        <GroupLog>
          <Logo />
          <VerticalBar color={'white'} />
          <Description>Minha conta</Description>
        </GroupLog>
        {!openSearch && (
          <div>
            <Options>
              <Title href="/labs">Página Inicial</Title>
            </Options>
            <Options>
              <Title href="/learning">E-learning</Title>
            </Options>

            <Options>
              <Title href="/overview">Overview</Title>
            </Options>
          </div>
        )}

        <Group>
          <GroupButton>
            {openSearch && (
              <>
                <InputSearch
                  onChange={(e) => setOpenText(e.target.value)}
                  placeholder="Pesquisar"
                />
                <ModalSearch status={openText.length > 4} />
              </>
            )}

            {!openSearch && <Search handleSearch={handleSearch} />}

            <Notifications />
          </GroupButton>

          <GroupSignUp to="#">
            <Profile src="https://github.com/iLudolf.png" />
          </GroupSignUp>
        </Group>
      </Navbar>

      <HeaderImage />

      <Section>
        <SectionLeft>
          <GroupProfile>
            <ImagemProfile src="https://github.com/iLudolf.png" />
            <Name>Israel Ludolf</Name>
            <Hr />
            <Status>MEMBRO DESDE: OUTUBRO, 2020</Status>
          </GroupProfile>
        </SectionLeft>
        <SectionRight>
          <Body>
            <Header>
              <TitleInfoProfile>Sobre mim</TitleInfoProfile>
              <IcoPencilSimple />
            </Header>
            <DescripitionIsVoid>
              <DescripitionIsVoidText>
                Clique aqui para adicionar Informações sobre você
              </DescripitionIsVoidText>
            </DescripitionIsVoid>
          </Body>
        </SectionRight>
      </Section>
    </Container>
  )
}
