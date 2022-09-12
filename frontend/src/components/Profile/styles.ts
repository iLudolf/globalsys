import styled from 'styled-components'
interface Props {
  status: boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
`

export const ImageIco = styled.img`
  display: block;
  width: 50px;
  border-radius: 9999px;
  border: 2px solid ${({ theme }) => theme.gray100};
  padding: 2px;
  margin: 0px;
`

export const Modal = styled.div<Props>`
  display: ${({ status }) => (status ? 'block' : 'none')};
  position: Absolute;
  top: 120px;
  right: 15px;
  width: 330px;
  border-radius: 5px;
  -webkit-box-shadow: 1px 1px 16px -1px rgba(0, 0, 0, 0.23);
  box-shadow: 1px 1px 16px -1px rgba(0, 0, 0, 0.23);
  padding: 2px;
  z-index: 2;
  background-color: ${({ theme }) => theme.grayMedium};
`

export const CardMessage = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  align-items: center;
  margin: 25px 0px 10px 0px;
`

export const ProfileIco = styled.img`
  width: 75px;
  border-radius: 60px;
  border: 2px solid ${({ theme }) => theme.gray100};
  padding: 2px;
`

export const Name = styled.span`
  width: 100%;
  color: ${({ theme }) => theme.shape};
  margin: 0px;
  padding: 0px;
  font-size: 19px;
  font-weight: bold;
`

export const Description = styled.span`
  margin-top: 8px;
  color: ${({ theme }) => theme.gray300};
  font-size: 15px;
  font-weight: bold;
  &:hover {
    color: ${({ theme }) => theme.gray200};
  }
`

export const Mail = styled.div`
  margin-top: 8px;
  color: ${({ theme }) => theme.gray300};
  font-size: 15px;
  &:hover {
    color: ${({ theme }) => theme.gray200};
  }
`

export const Group = styled.div`
  padding-left: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: start;
`

export const Button = styled.button`
  min-width: 100px;
  text-decoration: none;
  padding: 10px 15px 10px 15px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.gray600};
  color: ${({ theme }) => theme.gray100};
  font-size: 15px;
  border: none;
  cursor: pointer;
  margin-left: 10px;
  &:hover {
    background-color: ${({ theme }) => theme.gray500};
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 15px;
  margin-bottom: 10px;
`

export const Hr = styled.hr`
  opacity: 0.2;
  width: 90%;
  margin-bottom: 10px;
`

export const Perfil = styled.a`
  min-width: 100px;
  text-decoration: none;
  padding: 10px 15px 10px 15px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.gray600};
  color: ${({ theme }) => theme.gray100};
  font-size: 15px;
  border: none;
  cursor: pointer;
  margin-left: 10px;
  &:hover {
    background-color: ${({ theme }) => theme.gray500};
  }
`
