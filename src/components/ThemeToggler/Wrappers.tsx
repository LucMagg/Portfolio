import styled from 'styled-components'
import { ComponentsBackground, InteractiveComponentsBorder } from '../../data/Theme/globalStyles'


export const Input = styled.input`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0;
`

type PropTypes = {
  size: number
}

export const Slider = styled.span<PropTypes>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  ${ComponentsBackground};
  border-radius: ${props => props.size/2}px;
  border: 1px solid; 
  ${InteractiveComponentsBorder};  
`

export const Label = styled.label<PropTypes>`
  position: relative;
  display: inline-block;
  width: ${props => props.size}px;
  height: ${props => props.size/2}px;
  cursor: pointer;

  &:focus-within {
    outline: 2px solid ${(props) => props.theme.focusRingColor};
    border-radius: ${props => props.size/2}px;

    ${Slider} {
      background-color: ${(props) => props.theme.onFocusBackGroundColor};
    }
  }
`

export const SliderPic = styled.div<PropTypes>`
  position: absolute;
  height: ${props => props.size*2/5}px;
  width: ${props => props.size*2/5}px;
  left:  ${props => props.size/20 - 1}px;
  top:  ${props => props.size/20 - 1}px;

  @media (prefers-reduced-motion: no-preference) {
    transition: transform 0.4s;
  }

  ${Input}:checked + ${Slider} & {
    transform: translateX(${props => props.size/2}px);
    @media (prefers-reduced-motion: no-preference) {
      transition: transform 0.4s;
    }
  }
`

