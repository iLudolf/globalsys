import React from 'react'
import { Container, InputElement, Error, Name } from './styles'
import { Controller, Control } from 'react-hook-form'

interface Props {
  control: Control
  name: string
  error?: string
  placeholder: string
  type: string
  label: string
  sizeWidth: number
}

export const Input = ({
  control,
  name,
  label,
  error,
  sizeWidth,
  ...rest
}: Props) => {
  return (
    <Controller
      control={control}
      rules={{
        required: true,
      }}
      render={({ field: { onChange, value } }) => (
        <>
          <Container>
            <Name> {label}</Name>
            <InputElement
              sizeWidth={sizeWidth}
              status={Boolean(error)}
              onChange={onChange}
              value={value}
              {...rest}
            ></InputElement>
            {error && <Error>{error}</Error>}
          </Container>
        </>
      )}
      name={name}
    />
  )
}
