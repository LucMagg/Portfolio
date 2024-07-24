import React from 'react'
import { useTranslation } from 'react-i18next'
import { useScrollNavigate } from '../../../hooks/useScrollNavigate'
import { contractStr, getImagePath } from '../../../assets/utils'
import skillData from '../../../data/skills/skills.json'

import SkillCard from '../../../components/SkillCard/SkillCard'
import { HomeSectionWrapper, TopWrapper, ImageWrapper, PrezWrapper, H2, Subtitle, TextContent, ContactButton, SkillWrapper, H3, DifferentSkills } from './Wrappers'


export default function HomeSection() {
  const navigate = useScrollNavigate()
  const { t }  = useTranslation()

  const handleclick = () => {
    navigate('/', contractStr(t('navitems.nav3')))
  }

  return (
    <HomeSectionWrapper>
      <TopWrapper>
        <ImageWrapper src={ getImagePath('Me.jpg') } alt={ t('section1.altphoto') }/>
        <PrezWrapper>
          <H2>{ t('section1.title') }</H2>
          <Subtitle>{ t('section1.subtitle') }</Subtitle>
          <TextContent>{ t('section1.content1') } { t('section1.content2') }</TextContent>
          <ContactButton onClick={handleclick}>{ t('section1.contactme') }</ContactButton>
        </PrezWrapper>
      </TopWrapper>
      <SkillWrapper>
        <H3>{ t('section1.skills') }</H3>
        <DifferentSkills>
          {skillData.map((skill) => {
            return <SkillCard key={ skill.name } skills={ skill } />
          })}
        </DifferentSkills>
      </SkillWrapper>
    </HomeSectionWrapper>
  )
}