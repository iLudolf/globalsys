import styled from 'styled-components'

interface Props {
  color: string
}

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.gray600};
  position: fixed;
  z-index: 1;
`

export const ContainerLogo = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const GroupLog = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 15px;
`

export const VerticalBar = styled.div<Props>`
  width: 10px;
  height: 55px;
  margin-top: 2px;
  padding-left: 15px;
  border-right: 8px solid ${({ color }) => color};
  border-radius: 1px;
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
`
