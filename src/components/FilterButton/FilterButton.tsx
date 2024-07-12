import React from 'react'
import { useTranslation } from 'react-i18next'

import { FilterButtonWrapper, Filter } from './Wrappers'

type FilterButtonPropTypes = {
  filterItem: string
  isactive: boolean
  onClick: () => void
}

export default function FilterButton({ filterItem, isactive, onClick }: FilterButtonPropTypes) {
  const { t } = useTranslation()

  return (
    <FilterButtonWrapper>
      <Filter onClick={ onClick } $isactive={ isactive }>{ t(`portfolio.filters.${filterItem}`) }</Filter>
    </FilterButtonWrapper>
  )
}