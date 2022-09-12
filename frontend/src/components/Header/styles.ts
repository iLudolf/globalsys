import styled from 'styled-components'

interface Props {
  color: string
}

export const Container = styled.div`
  width: 100%;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  background: ${({ theme }) => theme.grayMedium};
  border-bottom: 1px solid ${({ theme }) => theme.gray600};
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
