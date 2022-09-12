import React, { useState } from 'react'
import {
  Container,
  Modal,
  BackgroundHeader,
  ModalHeader,
  Title,
  Code,
  Close,
  ModalBody,
  Hr,
  ButtonAccess,
  Description,
  GroupButton,
  ButtonClose,
  GroupHeader,
  Span,
} from './styles'

export const ModalExample = () => {
  const [openStateModal, setOpenStateModal] = useState(false)

  return (
    <>
      <ButtonAccess onClick={() => setOpenStateModal(!openStateModal)}>
        Excluir
      </ButtonAccess>

      <Container openStateModal={openStateModal}>
        <Modal>
          <BackgroundHeader>
            <ModalHeader>
              <div>
                <Title>
                  Excluir Conta<Code> - </Code>
                </Title>
              </div>
              <Close onClick={() => setOpenStateModal(!openStateModal)}>
                &times;
              </Close>
            </ModalHeader>
          </BackgroundHeader>

          <ModalBody>
            <GroupHeader>
              <Description>
                Tem certeza que deseja excluir a conta ?
              </Description>
              <Span>
                Aviso: Essa operação é inversível. Todos os dados serão
                excluidos de forma permanente.
              </Span>
            </GroupHeader>
            <Hr></Hr>
            <GroupButton>
              <ButtonClose onClick={() => setOpenStateModal(!openStateModal)}>
                Fechar
              </ButtonClose>
              <ButtonClose id={`sendData`}>Confirmar</ButtonClose>
            </GroupButton>
          </ModalBody>
        </Modal>
      </Container>
    </>
  )
}
