import React, { useState } from 'react'
import {
  Container,
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
  NewAccount,
  NewAccountDescripition,
  Error,
} from './styles'

import { useForm, SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { history } from '../../services/History'
import { Logo } from '../../components/Logo'
import { DotLoaders } from '../../components/Loaders/DotLoaders'

const schema = yup
  .object({
    mail: yup
      .string()
      .email('Por favor, informe um e-mail válido.')
      .required('Por favor, informe seu e-mail.')
      .typeError('Por favor, informe seu e-mail.'),

    name: yup
      .string()
      .required('Por favor, informe seu nome.')
      .typeError('Por favor, informe seu nome.'),
    lastName: yup
      .string()
      .required('Por favor, informe seu sobrenome.')
      .typeError('Por favor, informe seu sobrenome.'),

    password: yup
      .string()
      .required('Por favor, informe sua senha.')
      .typeError('Por favor, informe sua senha.'),

    validityPassword: yup
      .string()
      .required('Por favor, confirme sua senha.')
      .typeError('Por favor, confirme sua senha.'),
  })
  .required()

type Inputs = {
  mail: string
  name: string
  lastName: string
  password: string
  validityPassword: string
}

export const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  })

  const [spinnerState, setSpinnerState] = useState<boolean>(false)

  const onSubmit: SubmitHandler<Inputs> = async (inputsValues) => {
    try {
      setSpinnerState(true)
      const url = `${process.env.REACT_APP_LINK_API}/accounts`
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: localStorage.STOREGE_KEY,
        },
        body: JSON.stringify(inputsValues),
      })
      const data = await response.json()

      if (data.status === 'ok') {
        setTimeout(() => window.location.reload(), 5010)
        history.push('/account.login')

        toast.success(data.message, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      } else {
        toast.error(data.message, {
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
      setSpinnerState(false)
    }
  }

  return (
    <Container>
      <Header>
        <FormGroup>
          <FormTitle>Crie sua conta</FormTitle>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input {...register('mail')} placeholder="E-mail" type="mail" />
            <Error>{errors.mail?.message}</Error>
            <Input {...register('name')} placeholder="Seu nome" type="text" />
            <Error>{errors.name?.message}</Error>
            <Input
              {...register('lastName')}
              placeholder="Seu sobrenome"
              type="text"
            />
            <Error>{errors.lastName?.message}</Error>
            <Input
              {...register('password')}
              placeholder="Sua senha"
              type="password"
            />
            <Error>{errors.password?.message}</Error>
            <Input
              {...register('validityPassword')}
              placeholder="Confirme sua senha"
              type="password"
            />
            <Error>{errors.validityPassword?.message}</Error>
            <NewAccountDescripition>
              Ao se registrar, você aceita nossos
              <NewAccount>termos de uso</NewAccount> e a nossa
              <NewAccount>política de privacidade</NewAccount>.
            </NewAccountDescripition>

            <Button disabled={spinnerState!} type="submit">
              {spinnerState ? <DotLoaders color="#F7F8FA" /> : 'Cadastrar'}
            </Button>
          </Form>
        </FormGroup>
        <Info>
          <GroupHeader>
            <Logo />
            <VerticalBar color={'#0071bd'} />
            <Description>Plataforma de Kaizen</Description>
          </GroupHeader>
          <Title>
            Crie sua conta na <Emphasis>plataforma</Emphasis> de{' '}
            <Emphasis>Treinamento</Emphasis> da Luvep
          </Title>
          <InfoDescription>
            A <em>plataforma de Kaizen da Luvep</em> oferece um catálogo
            completo de capacitação para os funcionários e muito mais.
          </InfoDescription>
        </Info>
      </Header>
    </Container>
  )
}
