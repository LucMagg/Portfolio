import styled from 'styled-components'
import { FlexCenter, FlexColumnCenter } from '../../data/Theme/globalStyles'

export const ProjectsWrapper = styled.ul`
  ${ FlexColumnCenter };
  padding-inline: 10px;   
  gap: 10px;
  width: calc(100vw - 10px);
  z-index: 1;

  @media (min-width: ${ (props) => props.theme.mobileBreakpoint }px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

export const PortfolioCardWrapper = styled.li`
  width: 100%;
  height: calc((100vw - 30px) / 1.5);
  max-height: 468px;
  ${ FlexCenter };
  list-style: none;

  @media (min-width: ${ (props) => props.theme.mobileBreakpoint }px) {
    height: calc((100vw - 30px) / 2 / 1.5);
  }
`