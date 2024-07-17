import styled from 'styled-components'

export const ProjectsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-inline: 10px;   
  gap: 10px;
  width: calc(100vw - 10px);

  @media (min-width: ${ (props) => props.theme.mobileBreakpoint }px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

export const PortfolioCardWrapper = styled.li`
  width: 100%;
  height: calc((100vw - 30px) / 1.5);
  max-height: 468px;
  display: flex;
  justify-content: center;
  list-style: none;

  @media (min-width: ${ (props) => props.theme.mobileBreakpoint }px) {
    height: calc((100vw - 30px) / 2 / 1.5);
  }
`