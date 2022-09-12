import React, { useState } from 'react'
import {
  Container,
  Modal,
  BackgroundHeader,
  ModalHeader,
  Title,
  Close,
  ModalBody,
  ButtonAccess,
  GroupButton,
  ButtonClose,
  Profile,
  Button,
  ButtonSetPhoto,
} from './styles'

interface Props {
  src: String
}

export const ModalUpdateProfilePhoto = ({ src }: Props) => {
  const [openStateModal, setOpenStateModal] = useState(false)

  return (
    <>
      <ButtonAccess onClick={() => setOpenStateModal(!openStateModal)}>
        Trocar imagem
      </ButtonAccess>

      <Container openStateModal={openStateModal}>
        <Modal>
          <BackgroundHeader>
            <ModalHeader>
              <Title>Editar foto</Title>
              <Close onClick={() => setOpenStateModal(!openStateModal)}>
                &times;
              </Close>
            </ModalHeader>
          </BackgroundHeader>

          <ModalBody>
            <Profile src={String(src)} />

            <GroupButton>
              <div>
                <Button>Excluir Foto</Button>

                <ButtonSetPhoto htmlFor="selecao-arquivo">
                  Alterar Foto{' '}
                </ButtonSetPhoto>

                <input
                  style={{ display: 'none' }}
                  id="selecao-arquivo"
                  type="file"
                  name="avatar"
                  accept="image/png, image/jpeg"
                ></input>
              </div>
              <ButtonClose id={`sendData`}>Confirmar Alterações</ButtonClose>
            </GroupButton>
          </ModalBody>
        </Modal>
      </Container>
    </>
  )
}
