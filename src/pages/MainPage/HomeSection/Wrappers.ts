import styled from 'styled-components'
import { Heading2, Heading3, Text, Button, SmallText } from '../../../data/Theme/globalStyles'


export const HomeSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(100vh - ${(props) => props.theme.headerMobileHeight}px);
  z-index: 1;
  
  @media (min-width: ${(props) => props.theme.mobileBreakpoint}px) {
    min-height: calc(100vh - ${(props) => props.theme.headerNormalHeight}px);
  }
`

export const TopWrapper = styled.div`
  height: 300px;
  padding-top: 5px;
  padding-inline: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;

  @media (min-width: ${(props) => props.theme.mobileBreakpoint}px) {
    padding-top: 10px;
    padding-inline: 10px;
    gap: 20px;
  }
`

export const ImageWrapper = styled.img`
  aspect-ratio: 1;
  border: 1px solid ${(props) => props.theme.componentsBorderColor};
  border-radius: 50%;
  object-fit: cover;
  height: 150px;

  @media (min-width: ${(props) => props.theme.mobileBreakpoint}px) {
    height: 200px;
  }
`

export const PrezWrapper = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

`

export const H2 = styled.h2`
  ${Heading2};
`

export const H3 = styled.h3`
  ${Heading3};
  text-align: center;
`

export const Subtitle = styled.p`
  ${Heading3};
`

export const TextContent = styled.p`
  padding-left: 10px;
  padding-bottom: 10px;
  ${Text};
  font-size: 20px;
  font-style: italic;
  max-width: 300px;

  @media (min-width: ${(props) => props.theme.mobileBreakpoint}px) {
    max-width: 400px;
  }

  @media (min-width: ${(props) => props.theme.tabletBreakpoint}px) {
    max-width: 550px;
  }
`

export const ContactButton = styled(Button)`
  padding-inline: 10px;
  padding-block: 4px;
  width: fit-content;
  ${Text};
`

export const SkillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-bottom: 20px;
`

export const DifferentSkills = styled.div`
  width: 100%;
  padding-inline: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (min-width: ${(props) => props.theme.mobileBreakpoint}px) {
    flex-direction: row;
    gap: 5px;
  }

  @media (min-width: ${(props) => props.theme.tabletBreakpoint}px) {
    gap: 5%;
  }
`