import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const TitleSection = styled.h1`
  text-align: start;
`

export const Group = styled.form`
  width: 110vh;
  min-width: 550px;
  padding: 10px;
`

export const List = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 0.2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background-color: ${({ theme }) => theme.backgroundTertiary};
      padding: 1rem;
      text-align: left;
      color: ${({ theme }) => theme.gray100};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 40%;
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${({ theme }) => theme.backgroundSecondary};
      border-top: 4px solid ${({ theme }) => theme.backgroundSecondary};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;
      text-align: left;

      &:first-child {
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`

export const ElementCircle = styled.div`
  padding-left: 30%;
`

export const GroupProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Profile = styled.img`
  border-radius: 100%;
  width: 30px;
  height: 30px;
  border: 2px solid ${({ theme }) => theme.shape};
  padding: 2px;
  margin-right: 10px;
`
