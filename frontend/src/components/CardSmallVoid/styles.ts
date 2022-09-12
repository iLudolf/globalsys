import styled from 'styled-components'

export const Container = styled.div`
  padding: 15px;
  background: ${({ theme }) => theme.grayMedium};
  border: 1px solid ${({ theme }) => theme.gray600};
  filter: drop-shadow(1px 5px 19px #000);
  margin-top: 65px;
  border: 1.5px solid ${({ theme }) => theme.gray500};
`

export const Title = styled.strong`
  font-size: 30px;
  font-weight: bold;
  color: ${({ theme }) => theme.gray50};
  padding-left: 10px;
  padding-right: 10px;
`

export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const CardDescripiton = styled.p`
  text-align: start;
  margin-bottom: 50px;
  color: ${({ theme }) => theme.gray200};
`

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Label = styled.label`
  padding-right: 10px;
  color: ${({ theme }) => theme.gray200};
`

export const BtnAcess = styled.a`
  text-decoration: none;
  padding: 10px 15px 10px 15px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.gray600};
  color: ${({ theme }) => theme.gray100};
  font-size: 15px;
  &:hover {
    background-color: ${({ theme }) => theme.gray500};
  }
`

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 10px;
`

export const ProfileImage = styled.img`
  width: 90px;
  border-radius: 100%;
  padding: 5px;
  border: 2px solid white;
`

export const Office = styled.span``

export const Header = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`

export const Info = styled.div`
  display: flex;
  align-items: flex-end;
  width: 40%;
  background: rgb(38, 103, 118);
  background: linear-gradient(
    90deg,
    rgba(38, 103, 118, 1) 15%,
    rgba(32, 32, 36, 1) 85%
  );
  padding: 8px;
  content: '';
  display: inline-block;
  transform: skewX(-5deg);
  -ms-transform: skewX(-5deg);
  -webkit-transform: skewX(-5deg);
  -o-transform: skewX(-5deg);
  -moz-transform: skewX(-5deg);
`

export const Span = styled.span`
  font-size: 12px;
  text-transform: uppercase;
`
