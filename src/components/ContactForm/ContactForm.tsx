import React, { useRef, FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser'
import { StyledForm, NameContainer, StyledLabel, StyledInput, StyledTextarea, StyledButton } from './Wrappers'


export default function ContactForm() {
  const { t } = useTranslation()

  const sendMail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement

    emailjs
      .sendForm('service_t5mvfnj', 'template_evqaey4', form, {
        publicKey: 'zz6T-c5ZBfIKFm_Jj',
      })
      .then(
        () => {
          console.log('Email transmis !')
          form.reset()
        },
        (error) => {
          console.log('Erreur lors de l\'envoi : ', error.text)
        }
      )
  
  }

  return(
    <StyledForm  onSubmit={ sendMail }>
      <NameContainer>
        <StyledLabel>
          { t('section4.contactForm.lastname') }
          <StyledInput type='text' name='lastName' />
        </StyledLabel>
        <StyledLabel>
          { t('section4.contactForm.firstname') }
          <StyledInput type='text' name='firstName' />
        </StyledLabel>
      </NameContainer>
      <StyledLabel>
      { t('section4.contactForm.email') }
        <StyledInput type='email' name='email' required />
      </StyledLabel>
      <StyledLabel>
      { t('section4.contactForm.subject') }
        <StyledInput type='text' name='title' required/>
      </StyledLabel>
      <StyledLabel>
      { t('section4.contactForm.message') }
        <StyledTextarea name='message' rows={ 5 } required />
      </StyledLabel>
      <StyledButton type='submit'>{ t('section4.contactForm.send') }</StyledButton>
    </StyledForm>
  )
}