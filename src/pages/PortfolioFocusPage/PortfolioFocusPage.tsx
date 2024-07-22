import React, { useEffect, useRef, useState, ReactNode } from 'react'
import { useLoaderData } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useTheme } from 'styled-components'
import * as Scroll from 'react-scroll'
import { useScrollNavigate } from '../../hooks/useScrollNavigate'


import { PortfolioItemType } from '../../data/portfolio/portfolioTypes'
import Carousel from '../../components/Carousel/Carousel'
import { PageWrapper, StyledH2, ProjectDetailsWrapper, CarouselWrapper, SlideWrapper, PicWrapper, SlideIndex, DescriptionPartWrapper, StyledTitle, Description, LinksWrapper, StyledLi, StackWrapper, Stack, StyledLinkButton } from './Wrappers'
import BackArrow from '../../components/BackArrow/BackArrow'


type ChildrenSizeTypes = {
  desc: number;
  carousel: number
}


export default function PortfolioFocusPage() {
  const project = useLoaderData() as PortfolioItemType
  const { t } = useTranslation()
  const theme = useTheme()
  const navigate = useScrollNavigate()

  const descriptionDivRef = useRef<HTMLDivElement>(null)
  const carouselDivRef = useRef<HTMLDivElement>(null)
  const pageRef = useRef(null)
  const [childrenSize, setChildrenSize] = useState<ChildrenSizeTypes>({desc: 0, carousel: 0})

  const slides = (project: PortfolioItemType): ReactNode[] => {
    const numberOfSlides = project.pics.length

    return project.pics.map((pic, index) => {
      return (
        <SlideWrapper key={ pic }>
          <PicWrapper src={ `/images/${ project.title }/${ pic }` } alt= { `${ project.title } ${ index }` } />
          <SlideIndex>
            { t(`portfolio.${ project.id }.pics_titles.${ index }`) }
            { project.pics.length > 1 ? ` - ${ index + 1}/${ numberOfSlides }` : null }
          </SlideIndex>
        </SlideWrapper>
      )
    })
  }

  const itemsToJSX = (whichone: string) => {
    const toReturn = []
    const itemsArray = project.fr[whichone]
    for (let i=0; i < itemsArray.length; i++) {
      toReturn.push(t(`portfolio.${ project.id }.${ whichone }.${ i }`))
    }
    return toReturn
  }

  const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  
  const onClickUrl = (url: string): (() => void) => () => openInNewTab(url)
  
  const gitLinks = () => {
    if (project.codeLink !== '') {
      return (
          <LinksWrapper>
            <StyledLinkButton onClick={ onClickUrl(project.codeLink) }>{ t('portfolio.link.toCode') }</StyledLinkButton>
            { project.siteLink !== '' ? (
              <StyledLinkButton onClick={ onClickUrl(project.siteLink) }>{ t('portfolio.link.toWebSite') }</StyledLinkButton>
            ) : null }
          </LinksWrapper>
      )  
    } else {
      return null
    }
  }
  

  const updatePageHeight = () => {
    if (descriptionDivRef.current && carouselDivRef.current) {
      setChildrenSize({desc: descriptionDivRef.current.offsetHeight, carousel: carouselDivRef.current.offsetHeight})
    }
  }

  useEffect(() => {
    updatePageHeight()
    window.addEventListener('resize', updatePageHeight)

    return () => {
      window.removeEventListener('resize', updatePageHeight)
    }
  }, [])

  const handleBackClick = () => {
    navigate('/projects','top')
  }

  return (
    <Scroll.Element name={'top'}>
      <PageWrapper ref={ pageRef } $childrenSize={ childrenSize }>
        <StyledH2>{ project.title }</StyledH2>
        <BackArrow onClick={ handleBackClick } ariaLabel={ t('portfolio.backArrow') } size= { 32 } color = { theme.textColor } />
        <ProjectDetailsWrapper>
          <CarouselWrapper ref={ carouselDivRef }>
            <Carousel items={ slides(project) } />
          </CarouselWrapper>
          <DescriptionPartWrapper ref={ descriptionDivRef }>
            <StyledTitle>{ t('portfolio.description') }</StyledTitle>
            { itemsToJSX('fullDescription').map((item, index) => {
                return <Description key={ index }>{ item }</Description>
            }) }
            <StyledTitle>{ t('portfolio.skills') }</StyledTitle>
            <ul>
              { itemsToJSX('skills').map((item, index) => {
                  return <StyledLi key={ index }>{ item }</StyledLi>
              }) }
            </ul>
            <StyledTitle>{ t('portfolio.technos') }</StyledTitle>
            <StackWrapper>
              { project.stacks.map((stack) => {
                return <Stack key={ stack }>{ stack }</Stack>
              })}
            </StackWrapper>
            { project.codeLink !== '' ? gitLinks() : null }
          </DescriptionPartWrapper>
        </ProjectDetailsWrapper>
      </PageWrapper>
    </Scroll.Element>
  )
}