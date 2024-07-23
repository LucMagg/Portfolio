import styled from 'styled-components'
import { FlexColumnCenter, FlexRowCenter } from '../../data/Theme/globalStyles'


export const PortfolioPageWrapper = styled.div`
  ${ FlexColumnCenter };
  justify-content: start;
  gap: 20px;
  min-height: 100vh;
  padding-bottom: 20px;
  z-index: 1;
`

export const FilterWrapper = styled.ul`
  width: 100%;
  padding-block: 10px;
  ${ FlexRowCenter };
  gap: 10px;
  border-bottom: 1px solid ${ (props) => props.theme.componentsBorderColor };
  background-color: ${ (props) => props.theme.headerBackGroundColor };
  z-index: 1;
`