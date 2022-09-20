import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { api } from '../../../services/api'
import { convertUppercaseToLowercase } from '../../../shared/utils/convertLowercaseToUppercase'
import {
  Container,
  Modal,
  ModalHeader,
  Title,
  Code,
  Close,
  ModalBody,
  Hr,
  Button,
  Description,
  GroupButton,
  ButtonClose,
  ButtonSend,
  GroupHeader,
  Span,
} from './styles'

interface Props {
  id: String
  userName: String
}

export const ModalDelete = ({ id, userName }: Props) => {
  const [openStateModal, setOpenStateModal] = useState(false)

  const handleDeleteAccount = async () => {
    try {
      const response = await api.delete(`accounts/${id}`, {
        headers: {
          Authorization: localStorage.GLOBAL_SYS_STOREGE_KEY,
        },
      })

      const { error, message } = response.data

      if (!error) {
        toast.success(message, {
          position: 'top-right',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        const btn = document.getElementById(`sendData${id}`)
        btn!.style.display = 'none'
        setTimeout(() => window.location.reload(), 1010)
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
      console.error(error)
    }
  }

  return (
    <>
      <Button onClick={() => setOpenStateModal(!openStateModal)}>
        Excluir
      </Button>

      <Container openStateModal={openStateModal}>
        <Modal>
          <ModalHeader>
            <div>
              <Title>
                Excluir Conta
                <Code> -({convertUppercaseToLowercase(userName)})</Code>
              </Title>
            </div>
            <Close onClick={() => setOpenStateModal(!openStateModal)}>
              &times;
            </Close>
          </ModalHeader>
          <ModalBody>
            <Hr />
            <GroupHeader>
              <Description>
                Tem certeza que deseja excluir a conta ?
              </Description>
              <Span>
                Aviso: Essa operação é inversível, todos os dados serão
                excluidos de forma permanente.
              </Span>
            </GroupHeader>

            <GroupButton>
              <ButtonClose onClick={() => setOpenStateModal(!openStateModal)}>
                Fechar
              </ButtonClose>

              <ButtonSend id={`sendData${id}`} onClick={handleDeleteAccount}>
                Confirmar
              </ButtonSend>
            </GroupButton>
          </ModalBody>
        </Modal>
      </Container>
    </>
  )
}
