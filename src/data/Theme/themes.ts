type commonThemeTypes = {
  headingFont: string
  textFont: string
  mobileBreakpoint: number
  tabletBreakpoint: number
  headerNormalHeight: number
  headerMobileHeight: number
}

export const commonTheme: commonThemeTypes = {
  headingFont: '"Exo 2", sans-serif',
  textFont: '"Alegreya Sans", sans-serif',
  mobileBreakpoint: 768,
  tabletBreakpoint: 1024,
  headerNormalHeight: 130,
  headerMobileHeight: 80
}

export type themeTypes = commonThemeTypes & {
  name: string
  mainBackGroundColor: string
  headerBackGroundColor: string
  componentBackGroundColor: string
  onHoverBackGroundColor: string
  onFocusBackGroundColor: string
  componentsBorderColor: string
  interactiveComponentsBorderColor: string
  focusRingColor: string
  textColor: string
  highContrastTextColor: string
}

export const lightTheme: themeTypes = {
  ...commonTheme,
  name: 'light',
  mainBackGroundColor: '#FFFCFC',
  headerBackGroundColor: '#FFF7F7',
  componentBackGroundColor: '#FEEBEC',
  onHoverBackGroundColor: '#FFDBDC',
  onFocusBackGroundColor: '#FFCDCE',
  componentsBorderColor: '#FDBDBE',
  interactiveComponentsBorderColor: '#F4A9AA',
  focusRingColor: '#EB8E90',
  textColor: '#CE2C31',
  highContrastTextColor: '#641723'
}

export const darkTheme: themeTypes = {
  ...commonTheme,
  name: 'dark',
  mainBackGroundColor: '#191111',
  headerBackGroundColor: '#201314',
  componentBackGroundColor: '#3B1219',
  onHoverBackGroundColor: '#500F1C',
  onFocusBackGroundColor: '#611623',
  componentsBorderColor: '#72232D',
  interactiveComponentsBorderColor: '#8C333A',
  focusRingColor: '#B54548',
  textColor: '#FF9592',
  highContrastTextColor: '#FFD1D9'
}