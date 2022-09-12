import styled from 'styled-components'

export const Container = styled.footer`
  padding: 50px;
  max-width: 100%;
  background-color: ${({ theme }) => theme.grayMedium};
`

export const Hr = styled.hr`
  border: 1px solid ${({ theme }) => theme.grayMedium};
  margin: 0px;
  padding: 0px;
`

export const Group = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding-top: 20px;
`

export const Logo = styled.img`
  width: 200px;
  @media screen and (max-width: 400px) {
    width: 150px;
  }
`

export const Link = styled.a`
  margin-left: 10px;
  margin-right: 10px;
  text-decoration: none;
  color: ${({ theme }) => theme.shape};

  &:hover {
    color: ${({ theme }) => theme.gray100};
  }

  @media screen and (max-width: 400px) {
    font-size: 12px;
    margin-left: 2px;
    margin-right: 2px;
  }
`
