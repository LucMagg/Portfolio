import styled from 'styled-components'
import { Text } from '../../../data/Theme/globalStyles'

export const AboutWrapper = styled.div`
  padding: 20px;
`

export const Paragraph = styled.p`
  ${Text}
`

export const WikipediaLink = styled.a`
  color: ${(props) => props.theme.textColor};
  text-decoration: underline;
  font-weight: 600;
`