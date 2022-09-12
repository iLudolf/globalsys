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
  padding-left: 10px;
  padding-right: 10px;
  border-top: 1px solid ${({ theme }) => theme.gray800};
  opacity: 0.3;
`

export const Body = styled.div`
  display: flex;
  padding: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;

  @media screen and (min-width: 500px) and (max-width: 1000px) {
    flex-direction: column;
  }
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
  margin-left: 6px;

  &:hover {
    background-color: ${({ theme }) => theme.gray500};
  }
`

export const GroupButton = styled.div`
  padding-top: 15px;
  display: flex;
  justify-content: end;
  align-items: center;
  margin-right: 25px;
`

export const Input = styled.input`
  border: none;
  color: ${({ theme }) => theme.gray200};
  background-color: ${({ theme }) => theme.gray900};
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  outline-color: ${({ theme }) => theme.green700};
`

export const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 100%;
  padding: 5px;
  border: 2px solid white;
`

export const GroupInput = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 1fr);

  @media screen and (min-width: 500px) and (max-width: 1000px) {
    grid-gap: 5px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }

  @media screen and (max-width: 500px) {
    grid-gap: 5px;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
`

export const Select = styled.select`
  width: 100%;
  border: none;
  padding: 10px;
  background-color: ${({ theme }) => theme.gray900};
  color: ${({ theme }) => theme.gray200};
  margin-bottom: 10px;
`

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Error = styled.span`
  display: flex;
  font-size: 12px;
  color: ${({ theme }) => theme.attention};
  margin: 0;
  padding: 0;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
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
  margin-top: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.gray500};
  }
`
