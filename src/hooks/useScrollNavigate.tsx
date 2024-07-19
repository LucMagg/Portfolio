import * as Scroll from 'react-scroll'
import { contractStr } from '../assets/utils'
import { commonTheme } from '../data/Theme/themes'
import { useLocation, useNavigate } from 'react-router-dom'


function scrollToAnchor(anchorToScrollTo) {
  const scroller = Scroll.scroller
  
  if (anchorToScrollTo !== undefined) {
    if (window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
      scroller.scrollTo(anchorToScrollTo, {
        duration: 500,
        delay: 100,
        smooth: true,
        offset: window.innerWidth > commonTheme.mobileBreakpoint ? -commonTheme.headerNormalHeight : -commonTheme.headerMobileHeight
      })
    } else {
      scroller.scrollTo(anchorToScrollTo, {
        duration: 0,
        delay: 0,
        smooth: false,
        offset: window.innerWidth > commonTheme.mobileBreakpoint ? -commonTheme.headerNormalHeight : -commonTheme.headerMobileHeight
      })
    }
  }
}

export const useScrollNavigate = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const scrollNavigate = (navItem?: string) => {
    const amIHome = location.pathname === '/'

    if (navItem) {
      const anchor = contractStr(navItem)

      if (amIHome) {
        scrollToAnchor(anchor)
      } else {
        let p = new Promise((resolve) => { 
          navigate('/') 
          resolve(true)
        })
        p.then(() => { scrollToAnchor(anchor) })
      }

    } else {
      if (!amIHome) {
        navigate('/')
      } else {
        scrollToAnchor('top')
      }
    }
  }

  return scrollNavigate
}