import React from 'react'
import {
  Container,
  ProfileImage,
  Header,
  Title,
  Group,
  Office,
  Tag,
} from './styles'
import moment from 'moment'
import { convertUppercaseToLowercase } from '../../shared/utils/convertLowercaseToUppercase'

interface iProps {
  name: string
  description: string
  urlKaizen: string
  urlProfile: string
  category: string
  data: string
  type: 'seguranca' | 'geral'
}

export const ProfileSeach = ({
  name,
  description,
  urlKaizen,
  urlProfile,
  category,
  data,
  type,
}: iProps) => {
  return (
    <Container href={`/kaizen/${urlKaizen}`}>
      <Group>
        <ProfileImage alt="Imagem de perfil" src={urlProfile} />

        <Header>
          <Title>{convertUppercaseToLowercase(name)}</Title>

          <Office>{convertUppercaseToLowercase(description)}</Office>
        </Header>
      </Group>

      <Tag type={type}>
        {category === 'm' && moment(data).format('MMMM [de] YYYY')}
        {category === 'q' &&
          `${moment(data).quarter()}º Trimestre de ${moment(data).format(
            'YYYY',
          )}`}
        {category === 'y' && moment(data).format('YYYY')}
      </Tag>
    </Container>
  )
}
