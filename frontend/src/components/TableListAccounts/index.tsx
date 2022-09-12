import { convertUppercaseToLowercase } from '../../shared/utils/convertLowercaseToUppercase'
import { Container, List, ElementCircle, GroupProfile, Profile } from './styles'
import { Circle } from 'phosphor-react'
import moment from 'moment'
import { ModalDelete } from '../Modal/ModalDelete'

moment.locale('pt')
moment.updateLocale('pt', {
  months: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
})

export interface IAccount {
  user_id: number
  username: string
  name: string
  last_name: string
  email: string
  isadmin: boolean
  created_on: string
  last_login: string
  updated_on: string
  id: 1
  photo: string
  path: string
  updated_at: string
}

interface IAccounts {
  accounts: IAccount[]
}

export const TableListAccounts = (arr: IAccounts) => {
  return (
    <Container>
      <List>
        <table>
          <thead>
            <tr>
              <th>Nome de Usuário</th>
              <th>Último Login</th>
              <th>Administrador</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {arr.accounts.map((element) => {
              return (
                <tr key={element.id}>
                  <td>
                    <GroupProfile>
                      <Profile
                        src={`${process.env.REACT_APP_LINK_API}/storage/${element.path}`}
                      />
                      <label>
                        {' '}
                        {convertUppercaseToLowercase(element.username)}
                      </label>
                    </GroupProfile>
                  </td>
                  <td>{moment(element.last_login).calendar()}</td>
                  <td>
                    <ElementCircle>
                      {element.isadmin ? (
                        <Circle size={18} weight="fill" color="#00B37E" />
                      ) : (
                        <Circle size={18} weight="fill" color="#E83F5B" />
                      )}
                    </ElementCircle>
                  </td>
                  <td>
                    <ModalDelete
                      id={String(element.id)}
                      userName={`${element.name}.${element.last_name}`}
                    />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </List>
    </Container>
  )
}
