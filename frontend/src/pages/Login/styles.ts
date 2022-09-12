import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  background-image: url('./assets/Svg/circle.svg');
  background-repeat: no-repeat;
  background-position: 80%;
  border-radius: 5px;
  background-size: contain;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ExampleApp = styled.img`
  margin-top: 40px;
`

export const Header = styled.div`
  width: 100%;
  max-height: 1100px;
  display: flex;
  justify-items: center;
  justify-content: space-evenly;
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
`

export const Info = styled.div`
  max-width: 640px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: flex-start;
  text-align: start;
`

export const Logo = styled.img`
  width: 210px;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.gray800};
  margin-top: 80px;
  font-size: 2.5rem;
  line-height: 1.25;
`

export const InfoDescription = styled.p`
  margin-top: 16px;
  color: ${({ theme }) => theme.gray800};
  line-height: 1.7;
`

export const Emphasis = styled.strong`
  font-size: 40px;
  color: ${({ theme }) => theme.blue200};
`

export const FormGroup = styled.div`
  min-width: 400px;
  padding: 35px;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.24);
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.14);
`

export const FormTitle = styled.strong`
  color: ${({ theme }) => theme.gray800};
  display: block;
  font-size: 25px;
  margin-bottom: 24px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2;
  width: 100%;
`

export const Input = styled.input`
  border: none;
  color: ${({ theme }) => theme.gray900};
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 10px;
  font-size: 16px;
  outline-color: ${({ theme }) => theme.gray900};

  background-color: ${({ theme }) => theme.backgroundSecondary};
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.24);
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.14);
`

export const Button = styled.button`
  border: none;
  margin-top: 16px;
  background-color: ${({ theme }) => theme.blue200};
  text-transform: uppercase;
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 14px;
  color: ${({ theme }) => theme.white};
  &:hover {
    background-color: ${({ theme }) => theme.blue500};
  }
  display: flex;
  justify-content: center;
`

export const ResetPassword = styled.a`
  text-align: start;
  text-decoration: none;
  color: ${({ theme }) => theme.blue200};

  &:hover {
    color: ${({ theme }) => theme.blue500};
  }
`

export const NewAccount = styled.a`
  text-align: start;
  text-decoration: none;
  color: ${({ theme }) => theme.blue500};
  padding-left: 5px;
  &:hover {
    color: ${({ theme }) => theme.blue200};
  }
`

export const NewAccountDescripition = styled.a`
  margin-top: 15px;
  text-align: start;
  text-decoration: none;
  color: ${({ theme }) => theme.gray100};
`

export const Error = styled.p`
  display: flex;
  justify-content: start;
  color: ${({ theme }) => theme.attention};
`
