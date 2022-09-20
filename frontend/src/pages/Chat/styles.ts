import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

const slideInFromLeft = keyframes`
 0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
  `

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
`

export const Logo = styled.img`
  width: 210px;
`

export const Options = styled.div`
  height: 100%;
  padding: 9px;
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;
  border: 2px transparent;

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    left: 0;
    right: 100%;
    bottom: 0;
    background: #287add;
    height: 4px;
    -webkit-transition-property: right;
    transition-property: right;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }

  &:hover:before {
    right: 0;
  }
`

export const Title = styled.a`
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  color: ${({ theme }) => theme.textTertiary};

  &:hover {
    color: #287add;
  }
`

export const GroupSignUp = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: 10px;
`

export const SignUp = styled.p`
  display: block;
  color: ${({ theme }) => theme.shape};
  text-decoration: none;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  padding: 0px;
  margin: 0px;
`

export const Section = styled.section`
  border-radius: 100px;
`

export const CardInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 25px;
`

export const TitleCardInfo = styled.h1`
  color: #4c4b4d;
  font-size: 40px;
  animation: 0.5s ease-out 0s 1 ${fadeIn};
`

export const DescriptionCardInfo = styled.p`
  color: ${({ theme }) => theme.gray600};
  font-size: 20px;
`

export const Person = styled.img`
  max-height: 290px;
  margin-right: 50px;
  margin-top: 50px;
  animation: 0.5s ease-out 0s 1 ${fadeIn};
`

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  animation: 0.5s ease-out 0s 1 ${slideInFromLeft};
  background: rgb(40, 122, 221);
  background: rgb(0, 52, 87);
  background: linear-gradient(
    90deg,
    rgba(40, 122, 221, 1) 6%,
    rgba(255, 255, 255, 1) 65%
  );
  margin-top: 55px;
  margin-bottom: 55px;
  padding: 35px;
`
// https://cssgradient.io/
// https://webcode.tools/generators/css/drop-shadow

export const Body = styled.main`
  background-color: ${({ theme }) => theme.backgroundSecondary};
`
export const Haader = styled.header`
  width: 100%;
  height: 50px;
`
export const Group = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const GroupConversations = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
`

export const Conversations = styled.div`
  width: 40%;
  height: 100vh;
  padding: 2px;
`

export const Message = styled.div`
  width: 100%;
  height: 100vh;
  padding: 15px;
  background-color: ${({ theme }) => theme.backgroundPrimary};
`
export const InfoConversations = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  border-top-left-radius: 10px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  padding: 13px;
  border: 1px solid transparent;
  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.gray200};
    cursor: pointer;
  }
`

export const ProfileImage = styled.img`
  width: 70px;
  border-radius: 999px;
`
export const MessageCurrent = styled.span`
  color: ${({ theme }) => theme.textMuted};
`

export const Name = styled.strong`
  margin-bottom: 10px;
`

export const Date = styled.span`
  font-size: 15px;
  margin: 0;
  margin-bottom: 10px;
`

export const AmountMessage = styled.span`
  font-size: 15px;
  padding: 10px;
  border-radius: 99px;
  background-color: ${({ theme }) => theme.secondary_light};
  margin: 0;
  padding: 0;
`
export const InfoMessage = styled.div``

export const InfoProfile = styled.div`
  flex: 1;
  align-items: flex-start;
  padding-left: 10px;
`
