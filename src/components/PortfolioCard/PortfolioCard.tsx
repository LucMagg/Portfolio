import React from 'react'
import { useTranslation } from 'react-i18next'
import { useScrollNavigate } from '../../hooks/useScrollNavigate'

import { PortfolioCardLink, PortfolioCardPic, DescriptionOnHover, DescriptionWrapper, DescriptionTitle, DescriptionText, DescriptionStackWrapper, StackWrapper, LearnMore } from './Wrappers'
import { PortfolioItemType } from '../../data/portfolio/portfolioTypes'
import { contractStr, getImagePath } from '../../assets/utils'

type PortfolioDesktopCardTypes = {
  item: PortfolioItemType
  type: 'desktop' | 'mobile'
}

export default function PortfolioCard ( { item, type } : PortfolioDesktopCardTypes ) {
  const { t } = useTranslation()
  const navigate = useScrollNavigate()

  const handleClick = (e:React.MouseEvent<HTMLElement>, path: string) => {
    e.preventDefault()
    console.log('clic!')
    navigate(path, 'top')
  }

  const Description = () => {
    return (
      <DescriptionWrapper>
        <DescriptionTitle>{ item.title }</DescriptionTitle>
        <DescriptionText>{ t(`portfolio.${item.id}.shortDescription`) }</DescriptionText>
        <DescriptionStackWrapper>
          { item.stacks.map((stack) => {
            return <StackWrapper key={ stack }>{ stack }</StackWrapper>
          })}
        </DescriptionStackWrapper>
        <LearnMore>{ t('section3.learnMore') }</LearnMore>
      </DescriptionWrapper>
    )
  }

  const DesktopDescription = () => {
    return (
      <DescriptionOnHover>
        <Description />
      </DescriptionOnHover>
    )
  }

  return (
    <PortfolioCardLink
      to={ `/projects/${contractStr(item.title)}` }
      onClick={ (e) => handleClick(e, `/projects/${contractStr(item.title)}`) }
    >
      <PortfolioCardPic src={ getImagePath(`images/${item.title}/${item.pics[0]}`) } alt= { item.title } />
      { type === 'desktop' ? <DesktopDescription/> : <Description/> }
    </PortfolioCardLink>
  )
}