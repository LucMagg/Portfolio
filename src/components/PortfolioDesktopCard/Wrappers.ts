import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Heading3, Text } from '../../data/Theme/globalStyles'
import { themeTypes } from '../../data/Theme/themes'


type PortfolioCardWrapperProps = {
  $isFocused: boolean
  theme: themeTypes
}

export const PortfolioCardWrapper = styled.div<PortfolioCardWrapperProps>`
  width: 100%;
  height: 100%;
  position: relative;
  border: ${(props) => props.$isFocused ? '5px' : '3px'} solid ${(props) => props.$isFocused ? props.theme.focusRingColor : props.theme.componentsBorderColor};
  border-radius: 10px;
  overflow: hidden;
`

export const PortfolioCardLink = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;  
`

export const PortfolioCardPic = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  background-color: ${(props) => props.theme.componentBackGroundColor};
`

export const DescriptionOnHover = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.onHoverBackGroundColor};
  opacity: 0;
  transition: opacity 0.3s ease;

  ${PortfolioCardWrapper}:hover & {
    opacity: 0.9;
  }
`

export const DescriptionWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

export const DescriptionTitle = styled.p`
  ${Heading3};
  width: 100%;
  text-align: center;
`

export const DescriptionText = styled.p`
  padding-inline: 10px;
  ${Text}
`

export const DescriptionStackWrapper = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
`

export const StackWrapper = styled.p`
  padding-inline: 15px;
  ${Text}
  border: 3px solid ${(props) => props.theme.componentsBorderColor};
  border-radius: 15px;
`

export const LearnMore = styled.p`
  position: absolute;
  bottom: 20px;
  right: 20px;
  ${Text};
`