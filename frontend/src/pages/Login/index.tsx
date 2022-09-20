import React, { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import {
  Container,
  Header,
  Info,
  Title,
  InfoDescription,
  Emphasis,
  FormGroup,
  FormTitle,
  Form,
  Input,
  Button,
  ResetPassword,
  Error,
} from './styles'
import { DotLoaders } from '../../components/Loaders/DotLoaders'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { PortalLogoType } from '../../components/PortalLogoType'

const schema = yup
  .object({
    email: yup
      .string()
      .required('Por favor, informe seu usuário.')
      .typeError('Por favor, informe seu usuário.'),

    password: yup
      .string()
      .required('Por favor, informe sua senha.')
      .typeError('Por favor, informe sua senha.'),
  })
  .required()

type Inputs = {
  email: string
  password: string
}

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  })

  const [spinnerState, setSpinnerState] = useState<boolean>(false)

  const { signIn } = useContext(AuthContext)

  const onSubmit: SubmitHandler<Inputs> = async (data: any) => {
    try {
      setSpinnerState(true)
      await signIn(data)
    } catch (error) {
      console.error(error)
    } finally {
      setSpinnerState(false)
    }
  }

  return (
    <Container>
      <Header>
        <Info>
          <PortalLogoType
            color={'#0071bd'}
            description={`Soluções em TI`}
            url={`/`}
          />

          <Title>
            Faça seu login na <Emphasis>plataforma</Emphasis> de{' '}
            <Emphasis>Atendimento</Emphasis> Globalsys
          </Title>
          <InfoDescription>
            Robusta ferramenta de gestão atendimentos.
          </InfoDescription>
        </Info>
        <FormGroup>
          <FormTitle>Entrar</FormTitle>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input {...register('email')} placeholder="Usuário" type="text" />
            <Error>{errors.email?.message}</Error>
            <Input
              {...register('password')}
              placeholder="Senha"
              type="password"
            />
            <Error>{errors.password?.message}</Error>
            <ResetPassword href="/Forgot">Esqueceu a senha?</ResetPassword>
            <Button type="submit">
              {spinnerState ? <DotLoaders color="#F7F8FA" /> : 'entrar'}
            </Button>
          </Form>
        </FormGroup>
      </Header>
    </Container>
  )
}
