import styled from 'styled-components'
import { ComponentsBackground, InteractiveComponentsBorder } from '../../data/Theme/globalStyles'

const sunBase64 = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBmaWxsPSIjQ0UyQzMxIiB2aWV3Qm94PSIwIDAgMjA3LjYyOCAyMDcuNjI4IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCgk8Y2lyY2xlIGN4PSIxMDMuODE0IiBjeT0iMTAzLjgxNCIgcj0iNDUuODY4Ii8+DQoJPHBhdGggZD0iTTEwMy44MTQsMTU3LjE4M2MtMjkuNDI3LDAtNTMuMzY4LTIzLjk0MS01My4zNjgtNTMuMzY4czIzLjk0MS01My4zNjgsNTMuMzY4LTUzLjM2OHM1My4zNjgsMjMuOTQxLDUzLjM2OCw1My4zNjgNCgkJUzEzMy4yNDEsMTU3LjE4MywxMDMuODE0LDE1Ny4xODN6IE0xMDMuODE0LDY1LjQ0NmMtMjEuMTU2LDAtMzguMzY4LDE3LjIxMi0zOC4zNjgsMzguMzY4czE3LjIxMiwzOC4zNjgsMzguMzY4LDM4LjM2OA0KCQlzMzguMzY4LTE3LjIxMiwzOC4zNjgtMzguMzY4UzEyNC45Nyw2NS40NDYsMTAzLjgxNCw2NS40NDZ6Ii8+DQoJPHBhdGggZD0iTTEwMy44MTQsMzkuMzg1Yy00LjE0MiwwLTcuNS0zLjM1OC03LjUtNy41VjcuNWMwLTQuMTQyLDMuMzU4LTcuNSw3LjUtNy41czcuNSwzLjM1OCw3LjUsNy41djI0LjM4NQ0KCQlDMTExLjMxNCwzNi4wMjcsMTA3Ljk1NiwzOS4zODUsMTAzLjgxNCwzOS4zODV6Ii8+DQoJPHBhdGggZD0iTTEwMy44MTQsMjA3LjYyOGMtNC4xNDIsMC03LjUtMy4zNTgtNy41LTcuNXYtMjQuMzg1YzAtNC4xNDIsMy4zNTgtNy41LDcuNS03LjVzNy41LDMuMzU4LDcuNSw3LjV2MjQuMzg1DQoJCUMxMTEuMzE0LDIwNC4yNzEsMTA3Ljk1NiwyMDcuNjI4LDEwMy44MTQsMjA3LjYyOHoiLz4NCgk8cGF0aCBkPSJNMjAwLjEyOCwxMTEuMzE0aC0yNC4zODVjLTQuMTQyLDAtNy41LTMuMzU4LTcuNS03LjVzMy4zNTgtNy41LDcuNS03LjVoMjQuMzg1YzQuMTQyLDAsNy41LDMuMzU4LDcuNSw3LjUNCgkJUzIwNC4yNzEsMTExLjMxNCwyMDAuMTI4LDExMS4zMTR6Ii8+DQoJPHBhdGggZD0iTTMxLjg4NSwxMTEuMzE0SDcuNWMtNC4xNDIsMC03LjUtMy4zNTgtNy41LTcuNXMzLjM1OC03LjUsNy41LTcuNWgyNC4zODVjNC4xNDIsMCw3LjUsMy4zNTgsNy41LDcuNQ0KCQlTMzYuMDI3LDExMS4zMTQsMzEuODg1LDExMS4zMTR6Ii8+DQoJPHBhdGggZD0iTTE1NC42NzYsNjAuNDUyYy0xLjkxOSwwLTMuODM5LTAuNzMyLTUuMzAzLTIuMTk3Yy0yLjkyOS0yLjkyOS0yLjkyOS03LjY3OCwwLTEwLjYwNmwxNy4yNDMtMTcuMjQyDQoJCWMyLjkyOS0yLjkyOSw3LjY3OC0yLjkzLDEwLjYwNiwwYzIuOTI5LDIuOTI5LDIuOTI5LDcuNjc4LDAsMTAuNjA2bC0xNy4yNDMsMTcuMjQyQzE1OC41MTUsNTkuNzIsMTU2LjU5NSw2MC40NTIsMTU0LjY3Niw2MC40NTJ6Ig0KCQkvPg0KCTxwYXRoIGQ9Ik0zNS43MDksMTc5LjQxOWMtMS45MTksMC0zLjgzOS0wLjczMi01LjMwMy0yLjE5N2MtMi45MjktMi45MjktMi45MjktNy42NzgsMC0xMC42MDZsMTcuMjQzLTE3LjI0Mw0KCQljMi45MjktMi45MjksNy42NzgtMi45MjksMTAuNjA2LDBjMi45MjksMi45MjksMi45MjksNy42NzgsMCwxMC42MDZsLTE3LjI0MywxNy4yNDNDMzkuNTQ4LDE3OC42ODcsMzcuNjI5LDE3OS40MTksMzUuNzA5LDE3OS40MTl6DQoJCSIvPg0KCTxwYXRoIGQ9Ik0xNzEuOTE4LDE3OS40MTljLTEuOTE5LDAtMy44MzktMC43MzItNS4zMDMtMi4xOTdsLTE3LjI0My0xNy4yNDNjLTIuOTI5LTIuOTI5LTIuOTI5LTcuNjc4LDAtMTAuNjA2DQoJCWMyLjkyOS0yLjkyOSw3LjY3OC0yLjkyOSwxMC42MDYsMGwxNy4yNDMsMTcuMjQzYzIuOTI5LDIuOTI5LDIuOTI5LDcuNjc4LDAsMTAuNjA2DQoJCUMxNzUuNzU3LDE3OC42ODcsMTczLjgzOCwxNzkuNDE5LDE3MS45MTgsMTc5LjQxOXoiLz4NCgk8cGF0aCBkPSJNNTIuOTUyLDYwLjQ1MmMtMS45MTksMC0zLjgzOS0wLjczMi01LjMwMy0yLjE5N0wzMC40MDYsNDEuMDEzYy0yLjkyOS0yLjkyOS0yLjkyOS03LjY3NywwLTEwLjYwNg0KCQljMi45MjktMi45MjksNy42NzgtMi45MywxMC42MDYsMGwxNy4yNDMsMTcuMjQyYzIuOTI5LDIuOTI5LDIuOTI5LDcuNjc3LDAsMTAuNjA2QzU2Ljc5MSw1OS43Miw1NC44NzIsNjAuNDUyLDUyLjk1Miw2MC40NTJ6Ii8+DQo8L3N2Zz4='
const moonBase64 = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIiBmaWxsPSIjRkY5NTkyIj4NCiAgPHBhdGggZD0iTTIyMy41IDMyQzEwMCAzMiAwIDEzMi4zIDAgMjU2UzEwMCA0ODAgMjIzLjUgNDgwYzYwLjYgMCAxMTUuNS0yNC4yIDE1NS44LTYzLjRjNS00LjkgNi4zLTEyLjUgMy4xLTE4LjdzLTEwLjEtOS43LTE3LTguNWMtOS44IDEuNy0xOS44IDIuNi0zMC4xIDIuNmMtOTYuOSAwLTE3NS41LTc4LjgtMTc1LjUtMTc2YzAtNjUuOCAzNi0xMjMuMSA4OS4zLTE1My4zYzYuMS0zLjUgOS4yLTEwLjUgNy43LTE3LjNzLTcuMy0xMS45LTE0LjMtMTIuNWMtNi4zLS41LTEyLjYtLjgtMTktLjh6Ii8+DQo8L3N2Zz4='

export const Input = styled.input`
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0;
`

type SliderTypes = {
  size: number
}

export const Slider = styled.span<SliderTypes>`
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

  &::before {
    position: absolute;
    content: ' ';
    height: ${props => props.size*2/5}px;
    width: ${props => props.size*2/5}px;
    left:  ${props => props.size/20 - 1}px;
    top:  ${props => props.size/20 - 1}px;
    background-image: url(${props => props.theme.name === 'light' ? sunBase64 : moonBase64});
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%;
    @media (prefers-reduced-motion: no-preference) {
      transition: transform 0.4s;
    }
  }

  ${Input}:checked + &::before {
    transform: translateX(${props => props.size/2}px);
    @media (prefers-reduced-motion: no-preference) {
      transition: transform 0.4s;
    }
  }
`

type LabelTypes = {
  size: number  
}

export const Label = styled.label<LabelTypes>`
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

