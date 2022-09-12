import styled, { keyframes } from 'styled-components'

const load = keyframes`
   20% {
      background-size: 10.1px 60%, 10.1px 100%, 10.1px 100%;
   }

   40% {
      background-size: 10.1px 80%, 10.1px 60%, 10.1px 100%;
   }

   60% {
      background-size: 10.1px 100%, 10.1px 80%, 10.1px 60%;
   }

   80% {
      background-size: 10.1px 100%, 10.1px 100%, 10.1px 80%;
   }
`

export const Container = styled.div`
  width: 50.4px;
  height: 44.8px;
  --c: linear-gradient(#4141ff 0 0);
  background: var(--c) 0% 100%, var(--c) 50% 100%, var(--c) 100% 100%;
  background-size: 10.1px 100%;
  background-repeat: no-repeat;
  animation: ${load} 1s infinite linear;
`
