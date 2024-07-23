import styled from 'styled-components'
import { FlexColumnCenter, Text } from '../../data/Theme/globalStyles'


export const StackCardsWrapper = styled.div`
  ${ FlexColumnCenter };
  gap: 5px;
`

export const StackTitle = styled.p`
  ${ Text };
  font-size: 22px;
`

export const SkillsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  gap: 5px;
`

export const SkillCardWrapper = styled.div`
  ${ FlexColumnCenter };
  height: 100%;
  gap: 5px;
  box-sizing: border-box;

  @media(min-width: ${ (props) => props.theme.tabletBreakpoint}px) {
    gap: 10px;
  }
`

export const SkillCardPic = styled.img`
  width: 95px;
  aspect-ratio: 1;
  object-fit: contain;
  overflow: hidden;

  @media(min-width: ${ (props) => props.theme.mobileBreakpoint }px) and (max-width: ${ (props) => props.theme.tabletBreakpoint }px) {
    width: 75px;
  }
`