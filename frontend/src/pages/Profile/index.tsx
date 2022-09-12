import React, { useState, useEffect } from 'react'
import {
  Container,
  Navbar,
  GroupLog,
  VerticalBar,
  Description,
  Body,
  ProfileGroup,
  InfoCard,
  Options,
  Image,
  Name,
  MemberDate,
  Hr,
  TitleNavbar,
  Title,
  TitleGroup,
  SelectImageGroup,
  SelectNewImageProfile,
  InputElement,
  Label,
  ElementGroup,
  Form,
  FormGroup,
  Button,
  GroupButton,
} from './styles'

import { Info } from 'phosphor-react'
import { DotLoaders } from '../../components/Loaders/DotLoaders'
import { api } from '../../services/api'
import { useParams } from 'react-router-dom'
import { convertUppercaseToLowercase } from '../../shared/utils/convertLowercaseToUppercase'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ModalUpdateProfilePhoto } from '../../components/Modal/ModalUpdateProfilePhoto'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import { Logo } from '../../components/Logo'
import { ModalLoading } from '../../components/Modal/ModalLoading'

interface IResponse {
  username: string
  name: string
  email: string
  last_name: string
  availableDateFormatted: string
}

const schema = yup.object().shape({
  mail: yup
    .string()
    .email('Por favor, informe um e-mail válido')
    .required('Por favor, informe o e-mail.'),
  name: yup.string().required('Por favor, informe o nome válido'),
  last_name: yup
    .string()
    .required('Por favor, informe o sobre sobre nome válido'),
})

export const Profile = () => {
  const [spinner, setSpinner] = useState<boolean>(false)
  const [profile, setProfile] = useState<IResponse>()
  const [isShown, setIsShown] = useState(false)
  const [thereWasInteraction, setThereWasInteraction] = useState<boolean>(false)
  const { id } = useParams()

  useEffect(() => {
    loadDadosUsers()
  }, [id])

  const {
    register,
    handleSubmit,
    setValue,
    // formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const loadDadosUsers = async () => {
    try {
      setSpinner(true)

      const response = await api.get(`accounts/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.LUVEP_KAIZEN_STOREGE_KEY,
        },
      })

      if (!response.data.error) {
        const lasName = response.data.message[0].last_name
        const createdOn = response.data.message[0].created_on

        const { username, name, email } = response.data.message[0]

        // const isLesseonAvailable = isPast(created_on)
        const availableDateFormatted = format(
          new Date(createdOn),
          "EEE' - 'd' de 'MMMM' ",
          {
            locale: ptBR,
          },
        )

        setProfile({
          username: String(username),
          name: String(name),
          email: String(email),
          last_name: String(lasName),
          availableDateFormatted: String(availableDateFormatted),
        })

        setValue('mail', email)
        setValue('name', name)
        setValue('last_name', lasName)

        document.title = `
                ${convertUppercaseToLowercase(name)} 
                ${convertUppercaseToLowercase(lasName)}
                 | Cálculo de Chassi`
      }
    } catch (error) {
      console.error(error)
    } finally {
      setSpinner(false)
    }
  }

  const onSubmit = async (data: any) => {
    try {
      setSpinner(true)
      const response = await api.put(`accounts/${id}`, data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.LUVEP_KAIZEN_STOREGE_KEY,
        },
      })

      if (!response.data.error) {
        setTimeout(() => window.location.reload(), 3500)
        toast.success(response.data.message, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        const button = document.getElementById('buttonsubmit')
        button!.style.display = 'none'
      } else {
        toast.error(response.data.message, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      }
    } catch (error) {
      console.error(error)
    } finally {
      setSpinner(false)
    }
  }

  return (
    <>
      <Container>
        {spinner && <ModalLoading />}
        <Navbar>
          <a href="/dashboard" style={{ textDecoration: 'none' }}>
            <GroupLog>
              <Logo />
              <VerticalBar color={'#2058a4'} />
              <Description>Conta</Description>
            </GroupLog>
          </a>
          <div>
            <Options>
              <TitleNavbar href="/dashboard">Página Inicial</TitleNavbar>
            </Options>
            <Options>
              <TitleNavbar href="/kaizen-monthly">Premiação Mensal</TitleNavbar>
            </Options>
            <Options>
              <TitleNavbar href="/kaizen-quarterly">
                Premiação Trimestral
              </TitleNavbar>
            </Options>

            <Options>
              <TitleNavbar href="/kaizen-yearly       ">
                Premiação Anual
              </TitleNavbar>
            </Options>
          </div>

          <div />
        </Navbar>
        <Body>
          <ProfileGroup>
            <SelectImageGroup>
              {isShown && (
                <a href="#">
                  <SelectNewImageProfile
                    onMouseLeave={() => setIsShown(!isShown)}
                  >
                    <ModalUpdateProfilePhoto
                      src={String(
                        localStorage.getItem('LUVEP_KAIZEN_STOREGE_PROFILE'),
                      )}
                    />
                  </SelectNewImageProfile>
                </a>
              )}

              <Image
                onMouseEnter={() => setIsShown(!isShown)}
                src={String(
                  localStorage.getItem('LUVEP_KAIZEN_STOREGE_PROFILE'),
                )}
              />
            </SelectImageGroup>

            <Name>
              {convertUppercaseToLowercase(profile?.name)}{' '}
              {convertUppercaseToLowercase(profile?.last_name)}
            </Name>
            <MemberDate>
              Conta criada em {profile?.availableDateFormatted}
            </MemberDate>
            <Hr />
          </ProfileGroup>
          <InfoCard>
            <div>
              <TitleGroup>
                <Info size={32} color="#C4C4CC" weight="fill" />
                <Title>Informações Pessoais</Title>
              </TitleGroup>
              <Hr />
            </div>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormGroup>
                <ElementGroup>
                  <Label>Usuário</Label>
                  <InputElement
                    disabled={true}
                    defaultValue={convertUppercaseToLowercase(
                      profile?.username,
                    )}
                  />
                </ElementGroup>

                <ElementGroup>
                  <Label>Nome</Label>
                  <InputElement
                    type="text"
                    {...register('name')}
                    defaultValue={convertUppercaseToLowercase(profile?.name)}
                    onChange={() => setThereWasInteraction(true)}
                  />
                  {/* <Span> {errors.name && errors.name.message}</Span> */}
                </ElementGroup>

                <ElementGroup>
                  <Label>Sobre Nome</Label>
                  <InputElement
                    type="text"
                    {...register('last_name')}
                    defaultValue={convertUppercaseToLowercase(
                      profile?.last_name,
                    )}
                    onChange={() => setThereWasInteraction(true)}
                  />
                  {/* <Span> {errors.last_name && errors.last_name.message}</Span> */}
                </ElementGroup>

                <ElementGroup>
                  <Label>E-mail</Label>
                  <InputElement
                    type="mail"
                    {...register('mail')}
                    defaultValue={convertUppercaseToLowercase(profile?.email)}
                    onChange={() => setThereWasInteraction(true)}
                  />
                  {/* <Span> {errors.mail && errors.mail.message}</Span> */}
                </ElementGroup>
              </FormGroup>

              <GroupButton>
                {thereWasInteraction && (
                  <Button id="buttonsubmit" type="submit">
                    {spinner ? (
                      <DotLoaders color="#F7F8FA" />
                    ) : (
                      'Salvar Alterações'
                    )}
                  </Button>
                )}
                <Button type="button">Alterar Senha</Button>
              </GroupButton>
            </Form>
          </InfoCard>
        </Body>
      </Container>
    </>
  )
}
