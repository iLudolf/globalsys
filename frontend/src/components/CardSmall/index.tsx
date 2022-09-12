import { SetStateAction, useState, useEffect, FC, Dispatch } from 'react'
import { convertUppercaseToLowercase } from '../../shared/utils/convertLowercaseToUppercase'

import {
  Container,
  Title,
  Card,
  Header,
  CardDescripiton,
  CardFooter,
  BtnAcess,
  CardHeader,
  ProfileImage,
  Occupation,
  Info,
  Span,
  InfoGeral,
  Button,
  Group,
  Hr,
  Office,
} from './styles'

interface Props {
  id: string
  title: string
  office: string
  occupation: string
  photo: string
  descripiton: string
  isKaizenSafety: boolean
  isAdmin: boolean
  handleOpenModaldeleteKaizen?: () => void
  handleSelectID?: Dispatch<SetStateAction<string>>
  handleOpenModalUpdateKaizen?: () => void
}

export const CardSmall: FC<Props> = ({
  id,
  title,
  photo,
  descripiton,
  occupation,
  office,
  isKaizenSafety,
  isAdmin,
  handleOpenModaldeleteKaizen,
  handleSelectID,
  handleOpenModalUpdateKaizen,
}: Props) => {
  const handleUserSelectIDandOpenModalDelete = () => {
    handleSelectID!(id)
    handleOpenModaldeleteKaizen!()
  }

  const handleUserSelectIDandOpenModalUpdate = () => {
    handleSelectID!(id)
    handleOpenModalUpdateKaizen!()
  }

  const [officeName, setOfficeName] = useState<string>('')

  useEffect(() => {
    switch (office) {
      case '1':
        setOfficeName('Viana')
        break
      case '2':
        setOfficeName('Linhares')
        break
      case '3':
        setOfficeName('Teixeira de Freitas')
        break
      case '4':
        setOfficeName('Vitória da Conquista')
        break
      default:
        break
    }
  }, [office])

  return (
    <>
      <Container>
        <Card>
          <CardHeader>
            <ProfileImage src={photo} />
            <Header>
              <Title>{convertUppercaseToLowercase(title)}</Title>
              <Occupation>{occupation}</Occupation>
            </Header>
          </CardHeader>

          <Hr />
          <Office>{officeName}</Office>
          <Hr />

          <CardDescripiton>{descripiton}</CardDescripiton>

          <CardFooter>
            {isAdmin ? (
              <BtnAcess href={`admin/kaizen/${id}`}>Atualizar</BtnAcess>
            ) : (
              <BtnAcess href={`/kaizen/${id}`}>Saber mais</BtnAcess>
            )}

            {isKaizenSafety ? (
              <Info>
                <Span>Kaizen Segurança</Span>
              </Info>
            ) : (
              <InfoGeral>
                <Span>kaizen geral</Span>
              </InfoGeral>
            )}
          </CardFooter>

          {isAdmin && (
            <Group>
              <Button onClick={handleUserSelectIDandOpenModalDelete}>
                Excluir
              </Button>

              <Button onClick={handleUserSelectIDandOpenModalUpdate}>
                Editar
              </Button>
            </Group>
          )}
        </Card>
      </Container>
    </>
  )
}
