import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Heading3, Text, ComponentsBackground, FlexColumnCenter, FlexRowCenter } from '../../data/Theme/globalStyles'
import { themeTypes } from '../../data/Theme/themes'


type PortfolioCardWrapperProps = {
  $isFocused: boolean
  theme: themeTypes
}

export const PortfolioCardWrapper = styled.div<PortfolioCardWrapperProps>`
  width: 100%;
  max-width: 700px;
  height: 100%;
  position: relative;
  border: ${ (props) => props.$isFocused ? '5px' : '3px'} solid ${(props) => props.$isFocused ? props.theme.focusRingColor : props.theme.componentsBorderColor };
  border-radius: 10px;
  overflow: hidden;
  ${ ComponentsBackground };
`

export const PortfolioCardLink = styled(Link)`
  ${ FlexColumnCenter };
  width: 100%;
  height: 100%;
  text-decoration: none;
`

export const PortfolioCardPic = styled.img`
  width: 100%;
  height: calc(100% - 100px);
  object-fit: contain;
  display: block;

  @media (min-width: ${ (props) => props.theme.tabletBreakpoint }px) {
    height: 100%;
  }
`

export const DescriptionOnHover = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${ (props) => props.theme.onHoverBackGroundColor };
  opacity: 0;
  transition: opacity 0.3s ease;

  ${PortfolioCardWrapper}:hover & {
    opacity: 0.9;
  }
`

export const DescriptionWrapper = styled.div`
  width: 100%;
  height: 100%;
  ${ FlexColumnCenter };
  align-items: flex-start;
  gap: 2px;
  border-top: 3px solid ${(props) => props.theme.componentsBorderColor};
  padding: 5px;

  @media (min-width: ${ (props) => props.theme.tabletBreakpoint }px) {
    align-items: center;
    gap: 20px;
    border-top: none;
    padding: 0;
  }
`

export const DescriptionTitle = styled.p`
  ${ Text };
  font-weight: 500;
  width: 100%;

  @media (min-width: ${ (props) => props.theme.tabletBreakpoint }px) {
    ${ Heading3 };
    text-align: center;
  }
`

export const DescriptionText = styled.p`
  padding-inline: 10px;
  ${ Text };
`

export const DescriptionStackWrapper = styled.ul`
  ${ FlexRowCenter };
  gap: 5px;
  padding-top: 5px;

  @media (min-width: ${ (props) => props.theme.tabletBreakpoint }px) {
    gap: 20px;
    padding-top: 30px;
  }
`

export const StackWrapper = styled.li`
  list-style: none;
  padding-inline: 5px;
  ${ Text };
  border: 3px solid ${ (props) => props.theme.componentsBorderColor};
  border-radius: 15px;
`

export const LearnMore = styled.p`
  ${ Text };
  position: absolute;
  bottom: 5px;
  right: 5px;

  @media (min-width: ${ (props) => props.theme.tabletBreakpoint }px) {
    bottom: 20px;
    right: 20px;
  }
`