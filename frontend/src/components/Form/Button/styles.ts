import styled from 'styled-components'

export const Container = styled.button`
  width: 105%;
  height: 45px;
  border-radius: 10px;
  font-size: 16px;
  border-width: 1px;
  border-color: #cccccc;
  border-style: solid;
  box-shadow: 0px 0px 5px rgba(66, 66, 66, 0.75);
  color: ${({ theme }) => theme.shape};
  background-color: black;

  font-size: 20px;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.grayDark};
  }
`
