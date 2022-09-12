import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 60vh;
  background-color: ${({ theme }) => theme.grayMedium};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.gray500};
  margin-bottom: 10px;
  -webkit-box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.28);
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.28);
`
export const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
  color: ${({ theme }) => theme.gray100};
`

export const Hr = styled.hr`
  width: 100%;
  color: ${({ theme }) => theme.gray500};
  opacity: 0.2;
`

export const Group = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
`
