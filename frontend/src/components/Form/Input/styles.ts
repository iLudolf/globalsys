import styled from 'styled-components'

interface SizeInput {
  sizeWidth: number
}
interface PropsError extends SizeInput {
  status: boolean
}

export const Container = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 5px;
  margin-right: 5px;
`

export const InputElement = styled.input<PropsError>`
  margin-top: 10px;
  padding: 10px;
  min-width: ${({ sizeWidth }) => sizeWidth}%;
  height: 15px;
  border-radius: 5px;
  font-size: 16px;
  border-width: 1px;
  border: none;
  box-shadow: 0px 0px 5px rgba(66, 66, 66, 0.75);
  color: ${({ theme }) => theme.gray100};
  background-color: ${({ theme }) => theme.gray700};
  font-size: 16px;
  border: 2px solid
    ${({ theme, status }) => (status ? theme.attention_light : theme.gray700)};
  &:focus {
    outline: none !important;
    border: 2px solid
      ${({ theme, status }) => (status ? theme.attention_light : '#2058a4')};
  }
`

export const Error = styled.p`
  width: 93%;
  color: ${({ theme }) => theme.attention};
  display: flex;
  flex-direction: row;
  margin: 6px 0 0 0;
  font-weight: 500;
  font-size: 13px;
`

export const Name = styled.label`
  font-size: 16px;
  color: ${({ theme }) => theme.gray300};
  font-weight: none;
`
