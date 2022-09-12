import styled from 'styled-components'
import { BellSimple } from 'phosphor-react'

export const Container = styled.div`
  padding: 10px;
  &:hover {
    background-color: ${({ theme }) => theme.gray900};
    color: ${({ theme }) => theme.shape};
  }
  border-radius: 5px;
`

export const IcoBellSimple = styled(BellSimple)`
  color: ${({ theme }) => theme.gray};

  &:hover {
    color: ${({ theme }) => theme.gray100};
  }
`
