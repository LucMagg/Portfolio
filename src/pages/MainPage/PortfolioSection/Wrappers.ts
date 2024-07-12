import styled from 'styled-components'
import { Button, Text } from '../../../data/Theme/globalStyles'

export const PortfolioSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 30px;
  padding-block: 30px;
  
  @media (min-width: ${(props) => props.theme.tabletBreakpoint}px) {
    height: calc(100vh - (53px + 121px));
    max-height: 550px;

  }
`

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90%;
  gap: 10px;

  @media (max-width: ${(props) => props.theme.tabletBreakpoint}px) {
    flex-direction: column;
  }
`

export const MoreButton = styled(Button)`
  ${Text};
  padding-inline: 20px;
  cursor: pointer;
`