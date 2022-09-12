import styled from 'styled-components'

interface Props {
  color: string
}

export const Container = styled.div`
  height: 100vh;
`

export const Navbar = styled.div`
  width: 100%;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  background: ${({ theme }) => theme.grayMedium};
  border-bottom: 1px solid ${({ theme }) => theme.gray600};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  justify-content: space-between;

  @media screen and (max-width: 400px) {
    padding-top: 0.25rem;
    width: 100vh;
  }

  filter: drop-shadow(1px 13px 15px #000);
`

export const GroupLog = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 15px;
`

export const VerticalBar = styled.div<Props>`
  width: 10px;
  height: 50px;
  margin-top: 2px;
  padding-left: 1px;
  border-right: 8px solid ${({ color }) => color};
  border-radius: 1px;

  @media screen and (max-width: 400px) {
    width: 5px;
    height: 25px;
  }
`

export const Description = styled.span`
  color: ${({ theme }) => theme.gray200};
  @font-face {
    font-family: Roboto-Light;
    src: url('./assets/Fonts/Roboto/Roboto-Light.ttf');
  }
  font-family: Roboto-Light;
  padding-left: 10px;
  font-size: 20px;

  @media screen and (max-width: 400px) {
    padding-left: 5px;
  }
`

export const Options = styled.div`
  padding: 9px;
  display: inline-block;
  vertical-align: middle;
`

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  background: ${({ theme }) => theme.grayMedium};
  height: 100%;
`

export const ProfileGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  padding-top: 100px;
  border-right: 1px solid ${({ theme }) => theme.gray300};
  background-color: ${({ theme }) => theme.gray500};
  -webkit-box-shadow: 1px 1px 16px -1px rgba(0, 0, 0, 0.23);
  box-shadow: 1px 1px 16px -1px rgba(0, 0, 0, 0.23);
`

export const InfoCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 60px 25px 0px 25px;
`

export const Image = styled.img`
  width: 120px;
  border-radius: 100%;
  padding: 3px;
  border: 5px solid ${({ theme }) => theme.gray200};
  display: flex;
  position: static;
`

export const Name = styled.strong`
  margin-top: 10px;
  font-size: 30px;
`

export const MemberDate = styled.span`
  padding: 2px;
  font-size: 10;
  color: ${({ theme }) => theme.gray200};
`

export const Hr = styled.hr`
  width: 90%;
  color: ${({ theme }) => theme.gray100};
  opacity: 0.4;
`

export const TitleNavbar = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.gray300};

  &:hover {
    color: ${({ theme }) => theme.gray200};
  }
`

export const Title = styled.h1`
  font-size: 22px;
  margin-left: 10px;
  display: flex;
  align-items: flex-start;
`

export const TitleGroup = styled.div`
  padding-left: 34px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const SelectImageGroup = styled.div`
  display: flex;
`

export const SelectNewImageProfile = styled.div`
  position: absolute;
  z-index: 1;
`

export const ElementGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const InputElement = styled.input`
  border: none;
  color: ${({ theme }) => theme.gray200};
  background-color: ${({ theme }) => theme.gray900};
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  outline-color: ${({ theme }) => theme.green700};
`

export const Label = styled.label`
  font-size: 14px;
  color: ${({ theme }) => theme.gray200};
  padding: 8px;
`

export const Form = styled.form`
  height: 100%;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const FormGroup = styled.div`
  display: grid;
  gap: 15px;
  grid-template-columns: auto auto auto;
`

export const GroupButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
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
