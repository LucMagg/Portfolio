import React, { ReactNode } from 'react'
import { useLoaderData } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { PortfolioItemType } from '../../data/portfolio/portfolioTypes'
import Carousel from '../../components/Carousel/Carousel'
import { PageWrapper, StyledH2, ProjectDetailsWrapper, CarouselWrapper, SlideWrapper, PicWrapper, SlideIndex, DescriptionPartWrapper, StyledTitle, Description, StyledLi, StackWrapper, Stack } from './Wrappers'





export default function PortfolioFocusPage() {
  const project = useLoaderData() as PortfolioItemType
  const { t } = useTranslation()

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

  return (
    <PageWrapper>
      <StyledH2>{ project.title }</StyledH2>
      <ProjectDetailsWrapper>
        <CarouselWrapper>
          <Carousel items={ slides(project) } />
        </CarouselWrapper>
        <DescriptionPartWrapper>
          <StyledTitle>{ t('portfolio.description') }</StyledTitle>
          { itemsToJSX('fullDescription').map((item, index) => {
              return <Description key={ index }>{ item }</Description>
          }) }
          <ul><StyledTitle>{ t('portfolio.skills') }</StyledTitle></ul>
          { itemsToJSX('skills').map((item, index) => {
              return <StyledLi key={ index }>{ item }</StyledLi>
          }) }
          <StyledTitle>{ t('portfolio.technos') }</StyledTitle>
          <StackWrapper>
            { project.stacks.map((stack) => {
              return <Stack key={ stack }>{ stack }</Stack>
            })}
          </StackWrapper>
        </DescriptionPartWrapper>
      </ProjectDetailsWrapper>
    </PageWrapper>
  )
}