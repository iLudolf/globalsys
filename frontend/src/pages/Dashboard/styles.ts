import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

  @media screen and (max-width: 400px) {
    padding-top: 0.25rem;
    width: 100vh;
  }
`

export const Logo = styled.img`
  width: 210px;
`

export const Options = styled.div`
  padding: 9px;
  display: inline-block;
  vertical-align: middle;
`

export const OptionsSelected = styled.div`
  padding: 9px;
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  border-bottom: 4px solid #00528a;
  right: 100%;
`
export const TitleSelected = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.gray800};
  font-weight: bold;

  &:hover {
    color: ${({ theme }) => theme.blue700};
  }
`

export const Title = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.gray500};
  font-weight: bold;
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

export const Group = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 400px) {
    display: none;
  }
`

export const Section = styled.section`
  min-height: 100%;
  padding: 50px;
`

export const CardInfo = styled.div`
  width: 100%;
  height: 150px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 400px) {
    flex-direction: column;
    height: 50%;
  }
`

export const TitleCardInfo = styled.h1`
  font-size: 35px;
  font-weight: bold;
  padding-right: 20px;
  color: ${({ theme }) => theme.textTertiary};
`

export const DescriptionCardInfo = styled.p`
  color: ${({ theme }) => theme.gray200};
  font-size: 20px;
  color: ${({ theme }) => theme.textTertiary};
`

export const Mascote = styled.img`
  max-height: 320px;
  margin-right: 50px;
  margin-top: 50px;
`

export const Card = styled.div`
  max-width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
`

export const GroupDescription = styled.div`
  text-align: start;
  margin-right: 5px;
  @media screen and (max-width: 400px) {
    display: none;
  }
`

export const GroupCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

// https://cssgradient.io/
// https://webcode.tools/generators/css/drop-shadow

export const ReturnToLastClass = styled.a`
  min-width: 450px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.backgroundSecondary};
  border-radius: 10px;
  padding: 30px;
  text-decoration: none;
  color: ${({ theme }) => theme.gray100};

  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
  -webkit-box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.24);
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.14);
`

export const CardProfile = styled.div`
  width: 50%;
  height: 60vh;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.24);
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.14);
  @media screen and (max-width: 400px) {
    width: 350px;
    height: 60vh;
  }
`

export const GroupCards = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  margin-top: 15px;

  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
`

export const CardHeader = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: row;
`

export const CardProfileImage = styled.img`
  border: 4px solid ${({ theme }) => theme.backgroundTertiary};
  padding: 4px;
  border-radius: 100%;
  width: 130px;
`
export const NameProfile = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: ${({ theme }) => theme.textTertiary};
`

export const InforProfile = styled.span`
  color: ${({ theme }) => theme.textSecondary};
  margin-top: 25px;
`

export const BtnOpenMenu = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.textPrimary};
  height: 40px;
  max-height: 60px;
  background-color: ${({ theme }) => theme.backgroundInfo};
  border-radius: 5px;
  cursor: pointer;
  border: none;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.backgroundInfo};
  }

  text-transform: uppercase;
  font-weight: bold;
`

export const LastClassName = styled.div`
  display: flex;
  flex-direction: column;
`

export const NameClass = styled.strong`
  margin: 0;
  padding: 0;
  font-size: 20px;
  color: ${({ theme }) => theme.textQuinary};
`

export const DescriptionClass = styled.p`
  color: ${({ theme }) => theme.textQuinary};
  margin: 0;
  padding: 0;
`

export const ReturnVideo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
`
export const TitleReturnVideo = styled.span`
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textQuaternary};
  padding-right: 10px;
`

export const GroupInfoProfile = styled.div`
  padding-left: 20px;
  display: flex;
  text-align: start;
  flex-direction: column;
  justify-content: space-between;
`

export const SeparateLine = styled.hr`
  border: 1px solid ${({ theme }) => theme.backgroundSecondary};
`

export const Info = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  padding: 25px;
`
