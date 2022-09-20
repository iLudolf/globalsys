import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h3`
  color: ${({ theme }) => theme.gray300};
  margin: 0;
  margin-top: 8px;
`

export const Description = styled.span`
  color: ${({ theme }) => theme.gray300};
`
