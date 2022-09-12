import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
 0% {
    opacity: 0;
  }
  100% {
    visibility: visible;
    opacity: 1;
  }
`

const slideInFromLeft = keyframes`
 0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
  `

interface Props {
  color: string
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Section = styled.section``

export const Card = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: red;
  animation: 0.5s ease-out 0s 1 ${slideInFromLeft};

  background: rgb(0, 52, 87);
  margin-top: 55px;
  margin-bottom: 55px;

  background: ${({ theme }) => theme.grayMedium};
  border: 1px solid ${({ theme }) => theme.gray600};
  filter: drop-shadow(1px 5px 19px #000);
  border: 1.5px solid ${({ theme }) => theme.gray500};
  padding: 15px;
`

export const CardInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const TitleCardInfo = styled.h1`
  color: ${({ theme }) => theme.shape};
  font-size: 30px;
  animation: 0.5s ease-out 0s 1 ${fadeIn};
  color: ${({ theme }) => theme.gray100};
`

export const DescriptionCardInfo = styled.p`
  color: ${({ theme }) => theme.gray200};
  font-size: 20px;
`

export const Person = styled.img`
  max-height: 290px;
  margin-right: 50px;
  margin-top: 50px;
  animation: 0.5s ease-out 0s 1 ${fadeIn};
`
