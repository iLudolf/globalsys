import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

interface Props {
  color: string
}

interface PropsSearch {
  status: boolean
}

interface isSelect {
  id: string
  select: string
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

const scaleUpHorRight = keyframes`
0% {
    -webkit-transform: scaleX(0.4);
            transform: scaleX(0.4);
    -webkit-transform-origin: 100% 100%;
            transform-origin: 100% 100%;
  }
  100% {
    -webkit-transform: scaleX(1);
            transform: scaleX(1);
    -webkit-transform-origin: 100% 100%;
            transform-origin: 100% 100%;
  }
`

const scaleUp = keyframes`
/* ----------------------------------------------
/* ----------------------------------------------
 * Generated by Animista on 2022-6-18 13:21:40
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */
0%{transform:scaleY(.4);transform-origin:100% 0}100%{transform:scaleY(1);transform-origin:100% 0}
`

export const Container = styled.div`
  width: 100%;
  animation: 0.5s ease-out 0s 1 ${fadeIn};
`

export const Navbar = styled.div`
  position: fixed;
  width: 100%;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  background: ${({ theme }) => theme.grayMedium};
  border-bottom: 1px solid ${({ theme }) => theme.gray600};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  justify-content: space-evenly;

  filter: drop-shadow(0px 20px 16px #000);
`

export const GroupLog = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  text-decoration: none;
  color: ${({ theme }) => theme.gray200};
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

export const Options = styled.div`
  padding: 9px;
  display: inline-block;
  vertical-align: middle;
`

export const Title = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.gray300};
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
`

export const InputSearch = styled.input`
  color: ${({ theme }) => theme.gray100};
  font-size: 16px;
  border-radius: 5px;
  padding: 13px;
  margin-bottom: 10px;
  text-decoration: none;
  outline: none !important;
  border: 1.5px solid ${({ theme }) => theme.gray500};
  padding-left: 10vh;
  background-color: ${({ theme }) => theme.gray900};
  background-origin: content-box;
  background: url('./assets/Svg/search.svg') no-repeat 5% 50%;
  background-size: 20px;
  animation: 0.2s ${scaleUpHorRight};
  min-width: 60vh;
`

export const ModalSearch = styled.div<PropsSearch>`
  display: ${({ status }) => (status ? 'block' : 'none')};
  position: Absolute;
  top: 80px;
  width: 71vh;
  min-height: 260px;
  max-height: 483.65px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.grayMedium};
  border: 1.5px solid ${({ theme }) => theme.gray500};
  -webkit-box-shadow: 1px 1px 16px -1px rgba(0, 0, 0, 0.23);
  box-shadow: 1px 1px 16px -1px rgba(0, 0, 0, 0.23);
  padding: 3px;
  z-index: 2;
  @media (max-width: 900px) {
    width: 285px;
  }
  animation: ${scaleUp} 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`

export const Section = styled.section`
  min-width: 100vh;
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

export const Menu = styled.div`
  position: fixed;
  float: left;
  left: 30px;
  top: 160px;
  min-width: 350px;
  background-color: ${({ theme }) => theme.grayMedium};
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 2px;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 120px;
  min-width: 700px;
`
export const Element = styled.a<isSelect>`
  text-decoration: none;
  padding: 15px;
  display: flex;
  align-items: flex-start;
  border-left: 5px solid transparent;

  &:hover {
    background-color: ${({ theme }) => theme.gray500};
  }
  padding-left: 50px;
  color: ${({ theme }) => theme.gray100};
  border-left: ${({ select, id }) => select === id && '5px solid #2058a4'};
`

export const GenericSectionElement = styled.section`
  width: 100%;
  margin-top: 20px;
  background-color: ${({ theme }) => theme.grayMedium};
  border-radius: 5px;
  padding: 20px;
`

// https://cssgradient.io/
// https://webcode.tools/generators/css/drop-shadow

export const Space = styled.div`
  min-width: 300px;
`
