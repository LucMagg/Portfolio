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
  height: 100%;
  position: relative;
  border: ${ (props) => props.$isFocused ? '5px' : '3px'} solid ${(props) => props.$isFocused ? props.theme.focusRingColor : props.theme.componentsBorderColor };
  border-radius: 10px;
  overflow: hidden;
  ${ ComponentsBackground };
`

export const PortfolioCardLink =  styled.a`
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
`

export const DescriptionWrapper = styled.div`
  width: 100%;
  height: 100px;
  min-height: fit-content;
  ${ FlexColumnCenter };
  align-items: flex-start;
  gap: 2px;
  border-top: 3px solid ${(props) => props.theme.componentsBorderColor};
  padding: 5px;
`

export const DescriptionTitle = styled.p`
  ${ Text };
  font-weight: 500;
  width: 100%;
`

export const DescriptionText = styled.p`
  padding-inline: 10px;
  ${ Text };
`

export const DescriptionStackWrapper = styled.ul`
  padding-top: 5px;
  ${ FlexRowCenter };
  align-items: flex-start;
  gap: 5px;
`

export const StackWrapper = styled.li`
  list-style: none;
  padding-inline: 5px;
  ${ Text };
  border: 3px solid ${ (props) => props.theme.componentsBorderColor };
  border-radius: 15px;
`

export const LearnMore = styled.p`
  position: absolute;
  bottom: 5px;
  right: 5px;
  ${Text};
`