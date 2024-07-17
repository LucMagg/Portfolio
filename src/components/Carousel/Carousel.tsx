import React, { ReactNode, useEffect, useState} from 'react'
import { useTranslation } from 'react-i18next'

import { CarouselWrapper, CarouselSlide, CarouselButton, CarouselButtonIcon } from './Wrappers'


type itemsType = ReactNode[]

function slide(whichWay: 'left' | 'right', activeSlide: number, items: itemsType): number {
    let target = (whichWay === 'left') ? activeSlide - 1 : activeSlide + 1
    if (target < 0) {target = items.length - 1}
    if (target === items.length) {target = 0}
    return target
}

const slideTimer = 3000

export default function Carousel ({ items } : { items: itemsType} ) {    
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timeOut = setTimeout(() => (setActiveSlide(slide('right', activeSlide, items))), slideTimer)
      return () => {clearTimeout(timeOut)}
  },[activeSlide, items])

  const { t } = useTranslation()

  return (
    <CarouselWrapper>
      { items.map((item,index) => {
        return (
          <CarouselSlide key={index} style={{transform: `translateX(${-activeSlide * 100}%)`}}>{item}</CarouselSlide>
        )
      }) }
      { items.length > 1 && 
        <>
          <CarouselButton className='left' aria-label={ t('portfolio.carouselAltButton.previous') } onClick={ () => setActiveSlide(slide('left', activeSlide, items)) }>
            <CarouselButtonIcon className='left' aria-hidden='true'></CarouselButtonIcon>
          </CarouselButton>
          <CarouselButton className='right' aria-label={ t('portfolio.carouselAltButton.next') } onClick={() => setActiveSlide(slide('right', activeSlide, items))}>
              <CarouselButtonIcon className='right' aria-hidden='true'></CarouselButtonIcon>
          </CarouselButton>
        </> 
      }
    </CarouselWrapper>
  )
}