import styled from 'styled-components'

interface Props {
  color: string
}

export const Container = styled.div`
  min-height: 100vh;
  background-image: url('./assets/background/FrameBlue.png');
  background-size: cover;
  background-repeat: no-repeat;
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

export const GroupHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Logo = styled.img`
  width: 210px;
`

export const VerticalBar = styled.div<Props>`
  width: 10px;
  height: 50px;
  margin-top: 2px;
  padding-left: 1px;
  border-right: 8px solid ${({ color }) => color};
  border-radius: 1px;
`

export const Description = styled.span`
  @font-face {
    font-family: Roboto-Light;
    src: url('./assets/Fonts/Roboto/Roboto-Light.ttf');
  }

  font-family: Roboto-Light;
  padding-left: 10px;
  font-size: 20px;
`

export const Title = styled.h1`
  margin-top: 80px;
  font-size: 2.5rem;
  line-height: 1.25;
`

export const InfoDescription = styled.p`
  margin-top: 16px;
  color: ${({ theme }) => theme.gray200};
  line-height: 1.7;
`

export const Emphasis = styled.strong`
  color: ${({ theme }) => theme.blue500};
`

export const FormGroup = styled.div`
  width: 25%;
  padding: 32px;
  background-color: ${({ theme }) => theme.grayMedium};
  border: 1px solid ${({ theme }) => theme.gray500};
  border-radius: 5px;
`

export const FormTitle = styled.strong`
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
  color: ${({ theme }) => theme.gray200};
  background-color: ${({ theme }) => theme.gray900};
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 10px;

  outline-color: ${({ theme }) => theme.green700};
`

export const Button = styled.button`
  border: none;
  margin-top: 16px;
  background-color: ${({ theme }) => theme.green500};
  text-transform: uppercase;
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 14px;
  color: ${({ theme }) => theme.white};
  &:hover {
    background-color: ${({ theme }) => theme.green700};
  }
`
