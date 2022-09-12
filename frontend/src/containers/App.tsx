import React, { useState, useEffect } from 'react'
import { Container } from './styles'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Routers from '../routes/Routers'
import darkTheme from '../global/themes/darkTheme'
// import { lightTheme } from '../global/themes/lightTheme'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../global/global'

function App() {
  const [theme, setTheme] = useState('dark')

  // const themeToggler = () => {
  //   theme === 'light' ? setTheme('dark') : setTheme('light')
  // }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('dark-theme')
    localTheme && setTheme(localTheme)
    console.log(theme)
  }, [])

  return (
    <ThemeProvider theme={theme === 'light' ? darkTheme : darkTheme}>
      <Container>
        <ToastContainer />
        <Routers />
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App

// https://www.smashingmagazine.com/2020/04/dark-mode-react-apps-styled-components/
