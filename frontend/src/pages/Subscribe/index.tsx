import { Logo } from '../../components/Logo'
import {
  Container,
  ExampleApp,
  Header,
  Info,
  GroupHeader,
  VerticalBar,
  Description,
  Title,
  InfoDescription,
  Emphasis,
  FormGroup,
  FormTitle,
  Form,
  Input,
  Button,
} from './styles'

export const Subscribe = () => {
  return (
    <Container>
      <Header>
        <Info>
          <GroupHeader>
            <Logo />
            <VerticalBar color={'green'} />
            <Description>Kaizen</Description>
          </GroupHeader>
          <Title>
            Construa uma <Emphasis>aplicação completa,</Emphasis> do zero, com{' '}
            <Emphasis>React</Emphasis> JS
          </Title>
          <InfoDescription>
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </InfoDescription>
        </Info>
        <FormGroup>
          <FormTitle>Entrar</FormTitle>
          <Form>
            <Input placeholder="Seu nome" type="text" />

            <Input placeholder="Digite seu e-mail" type="email" />
            <Button type="submit">Verificar</Button>
          </Form>
        </FormGroup>
      </Header>
      <ExampleApp src="./assets/background/Group 7735.png" />
    </Container>
  )
}
