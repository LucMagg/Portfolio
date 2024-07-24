import React, { useState } from 'react'
import * as Scroll from 'react-scroll'
import { useScrollNavigate } from '../../hooks/useScrollNavigate'

import FilterButton from '../../components/FilterButton/FilterButton'
import Portfolio from '../../components/Portfolio/Portfolio'

import { PortfolioPageWrapper, FilterWrapper } from './Wrappers'
import { filterLoader } from '../../assets/utils'


export default function PortfolioPage() {
  const filters = filterLoader()
  const [activeFilter, setActiveFilter] = useState(filters[filters.length - 1])
  const navigate = useScrollNavigate()
  
  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter)
    navigate('/Projects', 'top')
  }

  return (
    <Scroll.Element name={'top'}>
      <PortfolioPageWrapper>
        <FilterWrapper>
          { filters.map((filter) => {
            return <FilterButton key={ filter } filterItem={ filter } isactive={ filter === activeFilter } onClick={ () => handleFilterClick(filter) }/>
          })}
        </FilterWrapper>
        <Portfolio mainPage={ false } filter={ activeFilter }/>
      </PortfolioPageWrapper>
    </Scroll.Element>
  )
}