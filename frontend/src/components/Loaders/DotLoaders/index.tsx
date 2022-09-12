import React from 'react'
import { Container } from './styles'

interface IProps {
  color: string
}

export const DotLoaders = ({ color }: IProps) => {
  return (
    <>
      <Container color={color} />
    </>
  )
}
