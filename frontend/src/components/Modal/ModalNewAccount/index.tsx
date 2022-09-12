import React, { useContext, useState } from 'react'
import {
  Container,
  Modal,
  BackgroundHeader,
  ModalHeader,
  Title,
  Close,
  Body,
  Hr,
  GroupButton,
  ButtonClose,
  Input,
  ProfileImage,
  GroupInput,
  Select,
  Group,
  Error,
  Button,
} from './styles'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { api } from '../../../services/api'
import { toast } from 'react-toastify'
import { DotLoaders } from '../../Loaders/DotLoaders'
import { AxiosError } from 'axios'
import { AuthContext } from '../../../contexts/AuthContext'

const schema = yup
  .object({
    firstName: yup
      .string()
      .required('Por favor, informe o nome do usuário.')
      .typeError('Por favor, informe o nome do usuário.'),

    lastName: yup
      .string()
      .required('Por favor, informe o sobrenome do usuário.')
      .typeError('Por favor, informe o sobrenome do usuário.'),

    office: yup
      .string()
      .required('Por favor, informe a unidade')
      .typeError('Por favor, informe a unidade'),

    occupation: yup
      .string()
      .required('Por favor, informe o cargo.')
      .typeError('Por favor, informe o cargo.'),

    email: yup
      .string()
      .email('Formato de email inválido')
      .required('Por favor, informe o email.')
      .typeError('Por favor, informe o email.'),
  })
  .required()

type Inputs = {
  firstName: string
  lastName: string
  email: string
  type: string // Kaizen de Segurança ou Geral
  office: number // Unidade
  occupation: string
  file?: any
}

export const ModalNewAccount = () => {
  const { logout } = useContext(AuthContext)
  const [file, setFile] = useState<any>([])
  const [spinnerState, setSpinnerState] = useState<boolean>(false)
  const [openModalCreateNewAcoount, setOpenModalCreateNewAcoount] =
    useState<boolean>(false)
  const [profileImage, seProfileImage] = useState<string>(
    `${process.env.PUBLIC_URL}/assets/illustrations/profile.jpg`,
  )
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<Inputs> = async (data: any) => {
    try {
      setSpinnerState(true)

      const {
        firstName,
        lastName,
        description,
        occupation,
        type,
        office,
        email,
      } = data

      const formData = new FormData()
      formData.append('name', firstName)
      formData.append('lastName', lastName)
      formData.append('description', description)
      formData.append('occupation', occupation)
      formData.append('type', type)
      formData.append('office', office)
      formData.append('file', file)
      formData.append('mail', email)

      const response = await api.post('accounts', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: localStorage.LUVEP_KAIZEN_STOREGE_KEY,
        },
      })

      const { error, message } = response.data

      if (!error) {
        toast.success(message, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        const btn = document.getElementById('submitConfirm')
        btn!.style.display = 'none'
        setTimeout(() => window.location.reload(), 5010)
        setOpenModalCreateNewAcoount(false)
      } else {
        toast.error(message, {
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
      const err = error as AxiosError
      if (err.response?.status === 401) return logout()
      console.log(err.response?.data)
    } finally {
      setSpinnerState(false)
    }
  }

  const handleFileReader = async (file: any) => {
    try {
      const photo = await file.target.files[0]
      const reader = new FileReader()

      reader.addEventListener(
        'load',
        () => {
          // convert image file to base64 string
          seProfileImage(URL.createObjectURL(photo))
        },
        false,
      )

      if (photo) {
        reader.readAsDataURL(photo)
      }
      setFile(photo)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Button onClick={() => setOpenModalCreateNewAcoount(true)}>
        Cadastrar
      </Button>
      <Container openStateModal={openModalCreateNewAcoount}>
        <Modal>
          <BackgroundHeader>
            <ModalHeader>
              <div>
                <Title>Cadastrar novo usuário </Title>
              </div>

              <Close onClick={() => setOpenModalCreateNewAcoount(false)}>
                &times;
              </Close>
            </ModalHeader>
          </BackgroundHeader>
          <Hr />

          <form onSubmit={handleSubmit(onSubmit)}>
            <Body>
              <label htmlFor="file">
                <ProfileImage id="img" src={profileImage} />
              </label>
              <input
                style={{ display: 'none' }}
                {...register('file')}
                type="file"
                id="file"
                name="file"
                accept="image/png, image/jpeg"
                onChange={handleFileReader}
              />

              <GroupInput>
                <Group>
                  <Input
                    {...register('firstName')}
                    placeholder="Nome"
                    type="text"
                  />
                  <Error>{errors.firstName?.message}</Error>
                </Group>

                <Group>
                  <Input
                    {...register('lastName')}
                    placeholder="Sobre Nome"
                    type="text"
                  />
                  <Error>{errors.lastName?.message}</Error>
                </Group>

                <Group>
                  <Input
                    {...register('occupation')}
                    placeholder="Cargo"
                    type="text"
                  />
                  <Error>{errors.occupation?.message}</Error>
                </Group>

                <Group>
                  <Input
                    {...register('email')}
                    placeholder="E-mail"
                    type="mail"
                  />
                  <Error>{errors.email?.message}</Error>
                </Group>

                <Group>
                  <Select {...register('office')}>
                    <option value="1">Viana</option>
                    <option value="2">Linhares</option>
                    <option value="3">Teixeira de Freitas</option>
                    <option value="4">Vitória da Conquista</option>
                  </Select>
                  <Error>{errors.office?.message}</Error>
                </Group>

                <Group>
                  <Select {...register('type')}>
                    <option value={'true'}>Usuário Administrador</option>
                    <option value={'false'}>Usuário Simples</option>
                  </Select>
                  <Error>{errors.type?.message}</Error>
                </Group>
              </GroupInput>
            </Body>

            <Hr />

            <GroupButton>
              <ButtonClose type="submit" id="submitConfirm">
                {spinnerState ? <DotLoaders color="#F7F8FA" /> : 'Confirmar'}
              </ButtonClose>

              <ButtonClose onClick={() => setOpenModalCreateNewAcoount(false)}>
                Fechar
              </ButtonClose>
            </GroupButton>
          </form>
        </Modal>
      </Container>
    </>
  )
}
