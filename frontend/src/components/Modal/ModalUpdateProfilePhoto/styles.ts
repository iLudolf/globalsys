import styled, { keyframes } from 'styled-components'

interface ModalViewer {
  openStateModal: boolean
}

export const BackgroundHeader = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  background-position: 50px right;
  background-size: cover;
  border-radius: 5px 5px 0px 0px;
  display: flex;
  background-color: ${({ theme }) => theme.gray100};
  border-bottom: 1px solid ${({ theme }) => theme.gray200};
`

export const Container = styled.div<ModalViewer>`
  display: ${({ openStateModal }) => (openStateModal ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`

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

export const Modal = styled.div`
  background-color: ${({ theme }) => theme.grayMedium};
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

export const Title = styled.label`
  font-size: 17px;
  color: ${({ theme }) => theme.gray500};
`

export const Close = styled.span`
  color: ${({ theme }) => theme.gray500};
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
  padding: 10px;
  margin-top: 20px;
  border-radius: 0px 0px 6px 6px;
`

export const ButtonAccess = styled.button`
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.gray200};
  color: ${({ theme }) => theme.gray500};
  cursor: pointer;
  height: 133px;
  width: 133px;
  border-radius: 100%;
  border: 2px solid ${({ theme }) => theme.gray200};
`

export const Description = styled.h1`
  display: flex;
  justify-content: start;
  font-size: 20px;
  color: ${({ theme }) => theme.gray};
`

export const ButtonClose = styled.button`
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
  &:hover {
    background-color: ${({ theme }) => theme.gray500};
  }
  margin-left: 6px;
`

export const GroupButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-items: center;
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

export const Profile = styled.img`
  width: 250px;
  border-radius: 100%;
  padding: 5px;
  border: 10px solid ${({ theme }) => theme.blue1000};
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
  &:hover {
    background-color: ${({ theme }) => theme.gray500};
  }
  margin-left: 6px;
`

export const ButtonSetPhoto = styled.label`
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
  &:hover {
    background-color: ${({ theme }) => theme.gray500};
  }
  margin-left: 6px;
`
