import React, { createContext, useContext, useState, useEffect, useRef } from 'react'

type FooterContextType = {
  footerRef: React.RefObject<HTMLDivElement>
  footerHeight: number
}

const FooterContext = createContext<FooterContextType | undefined>(undefined)

export const FooterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const footerRef = useRef<HTMLDivElement>(null)
  const [footerHeight, setFooterHeight] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect()
        const visibleHeight = Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top)
        setFooterHeight(visibleHeight)
      }
    }
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          handleResize()
          window.addEventListener('resize', handleResize)
          window.addEventListener('scroll', handleResize)
        } else {
          setFooterHeight(0);
          window.removeEventListener('resize', handleResize)
          window.removeEventListener('scroll', handleResize)
        }
      },
      {
        root: null,
        threshold: 0,
      }
    )
  
    if (footerRef.current) {
      observer.observe(footerRef.current)
    }
  
    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current)
      }
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleResize)
    }
  }, [])

  return (
    <FooterContext.Provider value={{ footerRef, footerHeight }}>
      {children}
    </FooterContext.Provider>
  )
}

export const useFooterContext = () => {
  const context = useContext(FooterContext)

  if (!context) {
    throw new Error('useFooterContext utilisé sans FooterProvider')
  }

  return context
}