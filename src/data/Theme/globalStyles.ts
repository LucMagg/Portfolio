import styled, { css } from 'styled-components'


/***** TEXTES *****/
const TextColor = css`
  color: ${(props) => props.theme.textColor};
  @media (prefers-contrast: more) {
    color: ${(props) => props.theme.highContrastTextColor};
  }
`

export const Heading2 = css`
  ${TextColor};
  font-family: ${(props) => props.theme.headingFont};
  font-weight: 700;
  font-size: 36px;

  @media (max-width: ${(props) => props.theme.mobileBreakpoint}px) {
    font-size: 30px;
  }  
`

export const Heading3 = css`
  ${TextColor};
  font-family: ${(props) => props.theme.headingFont};
  font-weight: 500;
  font-size: 24px;
  
  @media (max-width: ${(props) => props.theme.tabletBreakpoint}px) {
    font-size: 18px;
  }  
`

export const Text = css`
  ${TextColor};
  font-family: ${(props) => props.theme.textFont};
  font-weight: 400;
  font-size: 18px;

  @media (max-width: ${(props) => props.theme.tabletBreakpoint}px) {
    font-size: 16px;
  }
`

export const SmallText = css`
  ${TextColor};
  font-family: ${(props) => props.theme.textFont};
  font-weight: 300;
  font-size: 14px;
`


/***** Backgrounds *****/
export const MainBackground = css`
  background-color: ${(props) => props.theme.mainBackGroundColor};
`

export const ComponentsBackground = css`
  background-color: ${(props) => props.theme.componentBackGroundColor};

  &:hover {
    background-color: ${(props) => props.theme.onHoverBackGroundColor};
  }

  &:focus {
    background-color: ${(props) => props.theme.onFocusBackGroundColor};
  }
`


/***** Borders *****/
export const ComponentsBorder = css`
  border-color: ${(props) => props.theme.componentsBorderColor};
`

export const InteractiveComponentsBorder = css`
  border-color: ${(props) => props.theme.interactiveComponentsBorderColor};
`

export const focusRingBorder = css`
  border-color: ${(props) => props.theme.focusRingColor};
`


/***** Base Components *****/
export const Button = styled.button`
  ${ComponentsBackground};
  ${InteractiveComponentsBorder};
  border-radius: 15px;

  &:focus {
    outline-offset: 2px;
    border-radius: 15px;
    ${focusRingBorder}
    transition: color 0s;
  }
`