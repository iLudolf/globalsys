import {
  Container,
  Card,
  Title,
  CardHeader,
  CardDescripiton,
  ProgressBar,
  CardFooter,
  Label,
  TitleTwo,
  CardHeaderLeft,
  List,
  ElementList,
  Span,
  PropsColor,
} from './styles'

import { CaretRight } from 'phosphor-react'

interface Props extends PropsColor {}

export const CardLarge = ({ color }: Props) => {
  return (
    <Container color={color}>
      <Card href="/event">
        <CardHeader>
          <Title>Conectar</Title>

          <CardDescripiton>
            Trilha de conhecimento para primeiro contato com a programação.
          </CardDescripiton>

          <CardFooter>
            <Label>0% completo</Label>
            <ProgressBar value="34" max="100" />
          </CardFooter>
        </CardHeader>
        <CardHeaderLeft>
          <TitleTwo>
            Ideal para você que está começando do absoluto zero na programação
            se familiarizar com esse incrível universo;
          </TitleTwo>
          <List>
            <ElementList>
              <Span>Coffee</Span>
            </ElementList>
            <ElementList>
              <Span>Test</Span>
            </ElementList>
            <ElementList>
              <Span>Test</Span>
            </ElementList>
          </List>
        </CardHeaderLeft>
        <CaretRight size={40} color="white" weight="fill" />
      </Card>
    </Container>
  )
}
