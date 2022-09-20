import { PortalLogoType } from '../../components/PortalLogoType'
import {
  Container,
  Header,
  Info,
  Title,
  ReturnPage,
  Emphasis,
  FormGroup,
  Form,
  Input,
  Button,
} from './styles'

export const Forgot = () => {
  return (
    <Container>
      <Header>
        <FormGroup>
          <Form>
            <Info>
              <PortalLogoType
                color={'#0071bd'}
                description={''}
                url={'/account.login'}
              />

              <Title>
                Recuperar <Emphasis>Senha</Emphasis>
              </Title>
            </Info>
            <Input placeholder="E-mail" type="mail" />

            <Button type="submit">Recuperar</Button>
            <ReturnPage href="/account.login">Voltar</ReturnPage>
          </Form>
        </FormGroup>
      </Header>
    </Container>
  )
}
