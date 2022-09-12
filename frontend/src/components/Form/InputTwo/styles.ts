import styled from 'styled-components'

export const Container = styled.input`
  margin-top: 10px;
  padding: 10px;
  width: 90%;
  height: 15px;
  border-radius: 5px;
  font-size: 16px;
  border-width: 1px;
  border-color: #cccccc;
  border-style: solid;

  color: ${({ theme }) => theme.blue700};
  background-color: ${({ theme }) => theme.shape};
  opacity: 0.9;
  font-size: 16px;

  &:focus {
    outline: none !important;
    border: 1px solid #cccccc;
    box-shadow: 0 0 10px #719ece;
  }
`

export const Error = styled.p`
  width: 100%;
  height: 70px;
  background-color: red;
`
