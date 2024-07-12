import styled from 'styled-components'


export const PortfolioPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 20px;
  min-height: 100vh;
`

export const FilterWrapper = styled.ul`
  width: 100%;
  padding-block: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: sticky;
  border-bottom: 1px solid ${(props) => props.theme.componentsBorderColor};
  background-color: ${(props) => props.theme.headerBackGroundColor};
  z-index: 2;
  position: sticky;
  left: 0;
  top: ${(props) => props.theme.headerMobileHeight}px;

  @media (min-width: ${(props) => props.theme.mobileBreakpoint}px) {
    top: ${(props) => props.theme.headerNormalHeight}px;
  }
`