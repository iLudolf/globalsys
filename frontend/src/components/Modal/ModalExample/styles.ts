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
  height: 150px;
  background-image: url('./assets/Image/2.jpg');
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 5px;
  background-position: 50px right;
  background-size: cover;
  border-radius: 5px 5px 0px 0px;
  display: flex;
`

export const Container = styled.div<ModalViewer>`
  display: ${({ openStateModal }) => (openStateModal ? 'block' : 'none')};
  position: fixed;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`

export const Modal = styled.div`
  background-color: ${({ theme }) => theme.background};
  margin: auto;
  width: 80%;
  animation-name: ${breatheAnimation};
  animation-duration: 0.5s;
  border-radius: 6px 6px 6px 6px;

  -webkit-box-shadow: 1px 1px 16px -1px rgba(0, 0, 0, 0.23);
  box-shadow: 1px 1px 16px -1px rgba(0, 0, 0, 0.23);

  margin-bottom: 200px;
  padding-bottom: 20px;
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
  color: rgb(237, 217, 214);
  margin: 0px;

  @font-face {
    font-family: Volvo;
    src: url('./assets/Fonts/Volvo/VolvoBroadProDigital/VolvoBroadProDigital.otf');
  }

  text-shadow: 1px -2px 10px rgba(0, 0, 0, 1);
  font-family: Volvo;
  font-size: 50px;
`

export const Code = styled.code`
  font-family: Volvo;
  font-size: 35px;
  text-shadow: 1px -2px 10px rgba(0, 0, 0, 1);
`

export const Close = styled.span`
  color: rgb(237, 217, 214);
  float: right;
  font-size: 30px;
  font-weight: bold;

  &:hover {
    color: rgb(147, 140, 137);
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
  padding-left: 10px;
  padding-right: 10px;

  border-top: 1px solid ${({ theme }) => theme.gray100};
`

export const ModalBody = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.background};
  border-radius: 0px 0px 6px 6px;
`

export const ButtonAccess = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.red};
  color: ${({ theme }) => theme.shape};
  font-size: 15px;
  border: none;
  cursor: pointer;
`

export const Description = styled.h1`
  display: flex;
  justify-content: start;
  font-size: 20px;
  color: ${({ theme }) => theme.gray};
`

export const ButtonClose = styled.button`
  width: 100px;
  height: 35px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.blue600};
  margin-bottom: 10px;
  color: ${({ theme }) => theme.shape};
  font-size: 15px;
  border: none;
  cursor: pointer;
  margin-left: 5px;
`

export const GroupButton = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: end;
  align-items: center;
  margin-right: 25px;
`

export const GroupHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding-right: 20px;
  padding-left: 20px;
`

export const Span = styled.span`
  color: ${({ theme }) => theme.red};
  font-size: 18px;
`
