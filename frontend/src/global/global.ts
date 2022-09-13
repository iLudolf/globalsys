import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}

:focus{
  outline: 0;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 152px;
}

@font-face {
  font-family: Poppins-Regular;
  src: url("../public/assets/Fonts/Poppins/Poppins-Regular.ttf");
}



body {
  @font-face {
  font-family: Poppins-Regular;
  src: url("../public/assets/Fonts/Poppins/Poppins-Regular.ttf");
}

  font-family: Poppins-Regular, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color:  ${({ theme }) => theme.backgroundPrimary};
  color: ${({ theme }) => theme.textTertiary};
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
  monospace;
}

`
