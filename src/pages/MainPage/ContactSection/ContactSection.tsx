import React from 'react'
import { useTranslation } from 'react-i18next'
import ContactForm from '../../../components/ContactForm/ContactForm'
import { ContactSectionWrapper, StyledText, StyledA, ContactFormWrapper } from './Wrappers'


export default function ContactSection() {
  const { t } = useTranslation()

  return(
    <ContactSectionWrapper>
      <StyledText>
        { t('section4.text1') }
        <StyledA href='mailto:luc.maggiotto@gmail.com'>luc.maggiotto@gmail.com</StyledA>
        { t('section4.text2')}
      </StyledText>
      <ContactFormWrapper>
        <ContactForm />
      </ContactFormWrapper>
    </ContactSectionWrapper>
  )
}