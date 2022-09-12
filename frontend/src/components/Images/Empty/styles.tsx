import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.gray200};
  margin: 0;
`

export const Description = styled.span`
  color: ${({ theme }) => theme.gray300};
  font-size: 20px;
`
