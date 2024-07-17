import styled from 'styled-components'
import { Heading2, Heading3, Text } from '../../data/Theme/globalStyles'

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media (min-width: ${ (props) => props.theme.tabletBreakpoint }px) {
    height: calc(100vh - ${ (props) => props.theme.headerNormalHeight }px);
  }
`

export const StyledH2 = styled.h2`
  ${ Heading2 };
  padding-bottom: 20px;
`

export const ProjectDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  @media (min-width: ${ (props) => props.theme.tabletBreakpoint }px) {
    flex-direction: row;
    justify-content: center;
    height: calc(100% - 63px);
  }
`

export const CarouselWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;

  height: calc((100vh - ${ (props) => props.theme.headerNormalHeight }px) / 2);
  width: calc(100vw - 40px);
  border-radius: 25px;
  object-fit: contain;
  overflow: hidden;
  background-color: ${ (props ) => props.theme.componentBackGroundColor};
  border: 1px solid ${ (props ) => props.theme.componentsBorderColor};

  @media (min-width: ${ (props) => props.theme.tabletBreakpoint }px) {
    height: 100%;
    width: calc((100vw - 60px)/2);
  }
`

export const SlideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 100%;
`

export const PicWrapper = styled.img`
	width: calc(100vw - 40px);
  height: calc(100% - 42px);
  object-fit: contain;
	position: relative;

  @media (min-width: ${ (props) => props.theme.tabletBreakpoint }px) {
    width: calc((100vw - 60px)/2);
    height: calc(100% - 42px);
  }
`

export const SlideIndex = styled.p`
  ${ Text };
  padding-bottom: 10px;
`

export const DescriptionPartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: calc(100vw - 40px);
  height: fit-content;

  @media (min-width: ${ (props) => props.theme.tabletBreakpoint }px) {
    width: calc((100vw - 60px)/2);
  }
`

export const StyledTitle = styled.p`
  ${ Heading3 }
  text-decoration: underline;
  padding-block: 10px;
`

export const Description = styled.p`
  ${ Text };
`

export const StyledLi = styled.li`
  ${ Text };
`

export const StackWrapper = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`

export const Stack = styled.li`
  list-style: none;
  padding-inline: 5px;
  ${Text};
  border: 3px solid ${(props) => props.theme.componentsBorderColor};
  border-radius: 15px;
`