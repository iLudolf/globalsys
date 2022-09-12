import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.shape};

  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.gray100};
  margin-bottom: 10px;

  -webkit-box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.28);
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.28);
`

export const Title = styled.p`
  opacity: 0.5;
`

export const Hr = styled.hr`
  width: 100%;
  color: ${({ theme }) => theme.gray100};
  opacity: 0.5;
`
