import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 60vh;
  border-radius: 10px;
  margin-bottom: 10px;
  -webkit-box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.28);
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.28);

  background-color: ${({ theme }) => theme.backgroundSecondary};
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.24);
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.14);
`
export const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
  color: ${({ theme }) => theme.textQuaternary};
`

export const Hr = styled.hr`
  width: 100%;
  color: ${({ theme }) => theme.textTertiary};
`

export const Group = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
`
