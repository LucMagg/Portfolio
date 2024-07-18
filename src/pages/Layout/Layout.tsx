import React, { createContext, useState, useMemo, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { useTranslation } from 'react-i18next'

import { lightTheme, darkTheme } from '../../data/Theme/themes'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { AppContainer, GlobalStyle, Main } from './Wrappers'
import '../../data/Translation/i18n'
import OldSchoolBackground from '../../components/OdlSchoolBackground/OldSchoolBackground'
import { FooterProvider } from '../../hooks/useFooterContext'


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

  return (
    <ThemeContext.Provider value={ value }>
      <ThemeProvider theme={ theme }>
        <FooterProvider>
          <GlobalStyle />
          <AppContainer>
            <Header />
            <Main>
              {children ?? <Outlet />}
              <OldSchoolBackground quadNumber={ 2 } speed={ 200 } streakNumber={ 5 } />
            </Main>
            <Footer />
          </AppContainer>
        </FooterProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}