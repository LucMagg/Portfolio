import React from 'react'
import { useTranslation } from 'react-i18next'
import { contractStr } from '../../assets/utils'
import * as Scroll from 'react-scroll'

import { Section, H2 } from './Wrappers'
import HomeSection from './HomeSection/HomeSection'
import AboutSection from './AboutSection/AboutSection'
import PortfolioSection from './PortfolioSection/PortfolioSection'
import ContactSection from './ContactSection/ContactSection'
import CVSection from './CVSection/CVSection'


export default function MainPage() {
  const { t } = useTranslation()
 
  return (
    <>
      <Scroll.Element name={'top'}>
        <Section>        
          <HomeSection />
        </Section>
      </Scroll.Element>
      <Scroll.Element name={contractStr(t('navitems.nav1'))}>
        <Section>
          <H2>{t('navitems.nav1')}</H2>
          <AboutSection />
        </Section>
      </Scroll.Element>
      <Scroll.Element name={contractStr(t('navitems.nav2'))}>
        <Section>
          <H2>{t('navitems.nav2')}</H2>
          <PortfolioSection />
        </Section>
      </Scroll.Element>
      <Scroll.Element name={contractStr(t('navitems.nav3'))}>
        <Section>
          <H2>{t('navitems.nav3')}</H2>
          <ContactSection />
        </Section>
      </Scroll.Element>
      <Scroll.Element name={contractStr(t('navitems.nav4'))}>
        <Section>
          <H2>{t('navitems.nav4')}</H2>
          <CVSection />
        </Section>
      </Scroll.Element>
    </>
  )
}