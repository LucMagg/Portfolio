import styled from 'styled-components'
import { Button, FlexColumnCenter, FlexRowCenter, Text } from '../../../data/Theme/globalStyles'

export const PortfolioSectionWrapper = styled.div`
  ${ FlexColumnCenter };
  width: 100%;
  gap: 30px;
  padding-block: 30px;
  z-index: 1;
`

export const ProjectsWrapper = styled.div`
  ${ FlexRowCenter };
  width: 100%;
  height: 90%;
  gap: 10px;

  @media (max-width: ${(props) => props.theme.tabletBreakpoint}px) {
    flex-direction: column;
  }
`

export const MoreButton = styled(Button)`
  ${ Text };
  padding-inline: 20px;
`