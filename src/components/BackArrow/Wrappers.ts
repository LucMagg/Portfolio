import styled from 'styled-components'
import { Focus, FlexCenter } from '../../data/Theme/globalStyles'


type ButtonTypes = {
  $size: number
}

export const StyledButton = styled.button<ButtonTypes>`
  border: none;
  width: ${ (props) => props.$size + 4}px;
  aspect-ratio: 1;
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  cursor: pointer;
  z-index: 1;

  ${ FlexCenter };
  ${ Focus };
`