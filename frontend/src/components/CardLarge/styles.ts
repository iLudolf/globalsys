import styled from 'styled-components'

export interface PropsColor {
  color: string
}

export const Container = styled.div<PropsColor>`
  padding-top: 25px;
  padding-bottom: 25px;
  background: ${({ theme }) => theme.grayMedium};
  border-bottom: 1px solid ${({ theme }) => theme.gray600};

  &:hover {
    border: 1px solid ${({ color }) => color};
  }
  margin-bottom: 20px;
`

export const Card = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`

export const Title = styled.h1`
  font-weight: bold;
  color: ${({ theme }) => theme.gray100};
`

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const CardDescripiton = styled.p`
  margin-bottom: 50px;
  color: ${({ theme }) => theme.gray200};
`

export const ProgressBar = styled.progress`
  appearance: none;

  ::-webkit-progress-bar {
    background-color: ${({ theme }) => theme.gray600};
    width: 40vh;
    border-radius: 10px;
  }

  ::-webkit-progress-value {
    border-radius: 20px;
    background-color: ${({ theme }) => theme.blue200};
  }
`

export const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  width: 100%;
`

export const Label = styled.label`
  padding-right: 10px;
  color: ${({ theme }) => theme.gray200};
`

export const TitleTwo = styled.span`
  text-align: start;
  line-height: 30px;
  color: ${({ theme }) => theme.gray100};
`

export const CardHeaderLeft = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

export const List = styled.ul`
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: start;
  list-style: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.gray500};
`

export const ElementList = styled.li`
  text-indent: -0.7em;
  color: ${({ theme }) => theme.blue200};
  list-style-type: square;
`

export const Span = styled.span`
  padding-left: 5px;
  padding-right: 5px;
  color: ${({ theme }) => theme.gray200};
`
