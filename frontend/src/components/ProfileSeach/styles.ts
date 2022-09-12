import styled from 'styled-components'

interface Props {
  type: 'seguranca' | 'geral'
}

export const Container = styled.a`
  margin-top: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.gray500};
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 3px;
  text-decoration: none;
  color: ${({ theme }) => theme.gray200};
`

export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  align-items: flex-end;
  object-fit: cover;
  border-radius: 100%;
  padding: 2px;
  border: 2px solid white;
`

export const Group = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const Title = styled.strong`
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  color: ${({ theme }) => theme.gray100};
`

export const Office = styled.span`
  font-size: 14px;
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  align-items: flex-start;
`

export const Tag = styled.p<Props>`
  font-size: 13px;

  padding: 8px;
  content: '';
  display: inline-block;
  transform: skewX(-5deg);
  -ms-transform: skewX(-5deg);
  -webkit-transform: skewX(-5deg);
  -o-transform: skewX(-5deg);
  -moz-transform: skewX(-5deg);
  border-radius: 5px;
  color: ${({ theme }) => theme.gray300};
  background: rgb(9, 9, 10);
  background: linear-gradient(
    90deg,
    rgba(32, 32, 36, 1) 0%,
    rgba(9, 9, 10, 1) 83%
  );

  &:hover {
    color: ${({ theme }) => theme.gray100};
    background: ${({ type }) =>
      type === 'seguranca' ? 'rgb(1,179,126)' : 'rgba(38,103,118,1)'};
    background: ${({ type }) =>
      type === 'seguranca'
        ? 'linear-gradient(90deg, rgba(1,179,126,1) 0%, rgba(32,32,36,1) 83%)'
        : 'linear-gradient(90deg, rgba(38,103,118,1) 0%, rgba(32,32,36,1) 83%)'};
  }
`
