import React from 'react'
import { IframeWrapper, StyledIframe } from './Wrappers'

export default function CVSection() {
  return (
    <IframeWrapper>
      <StyledIframe src='/CV.pdf'/>
    </IframeWrapper>
  )
}