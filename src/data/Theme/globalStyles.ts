import styled, { css } from 'styled-components'


/***** TEXTES *****/
const TextColor = css`
  color: ${ (props) => props.theme.textColor };
  @media (prefers-contrast: more) {
    color: ${ (props) => props.theme.highContrastTextColor };
  }
`

export const Heading2 = css`
  ${ TextColor };
  font-family: ${ (props) => props.theme.headingFont };
  font-weight: 700;
  font-size: 30px;

  @media (min-width: ${ (props) => props.theme.tabletBreakpoint }px) {
    font-size: 36px;
  }  
`

export const Heading3 = css`
  ${ TextColor };
  font-family: ${ (props) => props.theme.headingFont };
  font-weight: 500;
  font-size: 18px;
  
  @media (min-width: ${ (props) => props.theme.tabletBreakpoint }px) {
    font-size: 24px;
  }  
`

export const Text = css`
  ${ TextColor };
  font-family: ${ (props) => props.theme.textFont };
  font-weight: 400;
  font-size: 16px;

  @media (min-width: ${ (props) => props.theme.tabletBreakpoint }px) {
    font-size: 18px;
  }
`


/***** Backgrounds *****/
export const MainBackground = css`
  background-color: ${ (props) => props.theme.mainBackGroundColor };
`

export const ComponentsBackground = css`
  background-color: ${ (props) => props.theme.componentBackGroundColor };

  &:hover {
    background-color: ${ (props) => props.theme.onHoverBackGroundColor };
  }

  &:focus {
    background-color: ${ (props) => props.theme.onFocusBackGroundColor };
  }
`


/***** Borders *****/
export const ComponentsBorder = css`
  border-color: ${ (props) => props.theme.componentsBorderColor };
`

export const InteractiveComponentsBorder = css`
  border-color: ${ (props) => props.theme.interactiveComponentsBorderColor };
`

export const focusRing = css`
  outline: 2px solid;
  outline-offset: 2px;
  outline-color: ${ (props) => props.theme.focusRingColor };
  border-radius: 15px;
  transition: color 0s;
`


/***** Focus Handler *****/

export const Focus = css`
  &:focus, &:focus-visible, &:focus-within {
    ${ focusRing };
  }
`

/***** FlexShortcuts *****/

export const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FlexColumnCenter = css`
  ${ FlexCenter };
  flex-direction: column;
`

export const FlexRowCenter = css`
  ${ FlexCenter };
  flex-direction: row;
`

/***** Base Components *****/
export const Button = styled.button`
  ${ ComponentsBackground };
  ${ InteractiveComponentsBorder };
  border-radius: 15px;
  cursor: pointer;

  ${ Focus };
`