import styled from 'styled-components'
import { Text } from '../../../data/Theme/globalStyles'

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

export const StyledText = styled.p`
  ${Text}
  padding-left: 30px;
`

export const StyledA = styled.a`
  color: ${(props) => props.theme.textColor};
  text-decoration: underline;
  font-weight: 600;
`

export const ContactFormWrapper = styled.div`
  width: 100%;
  min-width: 300px;

  @media (min-width: ${(props) => props.theme.mobileBreakpoint}px) {
    width: 50%;
  }
`