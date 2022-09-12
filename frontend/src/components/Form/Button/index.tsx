import React from 'react'
import { Container } from './styles'
import { DotLoaders } from '../../Loaders/DotLoaders'

interface Props {
  title: string
  SpinnerState: boolean
  onClick: () => void
}

export const Button = ({ title, SpinnerState, onClick }: Props) => {
  return (
    <>
      <Container value={title} onClick={onClick}>
        {SpinnerState ? <DotLoaders color="#F7F8FA" /> : title}
      </Container>
    </>
  )
}
