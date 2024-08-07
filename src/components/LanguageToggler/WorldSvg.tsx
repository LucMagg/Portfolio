import React from 'react'
import { useTheme } from 'styled-components'

type WorldSvgTypes = {
  size: number
}

export default function WorldSvg({ size }: WorldSvgTypes) {
  const theme = useTheme()

  return (
  <svg xmlns="http://www.w3.org/2000/svg" width={ size } height={ size } viewBox="-1 -1 66 66" enableBackground="new 0 0 64 64" preserveAspectRatio="xMidYMid">
    <path fill="none" stroke={ theme.textColor } strokeWidth="3" d="M32.001,0.887c17.184,0,31.113,13.929,31.112,31.113C63.114,49.185,49.184,63.115,32,63.113C14.815,63.114,0.887,49.185,0.888,32.001C0.885,14.816,14.815,0.887,32.001,0.887z"/>
    <line fill="none" stroke={ theme.textColor } strokeWidth="3" x1="32" y1="1" x2="32" y2="63"/>
    <line fill="none" stroke={ theme.textColor } strokeWidth="3" x1="63" y1="32" x2="1" y2="32"/>
    <path fill="none" stroke={ theme.textColor } strokeWidth="3" d="M30,1c0,0-14,11-14,31s14,31,14,31"/>
    <path fill="none" stroke={ theme.textColor } strokeWidth="3" d="M34,1c0,0,14,11,14,31S34,63,34,63"/>
    <path fill="none" stroke={ theme.textColor } strokeWidth="3" d="M8,12c0,0,5,10,24,10s24-10,24-10"/>
    <path fill="none" stroke={ theme.textColor } strokeWidth="3" d="M8,52c0,0,5-10,24-10s24,10,24,10"/>
  </svg>
  )
}