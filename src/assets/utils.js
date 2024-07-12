import * as Scroll from 'react-scroll'
import { history } from './history'
import { commonTheme } from '../data/Theme/themes'

import data from '../data/portfolio/portfolio.json'


function scrollToAnchor(anchorToScrollTo) {
  const scroller = Scroll.scroller
  
  if (anchorToScrollTo !== undefined) {
    scroller.scrollTo(anchorToScrollTo, {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: window.innerWidth > commonTheme.mobileBreakpoint ? -commonTheme.headerNormalHeight : -commonTheme.headerMobileHeight
    })
  }
}

async function handleScroll(e, navItem) {
  e.preventDefault()
  const amIHome = location.pathname.split('/')[1] === '' ? true : false

  if (navItem) {
    const anchor = contractStr(navItem)

    if (amIHome) {
      scrollToAnchor(anchor)
    } else {
      let p = new Promise((resolve) => { 
        history.navigate('/') 
        resolve(true)
      })
      p.then(() => { scrollToAnchor(anchor) })
    }

  } else {
    if (!amIHome) {
      history.navigate('/')
    } else {
      scrollToAnchor('top')
    }
  }
}

function contractStr(strToContract) {
  if (strToContract !== undefined) {
    return strToContract.toLowerCase().split(' ').join('-').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  } else {
    return ''
  }
}

function filterLoader() {
  const filters = new Set()
  data.map((item) => { filters.add(item.type) })
  filters.add('all')
  return Array.from(filters)
}


export { scrollToAnchor, handleScroll, contractStr, filterLoader }