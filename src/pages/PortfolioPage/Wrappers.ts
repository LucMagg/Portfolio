import styled from 'styled-components'


export const PortfolioPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 20px;
  min-height: 100vh;
  padding-bottom: 20px;
  z-index: 1;
`

export const FilterWrapper = styled.ul`
  width: 100%;
  padding-block: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid ${(props) => props.theme.componentsBorderColor};
  background-color: ${(props) => props.theme.headerBackGroundColor};
  z-index: 1;
`