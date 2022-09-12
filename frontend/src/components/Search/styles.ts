import styled from 'styled-components'
import { MagnifyingGlass } from 'phosphor-react'

export const Container = styled.div`
  padding: 10px;
  &:hover {
    background-color: ${({ theme }) => theme.gray900};
    color: ${({ theme }) => theme.shape};
  }
  border-radius: 5px;
`

export const IcoBellSimple = styled(MagnifyingGlass)`
  color: ${({ theme }) => theme.gray100};
  &:hover {
    color: ${({ theme }) => theme.shape};
  }
`
