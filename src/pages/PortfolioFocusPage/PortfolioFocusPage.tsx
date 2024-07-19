import React, { useEffect, useRef, useState, ReactNode } from 'react'
import { useLoaderData } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { PortfolioItemType } from '../../data/portfolio/portfolioTypes'
import Carousel from '../../components/Carousel/Carousel'
import { PageWrapper, StyledH2, ProjectDetailsWrapper, CarouselWrapper, SlideWrapper, PicWrapper, SlideIndex, DescriptionPartWrapper, StyledTitle, Description, StyledLi, StackWrapper, Stack, StyledA } from './Wrappers'


type ChildrenSizeTypes = {
  desc: number;
  carousel: number
}


export default function PortfolioFocusPage() {
  const project = useLoaderData() as PortfolioItemType
  const { t } = useTranslation()

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

  const gitLink = () => {
    return (
      <>
        <StyledTitle>{ t('portfolio.link') }</StyledTitle>
        <StyledA href={ project.codeLink } target="_blank">{ project.codeLink }</StyledA>
      </>
    )
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

  return (
    <PageWrapper ref={ pageRef } $childrenSize={ childrenSize }>
      <StyledH2>{ project.title }</StyledH2>
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
          { project.codeLink !== '' ? gitLink() : null }
        </DescriptionPartWrapper>
      </ProjectDetailsWrapper>
    </PageWrapper>
  )
}