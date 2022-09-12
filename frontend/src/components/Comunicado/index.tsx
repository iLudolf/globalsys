import React from 'react'
import {
  Container,
  Section,
  CardInfo,
  TitleCardInfo,
  DescriptionCardInfo,
  Person,
  Card,
} from './styles'

interface Props {
  title: string
  descrpition: string
  color: string
  srcPerson: string
}

export const Comunicado = ({ title, descrpition, color, srcPerson }: Props) => {
  return (
    <Container>
      <Section>
        <Card color={color}>
          <CardInfo>
            <TitleCardInfo>{title}</TitleCardInfo>
            <DescriptionCardInfo>{descrpition}</DescriptionCardInfo>
          </CardInfo>
          <Person src={srcPerson} />
        </Card>
      </Section>
    </Container>
  )
}
