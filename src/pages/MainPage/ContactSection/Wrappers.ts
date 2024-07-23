import styled from 'styled-components'
import { FlexColumnCenter, FlexRowCenter, Text, Focus, FlexCenter } from '../../../data/Theme/globalStyles'

export const ContactSectionWrapper = styled.div`
  ${ FlexColumnCenter };
  width: 100%;
  padding: 10px;
  gap: 30px;
  z-index: 1;
`

export const ContactText = styled.div`
  width: 80%;
  ${ FlexRowCenter };
  flex-wrap: wrap;
  gap: 5px;
`

export const SomeText = styled.span`
  ${ Text };
  min-width: fit-content;
`

export const LinkedInLink = styled.a`
  text-decoration: none;
  ${ FlexCenter };
  ${ Focus };
`

export const ContactFormWrapper = styled.div`
  width: 100%;
  min-width: 300px;

  @media (min-width: ${ (props) => props.theme.mobileBreakpoint }px) {
    width: 50%;
  }
`