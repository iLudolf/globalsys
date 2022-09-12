import styled from 'styled-components'
import { Browsers } from 'phosphor-react'

export const Container = styled.div`
  margin-top: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.gray500};
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 3px;
`

export const Ico = styled.img`
  width: 30px;
  height: 30px;
  align-items: flex-end;
`

export const Group = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const Title = styled.strong`
  text-transform: lowercase;
  margin-left: 10px;
  font-size: 12px;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  color: ${({ theme }) => theme.gray300};

  &:hover {
    color: ${({ theme }) => theme.gray200};
  }
`

export const Donwload = styled.a`
  margin-right: 5px;
  color: ${({ theme }) => theme.gray200};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.gray100};
  }
`

export const Viwer = styled.a`
  margin-left: 5px;
  margin-right: 15px;
  color: ${({ theme }) => theme.gray300};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.gray100};
  }
`

export const BrowserIco = styled(Browsers).attrs({
  color: '#8D8D99',
  size: 20,
  weight: 'fill',
})``
