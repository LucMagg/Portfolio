import React, { createContext, useState, useMemo, useEffect } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { useTranslation } from 'react-i18next'

import { lightTheme, darkTheme } from '../../data/Theme/themes'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { AppContainer, GlobalStyle, Main } from './Wrappers'
import '../../data/Translation/i18n'
import { history } from '../../assets/history'


type LayoutTypes = {
    children?: React.ReactNode
}

type Theme = typeof lightTheme

type ThemeContextTypes = {
  theme: Theme,
  setTheme: (arg: Theme) => void
}

export const ThemeContext = createContext<ThemeContextTypes>({
  theme: localStorage.getItem('data-theme') === 'dark' ? darkTheme : lightTheme,
  setTheme: () => {}
})


export default function Layout({ children }: LayoutTypes) {
  const [theme, setTheme] = useState(localStorage.getItem('data-theme') === 'dark' ? darkTheme : lightTheme);

  const value = useMemo(
    () => ({ theme, setTheme }),
    [theme, setTheme]
  )

  const { i18n } = useTranslation()

  useEffect(() => {
    let scrollPosition = 0;

    const handleLanguageChange = () => {
      scrollPosition = window.scrollY || document.documentElement.scrollTop;
    };

    const restoreScrollPosition = () => {
      requestAnimationFrame(() => {
        window.scrollTo(0, scrollPosition);
      });
    };

    i18n.on('languageChanged', handleLanguageChange);
    window.addEventListener('load', restoreScrollPosition);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
      window.removeEventListener('load', restoreScrollPosition);
    };
  }, [i18n]);

  history.navigate = useNavigate()
  history.location = useLocation()

  return (
    <ThemeContext.Provider value={ value }>
      <ThemeProvider theme={ theme }>
        <GlobalStyle />
        <AppContainer>
          <Header />
          <Main>
            {children ?? <Outlet />}
          </Main>
          <Footer />
        </AppContainer>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}