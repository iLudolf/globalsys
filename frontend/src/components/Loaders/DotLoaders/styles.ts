import styled, { keyframes } from 'styled-components'

interface Props {
  color: string
}

const load = keyframes`
    20% {
      background-position: 0%   0%, 50%  50%,100%  50%;
   }

   40% {
      background-position: 0% 100%, 50%   0%,100%  50%;
   }

   60% {
      background-position: 0%  50%, 50% 100%,100%   0%;
   }

   80% {
      background-position: 0%  50%, 50%  50%,100% 100%;
   }
`

export const Container = styled.div<Props>`
  width: 56px;
  height: 26.9px;
  background: radial-gradient(
        circle closest-side,
        ${({ color }) => color} 90%,
        #0000
      )
      0% 50%,
    radial-gradient(circle closest-side, ${({ color }) => color} 90%, #0000) 50%
      50%,
    radial-gradient(circle closest-side, ${({ color }) => color} 90%, #0000)
      100% 50%;
  background-size: calc(100% / 3) 8px;
  background-repeat: no-repeat;
  animation: ${load} 1s infinite linear;
`
