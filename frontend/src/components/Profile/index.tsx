import React, { useState, useRef, useEffect, useContext } from 'react'
import {
  Container,
  ImageIco,
  Modal,
  CardMessage,
  Name,
  ProfileIco,
  Group,
  Description,
  Mail,
  Button,
  ButtonGroup,
  Perfil,
} from './styles'
import { AuthContext } from '../../contexts/AuthContext'
import { convertUppercaseToLowercase } from '../../shared/utils/convertLowercaseToUppercase'
import { history } from '../../services/History'

interface Props {
  name: string
  profile: string
  profileID: string
  email: string
}

export const Profile = ({ profileID, name, profile, email }: Props) => {
  let isAdmin: boolean = false
  isAdmin = localStorage.getItem('GLOBAL_SYS_STOREGE_ISADMIN') === 'true'

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

  const node = useRef<HTMLInputElement>(null)
  const [open, setOpen] = useState(false)
  useOnClickOutside(node, () => setOpen(false))

  const { logout } = useContext(AuthContext)

  const handleGoOutAccount = () => {
    logout()
    window.location.reload()
  }

  const handleGoPrOfile = () => {
    history.push(`profile/${profileID}`)
    window.location.reload()
  }

  return (
    <>
      <Container onClick={() => setOpen(!open)} ref={node}>
        <ImageIco src={profile} />
        <Modal status={open}>
          <CardMessage>
            <ProfileIco src={profile} />
            <Group>
              <Name>{convertUppercaseToLowercase(name)}</Name>
              {isAdmin && <Description>Administrador</Description>}
              <Mail>{email}</Mail>
            </Group>
          </CardMessage>

          <ButtonGroup>
            <Perfil onClick={handleGoPrOfile}>Perfil</Perfil>

            <Button onClick={handleGoOutAccount}>Sair</Button>
          </ButtonGroup>
        </Modal>
      </Container>
    </>
  )
}
