import React, { useRef, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import Layout from '../Layout/Layout'

import { ErrorWrapper, H2, Status, ErrorMessageWrapper, ErrorMessageBlock, StyledLink } from './Wrappers'


export default function ErrorPage() {
  const statusRef = useRef<HTMLDivElement>(null)
  const messageRef = useRef<HTMLDivElement>(null)
  const linkRef = useRef<HTMLAnchorElement>(null)
  const [pageHeight, setPageHeight] = useState(0)
  const { t } = useTranslation()

  const updatePageHeight = () => {
    if (statusRef.current && messageRef.current && linkRef.current) {
      setPageHeight(statusRef.current.offsetHeight + messageRef.current.offsetHeight + linkRef.current.offsetHeight)
    }
  }

  useEffect(() => {
    updatePageHeight()
    window.addEventListener('resize', updatePageHeight)

    return () => {
      window.removeEventListener('resize', updatePageHeight)
    }
  }, [])

  return (
    <Layout>
      <ErrorWrapper $pageHeight={ pageHeight }>
        <H2>{ t('error.error') }</H2>
        <Status ref={ statusRef }>404</Status>
        <ErrorMessageWrapper ref={ messageRef }>
            <ErrorMessageBlock>{ t('error.errorMsg1') }</ErrorMessageBlock>
            <ErrorMessageBlock>{ t('error.errorMsg2') }</ErrorMessageBlock>
        </ErrorMessageWrapper>
        <StyledLink ref={ linkRef } to='/'>{ t('error.errorBackLink') }</StyledLink>
      </ErrorWrapper>
    </Layout>
  )
}