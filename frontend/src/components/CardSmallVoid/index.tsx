import {
  Container,
  Title,
  Card,
  Header,
  CardDescripiton,
  CardFooter,
  BtnAcess,
  CardHeader,
  Office,
  Info,
  Span,
} from './styles'

export const CardSmallVoid = () => {
  return (
    <>
      <Container>
        <Card>
          <CardHeader>
            <Header>
              <Title>title</Title>
              <Office>office</Office>
            </Header>
          </CardHeader>

          <CardDescripiton>descripiton</CardDescripiton>

          <CardFooter>
            <BtnAcess href="#">Saber mais</BtnAcess>
            <Info>
              <Span>Kaizen Segurança</Span>
            </Info>
          </CardFooter>
        </Card>
      </Container>
    </>
  )
}
