import React, { useState, useEffect, useContext } from 'react'

import {
  Container,
  Navbar,
  Options,
  Title,
  GroupButton,
  GroupSignUp,
  Group,
  Section,
  Menu,
  Space,
  Main,
  Element,
  GenericSectionElement,
} from './styles'

import { Notifications } from '../../components/Notifications'
import { PortalLogoType } from '../../components/PortalLogoType'
import { IAccount, TableListAccounts } from '../../components/TableListAccounts'
import { api } from '../../services/api'
import { ModalNewAccount } from '../../components/Modal/ModalNewAccount'
import { history } from '../../services/History'
import { Profile } from '../../components/Profile'
import { ModalLoading } from '../../components/Modal/ModalLoading'
import { AuthContext } from '../../contexts/AuthContext'
import { AxiosError } from 'axios'

interface IItemSelect {
  id: string
  label: 'Conta' | 'infoSistem'
}

export const Administration = () => {
  const { logout } = useContext(AuthContext)
  const isAdmin = localStorage.getItem('GLOBAL_SYS_STOREGE_ISADMIN') === 'true'

  const [itemSelect, setItemSelect] = useState<IItemSelect>({
    id: 'conta',
    label: 'Conta',
  })

  const [spinner, setSpinner] = useState<boolean>(false)
  const [accounts, setAccounts] = useState<IAccount[]>([])

  useEffect(() => {
    if (!isAdmin) {
      console.log(isAdmin)
      history.push('/dashboard')
      window.location.reload()
    }

    onLoadginAccounts()
  }, [isAdmin])

  const onLoadginAccounts = async () => {
    try {
      setSpinner(true)
      const response = await api.get(`/accounts`, {
        headers: {
          Authorization: localStorage.GLOBAL_SYS_STOREGE_KEY,
        },
      })

      const { error } = response.data
      const { message } = response.data

      if (!error) {
        return setAccounts(message)
      }
    } catch (error) {
      const err = error as AxiosError
      console.log(err.response?.data)
      if (err.response?.status === 401) return logout()
    } finally {
      setSpinner(false)
    }
  }

  return (
    <Container>
      {spinner && <ModalLoading />}
      <Navbar>
        <PortalLogoType
          color={'#2058a4'}
          description={'Administração Portal Kaizen'}
          url={'/dashboard'}
        />

        <div>
          <Options>
            <Title href="/dashboard">Página Inicial</Title>
          </Options>
        </div>

        <Group>
          <GroupButton>
            <Notifications />
          </GroupButton>

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
        </Group>
      </Navbar>

      <Section>
        <Space>
          <Menu>
            <Element
              href="#accounts"
              id={'conta'}
              select={itemSelect.id}
              onClick={() =>
                setItemSelect({
                  id: 'conta',
                  label: 'Conta',
                })
              }
            >
              Contas
            </Element>

            <Element
              href="/info"
              id={'infoSistem'}
              select={itemSelect.id}
              onClick={() =>
                setItemSelect({
                  id: 'infoSistem',
                  label: 'infoSistem',
                })
              }
              target="_blank"
            >
              Informações do Sistema
            </Element>
          </Menu>
        </Space>

        <Main>
          <div id="accounts">
            <TableListAccounts accounts={accounts} />
            <ModalNewAccount />
          </div>

          <GenericSectionElement id="infoSistem"></GenericSectionElement>
        </Main>
      </Section>
    </Container>
  )
}
