import React from 'react'
import { useTranslation } from 'react-i18next'
import { StackCardsWrapper, StackTitle, SkillsWrapper, SkillCardWrapper, SkillCardPic } from './Wrappers'

type skillsType = {
  name: string,
  stacks: {
    name: string, 
    pic: string
  }[]
}

export default function SkillCard({ skills }: { skills: skillsType }){
  const { t } = useTranslation()

  return (
    <StackCardsWrapper>
      <SkillsWrapper> 
        
        {skills.stacks.map((stack) => {
          return (
            <SkillCardWrapper key={ stack.name }>
              <SkillCardPic src={ `/images/Skills/${stack.pic}` } alt={ stack.name }></SkillCardPic>
            </SkillCardWrapper>
          )
        })}
      </SkillsWrapper>
      <StackTitle>{ t(`section1.skillItems.${skills.name}`) }</StackTitle>
    </StackCardsWrapper>
  )
}