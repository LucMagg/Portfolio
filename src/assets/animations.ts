import { keyframes } from 'styled-components'


export const infiniteScale = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(0.9); }
  100% { transform: scale(1); }
`

export const slideFromTopRightCorner = keyframes`
  0% {
    top: -100vh;
    right: -100vw;
    opacity: 0;
  }
  100% {
    top: 0;
    right: 0;
    opacity: 0.9;
  }
`

export const slideToTopRightCorner = keyframes`
  0% {
    top: 0;
    right: 0;
    opacity: 0.9;
  }
  100% {
    top: -100vh;
    right: -100vw;
    opacity: 0;
  }
`