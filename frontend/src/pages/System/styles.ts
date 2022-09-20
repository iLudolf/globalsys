import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

export interface PropsSelecte {
  identifier?: number | null
  select?: number | null
}

const fadeIn = keyframes`
 0% {
    opacity: 0;
  }
  100% {
    visibility: visible;
    opacity: 1;
  }
  `

export const Container = styled.div`
  width: 100%;
  animation: 0.5s ease-out 0s 1 ${fadeIn};
  background-image: url('./assets/background/FrameBlueTwo.png');
  background-size: cover;
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 72px 40px 72px;
`

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 35px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.blue600};
  margin-bottom: 10px;
  color: ${({ theme }) => theme.shape};
  font-size: 15px;
  padding: 10px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.grayDark};
  }
`

export const LogoElement = styled.img`
  margin-bottom: 20px;
  width: 200px;
`

export const GroupChart = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  -webkit-box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.28);
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.28);
  padding: 10px;
  margin-bottom: 40px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.24);
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.14);
`

export const Chart = styled.div`
  width: 780px;
  min-width: 300px;
  height: 350px;
`

export const Title = styled.span`
  width: 100%;
  color: ${({ theme }) => theme.gray600};
  margin: 0;
  padding: 0;
  font-size: 18px;
`

export const Description = styled.p`
  color: ${({ theme }) => theme.gray300};
`

export const Navbar = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.backgroundPrimary};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  height: 80px;
  padding: 0px 30px;
  -webkit-box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.24);
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.14);

  @media screen and (max-width: 400px) {
    padding-top: 0.25rem;
    width: 100vh;
  }
`

export const Options = styled.div`
  padding: 9px;
  display: inline-block;
  vertical-align: middle;
`

export const Group = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 400px) {
    display: none;
  }
`

export const GroupButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const GroupSignUp = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: 10px;
`

export const TitleNavBar = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.gray300};
`
