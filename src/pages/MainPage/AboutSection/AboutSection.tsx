import React from 'react'
import { useTranslation } from 'react-i18next'
import { AboutWrapper, Paragraph, WikipediaLink } from './Wrappers'
import AgeCounter from '../../../components/AgeCounter/AgeCounter'

export default function AboutSection() {
  const { t } = useTranslation()

  return (
    <AboutWrapper>
      <Paragraph>
        { t('section2.text1') }
        <AgeCounter birthDateTime={new Date(1981, 11, 11, 18, 45, 0, 0)} />
        { t('section2.text1_2') }
      </Paragraph>
      <br />
      <Paragraph>
        { t('section2.text2') }
        <WikipediaLink href={ t('section2.text2_link') } tabIndex={-1} target='_blank' rel='noreferrer noopener'>{ t('section2.text2_linkText') }</WikipediaLink>
        { t('section2.text2_2') }
      </Paragraph>
      <Paragraph>
        { t('section2.text3') }
      </Paragraph>
      <Paragraph>
        { t('section2.text4') }
        <WikipediaLink href={ t('section2.text4_link') } tabIndex={-1} target='_blank' rel='noreferrer noopener'>{ t('section2.text4_linkText') }</WikipediaLink>
        { t('section2.text4_2') }
      </Paragraph>
      <br />
      <Paragraph>
        { t('section2.text5') }
        <WikipediaLink href={ t('section2.text5_link') } tabIndex={-1} target='_blank' rel='noreferrer noopener'>{ t('section2.text5_linkText') }</WikipediaLink>
        { t('section2.text6') }
        <WikipediaLink href={ t('section2.text6_link') } tabIndex={-1} target='_blank' rel='noreferrer noopener'>{ t('section2.text6_linkText') }</WikipediaLink>
        { t('section2.text6_2') }
      </Paragraph>
      <Paragraph>
        { t('section2.text7') }
        <WikipediaLink href={ t('section2.text7_link') } tabIndex={-1} target='_blank' rel='noreferrer noopener'>{ t('section2.text7_linkText') }</WikipediaLink>
        { t('section2.text7_2') }
      </Paragraph>
      <Paragraph>
        { t('section2.text8') }
        <WikipediaLink href={ t('section2.text8_link') } tabIndex={-1} target='_blank' rel='noreferrer noopener'>{ t('section2.text8_linkText') }</WikipediaLink>
        { t('section2.text9') }
        <WikipediaLink href={ t('section2.text9_link') } tabIndex={-1} target='_blank' rel='noreferrer noopener'>{ t('section2.text9_linkText') }</WikipediaLink>
        { t('section2.text9_2') }
      </Paragraph>
      <br />
      <Paragraph>
        { t('section2.text9_3') }
      </Paragraph>
      <Paragraph>
        { t('section2.text10') }
      </Paragraph>
      <Paragraph>
        { t('section2.text11') }
        <WikipediaLink href={ t('section2.text11_link1') } tabIndex={-1} target='_blank' rel='noreferrer noopener'>{ t('section2.text11_linkText1') }</WikipediaLink>
        { t('section2.text11_2') }
        <WikipediaLink href={ t('section2.text11_link2') } tabIndex={-1} target='_blank' rel='noreferrer noopener'>{ t('section2.text11_linkText2') }</WikipediaLink>
        { t('section2.text11_3') }
        <WikipediaLink href={ t('section2.text11_link3') } tabIndex={-1} target='_blank' rel='noreferrer noopener'>{ t('section2.text11_linkText3') }</WikipediaLink>
        { t('section2.text11_4') }
        <WikipediaLink href={ t('section2.text11_link4') } tabIndex={-1} target='_blank' rel='noreferrer noopener'>{ t('section2.text11_linkText4') }</WikipediaLink>
        { t('section2.text11_5') }
        <WikipediaLink href={ t('section2.text11_link5') } tabIndex={-1} target='_blank' rel='noreferrer noopener'>{ t('section2.text11_linkText5') }</WikipediaLink>
        { t('section2.text11_6') }
      </Paragraph>
      <br />
      <Paragraph>
        { t('section2.text12') }
      </Paragraph>


    </AboutWrapper>
  )
}