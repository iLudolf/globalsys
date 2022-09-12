import styled, { keyframes } from 'styled-components'

const slideInFromLeft = keyframes`
 0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
  `

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

export const Header = styled.div`
  width: 100%;
  max-height: 1100px;
  display: flex;
  justify-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  margin-top: 80px;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Logo = styled.img`
  width: 210px;
`

export const Title = styled.span`
  color: ${({ theme }) => theme.grayMedium};
  margin-top: 15px;
  margin-bottom: 50px;
  font-size: 1.5rem;
  line-height: 1.25;
`

export const Emphasis = styled.strong`
  color: ${({ theme }) => theme.blue200};
`

export const FormGroup = styled.div`
  margin: auto;
  padding: 35px;
  width: 400px;
  border-radius: 5px;
  animation: 0.5s ease-out 0s 1 ${slideInFromLeft};
  background-color: #f4f5f7;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.24);
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.14);
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
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
  background-color: ${({ theme }) => theme.blue500};
  text-transform: uppercase;
  padding: 15px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 14px;
  color: ${({ theme }) => theme.white};
  &:hover {
    background-color: ${({ theme }) => theme.blue200};
  }
`

export const ReturnPage = styled.a`
  text-align: center;
  margin-top: 20px;
  text-decoration: none;
  color: ${({ theme }) => theme.gray200};

  &:hover {
    text-decoration: underline;
  }
`
