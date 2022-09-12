import styled, { keyframes } from 'styled-components'

const slideInFromLeft = keyframes`
 0% {
  border-right:8px solid #0071bd;
  }
  25% {
    border-right: 8px solid #CD7F32;
  }
  45% {
    border-right: 8px solid #aaa9ad;
  }
  100% {
    border-right:8px solid #DAA520;
  }
`

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

interface Props {
  color: string
}

export const Container = styled.div`
  position: fixed;
  z-index: 99;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: ${({ theme }) => theme.grayMedium};
`

export const Group = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Element = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  -webkit-animation: ${slideTop} 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    infinite;
  animation: ${slideTop} 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
`

export const VerticalBar = styled.div<Props>`
  width: 10px;
  height: 50px;
  margin-top: 2px;
  padding-left: 10px;
  border-right: 8px solid ${({ color }) => color};
  border-radius: 1px;
  animation: ${slideInFromLeft} 7s infinite;
`

export const Description = styled.span`
  font-family: Roboto-Light;
  padding-left: 10px;
  font-size: 22px;
  color: ${({ theme }) => theme.gray50};

  @font-face {
    font-family: Roboto-Light;
    src: url('./assets/Fonts/Roboto/Roboto-Light.ttf');
  }
`
