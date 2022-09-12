import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  text-align: center;
`

export const Header = styled.div`
  background-color: ${({ theme }) => theme.backgroundPrimary};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`
