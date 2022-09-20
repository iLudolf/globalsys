import styled from 'styled-components'

interface Props {
  color: string
}

export const Container = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.gray200};
`

export const VerticalBar = styled.div<Props>`
  width: 10px;
  height: 50px;
  margin-top: 2px;
  padding-left: 10px;
  border-right: 8px solid ${({ color }) => color};
  border-radius: 1px;

  @media screen and (max-width: 400px) {
    width: 5px;
    height: 25px;
  }
`

export const Description = styled.span`
  color: #413f40;
  padding-left: 10px;
  font-size: 20px;
  font-weight: 500;
`
