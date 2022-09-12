import React from 'react'
import {
  Container,
  Modal,
  BackgroundHeader,
  ModalHeader,
  Title,
  Close,
  Body,
  Hr,
  Description,
  GroupButton,
  Button,
  Span,
  Group,
} from './styles'

import { DotLoaders } from '../../Loaders/DotLoaders'

interface Props {
  title: string
  status: boolean
  description: string
  setOpen: () => void
  setClose: () => void
  deleteItemUponIdValidation: () => void
  spinnerStateDeletekaizen: boolean
}

export const ModalMessageDelete: React.FC<Props> = ({
  title,
  description,
  status,
  setOpen,
  setClose,
  deleteItemUponIdValidation,
  spinnerStateDeletekaizen,
}: Props) => {
  return (
    <Container openStateModal={status}>
      <Modal>
        <BackgroundHeader>
          <ModalHeader>
            <div>
              <Title>{title}</Title>
            </div>

            <Close onClick={setClose}>&times;</Close>
          </ModalHeader>
        </BackgroundHeader>
        <Hr />

        <Body>
          <Group>
            <Description>{description}</Description>
            <Span>Aviso: essa operação é irreversível.</Span>
          </Group>
        </Body>
        <Hr />

        <GroupButton>
          <Button
            type="submit"
            id="submitConfirm"
            onClick={deleteItemUponIdValidation}
          >
            {spinnerStateDeletekaizen ? (
              <DotLoaders color="#F7F8FA" />
            ) : (
              'Confirmar'
            )}
          </Button>

          <Button onClick={setClose}>Fechar</Button>
        </GroupButton>
      </Modal>
    </Container>
  )
}
