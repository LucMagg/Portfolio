import styled from 'styled-components'
import { focusRingBorder } from '../../data/Theme/globalStyles'


type ButtonTypes = {
  $size: number
}

export const StyledButton = styled.button<ButtonTypes>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: ${ (props) => props.$size + 4}px;
  aspect-ratio: 1;
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  cursor: pointer;
  z-index: 1;

  &:focus {
    outline-offset: 2px;
    border-radius: 15px;
    ${ focusRingBorder }
    transition: color 0s;
  }
`