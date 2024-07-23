import React from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from 'styled-components'

import LinkedInSvg from './LinkedInSvg'
import ContactForm from '../../../components/ContactForm/ContactForm'
import { ContactSectionWrapper, ContactText, SomeText, LinkedInLink, ContactFormWrapper } from './Wrappers'


export default function ContactSection() {
  const { t } = useTranslation()
  const theme = useTheme()
  
  return(
    <ContactSectionWrapper>
      <ContactText>
        <SomeText>{ t('section4.text1') }</SomeText>
        <LinkedInLink href='https://www.linkedin.com/in/luc-maggiotto-357159316' target='_blank' rel='noreferrer noopener' aria-label='LinkedIn'>
          <LinkedInSvg size={ 60 }/>
        </LinkedInLink>
        <SomeText>{ t('section4.text2') }</SomeText>
      </ContactText>
      <ContactFormWrapper>
        <ContactForm />
      </ContactFormWrapper>
    </ContactSectionWrapper>
  )
}