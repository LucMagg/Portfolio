import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useScrollNavigate } from '../../hooks/useScrollNavigate'

import { PortfolioCardWrapper, PortfolioCardLink, PortfolioCardPic, DescriptionWrapper, DescriptionTitle, DescriptionText, DescriptionStackWrapper, StackWrapper, LearnMore } from './Wrappers'
import { PortfolioItemType } from '../../data/portfolio/portfolioTypes'
import { contractStr, getImagePath } from '../../assets/utils'

type itemTypes = PortfolioItemType

export default function PortfolioMobileCard ( { item } : {item: itemTypes} ) {
  const [isFocused, setIsFocused] = useState(false)
  const { t } = useTranslation()
  const navigate = useScrollNavigate()

  const handleClick = (e:React.MouseEvent<HTMLElement>, path: string) => {
    e.preventDefault()
    navigate(path, 'top')
  }

  return (
    <PortfolioCardWrapper $isFocused={ isFocused }>
      <PortfolioCardLink to={ `/projects/${contractStr(item.title)}` } onClick={ (e) => handleClick(e, `/projects/${contractStr(item.title)}`) } onFocus={ () => setIsFocused(true) } onBlur= { () => setIsFocused(false) }>
          <PortfolioCardPic src={ getImagePath(`images/${item.title}/${item.pics[0]}`) } alt= { item.title } />
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
      </PortfolioCardLink>
    </PortfolioCardWrapper>
  )
}