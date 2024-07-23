import styled from 'styled-components'
import { FlexColumnCenter, Focus, focusRingBorder } from '../../data/Theme/globalStyles'


export const CarouselWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: inherit;
  height: inherit;
  border-radius: inherit;
  overflow: hidden;
  position: relative;
`

export const CarouselSlide = styled.div`
  transition: transform ease 1ms;
  
  @media (prefers-reduced-motion: no-preference) {
    transition-duration: 1000ms;
  }
`


export const CarouselButton = styled.button`
  ${ FlexColumnCenter };
  position: absolute;
  width: 60px;
  height: 60px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  border: 0;
  background: none;
  padding : 0;
  cursor: pointer;

  @media (min-width: ${ (props) => props.theme.tabletBreakpoint }px) {
    width: 120px;
    height: 120px;
  }

  &.left {
    left: 0;
  }

  &.right {
    right: 0;
  }

  ${ Focus };

  &:focus, &:focus-visible, &:focus-within {
    outline-offset: -14px;
    border-radius: 50%;

    @media (min-width: ${ (props) => props.theme.tabletBreakpoint }px) {
      outline-offset: -29px;
    }
  }
`

export const CarouselButtonIcon = styled.span`
  z-index: 2;
  width: 30px;
  height: 30px;
  background-image: url('data:image/svg+xml, ${ (props) => encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 64 64" fill="${ props.theme.textColor }"><path d="M32 2C15.432 2 2 15.432 2 32c0 16.568 13.432 30 30 30s30-13.432 30-30C62 15.432 48.568 2 32 2zm1.693 46V37.428H15V27.143h18.693V16L49 32L33.693 48z"/></svg>`)}');
  background-repeat: no-repeat;

  @media (min-width: ${ (props) => props.theme.tabletBreakpoint }px) {
    width: 60px;
    height: 60px;
  }

  &.left {
      transform: rotate(180deg);
  }
`