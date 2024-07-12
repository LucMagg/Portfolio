import styled from 'styled-components'

export const ProjectsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-inline: 10px;   
  gap: 10px;

  @media (min-width: ${(props) => props.theme.mobileBreakpoint}px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

export const PortfolioCardWrapper = styled.li`
  aspect-ratio: 1.5;
  width: 100%;
  max-width: 700px;
  list-style: none;
  
  @media (max-width: ${(props) => props.theme.tabletBreakpoint}px) {
    width: 100%;
  }
`