import styled from 'styled-components'
import { Text, focusRingBorder } from '../../../data/Theme/globalStyles'

export const ContactSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  gap: 30px;
  z-index: 1;
`

export const ContactText = styled.div`
  width: 80%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 5px;
`

export const SomeText = styled.span`
  ${ Text };
  min-width: fit-content;
`

export const LinkedInLink = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    outline-offset: 2px;
    border-radius: 15px;
    ${focusRingBorder}
    transition: color 0s;
  }

  &:focus-visible {
    outline-offset: 2px;
    border-radius: 15px;
    ${focusRingBorder}
    transition: color 0s;
  }
`

export const ContactFormWrapper = styled.div`
  width: 100%;
  min-width: 300px;

  @media (min-width: ${(props) => props.theme.mobileBreakpoint}px) {
    width: 50%;
  }
`