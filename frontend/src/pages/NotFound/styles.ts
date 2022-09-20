import styled, { keyframes } from 'styled-components'

const slideTop = keyframes`
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  50% {
    -webkit-transform: translateY(-10px);
            transform: translateY(-10px);
  }  
 
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  } 
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.backgroundPrimary};
`

export const Title = styled.h1`
  width: 100%;
  font-size: 60px;
  color: ${({ theme }) => theme.textTertiary};
  margin: 0;
  margin-top: 15px;

  -webkit-animation: ${slideTop} 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    infinite;
  animation: ${slideTop} 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
`

export const Button = styled.a`
  text-decoration: none;
  background-color: ${({ theme }) => theme.blue600};
  color: ${({ theme }) => theme.shape};
  font-size: 15px;
  border: none;
  cursor: pointer;
  margin-left: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  margin-top: 15px;
  border-radius: 5px;
  &:hover {
    background-color: ${({ theme }) => theme.blue500};
  }
`
