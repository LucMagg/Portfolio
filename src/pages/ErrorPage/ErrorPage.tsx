import React from 'react'
import { useTranslation } from 'react-i18next'

import Layout from '../Layout/Layout'

import { ErrorWrapper, H2, Status, ErrorMessageWrapper, ErrorMessageBlock, StyledLink } from './Wrappers'


export default function ErrorPage() {
  const { t } = useTranslation()

  return (
    <Layout>
      <ErrorWrapper>
        <H2>{t('error.error')}</H2>
        <Status>404</Status>
        <ErrorMessageWrapper>
            <ErrorMessageBlock>{t('error.errorMsg1')}</ErrorMessageBlock>
            <ErrorMessageBlock>{t('error.errorMsg2')}</ErrorMessageBlock>
        </ErrorMessageWrapper>
        <StyledLink to='/'>{t('error.errorBackLink')}</StyledLink>
      </ErrorWrapper>
    </Layout>
  )
}