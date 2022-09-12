import styled from 'styled-components'

export const Container = styled.div`
  padding: 10px;
  background: ${({ theme }) => theme.grayMedium};
  border: 1px solid ${({ theme }) => theme.gray600};
  filter: drop-shadow(1px 5px 19px #000);
  border: 1.5px solid ${({ theme }) => theme.gray500};
  z-index: 0; ;
`

export const Title = styled.strong`
  font-size: 30px;
  font-weight: bold;
  color: ${({ theme }) => theme.gray50};
  padding-left: 10px;
  padding-right: 10px;

  @media screen and (min-width: 1001px) and (max-width: 1200px) {
    padding-left: 5px;
    padding-right: 5px;
    font-size: 25px;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const CardDescripiton = styled.p`
  color: ${({ theme }) => theme.gray300};
  text-align: start;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 20px;
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
  height: 140px;
`

export const ProfileImage = styled.img`
  object-fit: cover;
  width: 90px;
  height: 90px;
  border-radius: 100%;
  padding: 5px;
  border: 2px solid white;
`

export const Occupation = styled.span``

export const Header = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`

export const Info = styled.div`
  display: flex;
  align-items: flex-end;

  background: rgb(1, 179, 126);
  background: linear-gradient(
    90deg,
    rgba(1, 179, 126, 1) 1%,
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
  border-radius: 5px;
`

export const InfoGeral = styled.div`
  display: flex;
  align-items: flex-end;

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
  border-radius: 5px;
`

export const Span = styled.span`
  font-size: 10px;
  text-transform: uppercase;
`

export const Button = styled.a`
  min-width: 80px;
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

export const Group = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 25px;
  border-top: 1px solid ${({ theme }) => theme.gray300};
  padding: 25px 0px 15px 0px;
`

export const Hr = styled.hr`
  background-color: ${({ theme }) => theme.gray500};
  border: 0px transparent;
  height: 1px;
  margin-bottom: 10px;
  margin-top: 10px;
`

export const Office = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.gray300};

  &:hover {
    color: ${({ theme }) => theme.gray200};
  }
`
