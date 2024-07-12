import styled from 'styled-components'
import { Button, Text } from '../../data/Theme/globalStyles'


export const LanguageTogglerWrapper = styled(Button)<{ size: number }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-inline: 5px;
  gap: 5px;
  width: ${(props) => props.size*3.5}px;
`

export const StyledSpan = styled.span`
  ${Text};
`

export const LanguageLabel = styled.span<{ size: number }>`
  width: ${(props) => Math.round(props.size*4/3)}px;
  height: ${(props) => props.size}px;
  font-size: ${(props) => props.size*4/9}px;
  display: flex;
  justify-content: center;
  align-items: center;
`