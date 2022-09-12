import styled, { keyframes } from 'styled-components'

interface ModalViewer {
  openStateModal: boolean
}

const breatheAnimation = keyframes`
 0% {
    transform: scale(0, 0);
  }
  50% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
`

export const BackgroundHeader = styled.div`
  width: 100%;
  height: 85px;
  border-radius: 5px;
  border-radius: 5px 5px 0px 0px;
  display: flex;
`

export const Container = styled.div<ModalViewer>`
  display: ${({ openStateModal }) => (openStateModal ? 'block' : 'none')};
  position: fixed;
  padding-top: 50px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 4;
`

export const Modal = styled.div`
  width: 80%;
  background-color: ${({ theme }) => theme.grayMedium};
  margin: auto;
  animation-name: ${breatheAnimation};
  animation-duration: 0.5s;
  border-radius: 6px 6px 6px 6px;
  -webkit-box-shadow: 1px 1px 16px -1px rgba(0, 0, 0, 0.23);
  box-shadow: 1px 1px 16px -1px rgba(0, 0, 0, 0.23);
  margin-bottom: 100px;
`

export const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
  padding-left: 10px;
`

export const Title = styled.p`
  padding-left: 10px;
  margin: 0px;
  color: ${({ theme }) => theme.gray200};
  font-family: Roboto-Light;
  padding-left: 10px;
  font-size: 25px;
`

export const Code = styled.code`
  font-family: Roboto-Light;
  font-size: 35px;
  text-shadow: 1px -2px 10px rgba(0, 0, 0, 1);
`

export const Close = styled.span`
  color: ${({ theme }) => theme.gray200};
  float: right;
  font-size: 30px;
  font-weight: bold;

  &:hover {
    color: ${({ theme }) => theme.gray50};
    text-decoration: none;
    cursor: pointer;
  }

  &:focus {
    color: rgb(147, 140, 137);
    text-decoration: none;
    cursor: pointer;
  }
`

export const Hr = styled.hr`
  border-top: 1px solid ${({ theme }) => theme.gray500};
  opacity: 0.2;
`

export const Body = styled.div`
  display: flex;
  padding: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
`

export const Description = styled.h1`
  display: flex;
  justify-content: start;
  font-size: 20px;
  color: ${({ theme }) => theme.gray200};
`

export const Button = styled.button`
  min-width: 100px;
  height: 35px;
  background-color: ${({ theme }) => theme.blue600};
  margin-bottom: 10px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  padding: 10px 15px 10px 15px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.gray600};
  color: ${({ theme }) => theme.gray100};
  font-size: 15px;
  margin-left: 6px;

  &:hover {
    background-color: ${({ theme }) => theme.gray500};
  }
`

export const GroupButton = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: end;
  align-items: center;
  margin-right: 25px;
`

export const Span = styled.span`
  color: ${({ theme }) => theme.red};
  font-size: 16px;
`

export const Group = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
