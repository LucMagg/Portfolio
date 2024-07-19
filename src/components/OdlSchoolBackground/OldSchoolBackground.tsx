import React, { useRef, useEffect, useState, useCallback, useMemo } from 'react'
import { StyledCanvas } from './Wrappers'
import { useTheme } from 'styled-components'
import { useFooterContext } from '../../hooks/useFooterContext'


type Coordinate = {
  x: number
  y: number
}

type PointType = {
  coordinate: Coordinate
  speed: number
  angle: number
}

type PointsArray = PointType[][]

type QuadrilateresType = PointsArray[]

type OldSchoolBackgroundTypes = {
  quadNumber: number
  speed: number
  streakNumber: number
}


export default function OldSchoolBackground({quadNumber, speed, streakNumber}: OldSchoolBackgroundTypes) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { footerRef, footerHeight } = useFooterContext()

  const theme = useTheme()

  const deltaRef = useRef(1/30)

  const setNewSpeed = () => {
    return Math.random() * speed + speed
  }
  
  const setNewAngle = (offset: number) => {
    return Math.random() * 90 + offset
  }

  const initialQuadrilateres = useMemo(() => {
    return Array.from({ length: quadNumber }, () => {
      return Array.from({ length: 4 }, () => {
        const initialPoint = {
          coordinate: { x: Math.random() * 990 + 5, y: Math.random() * 990 + 5 },
          speed: setNewSpeed(),
          angle: Math.random() * 360
        }
        return Array.from({ length: streakNumber + 1 }, (_, i) => ({
          ...initialPoint,
          coordinate: {
            x: initialPoint.coordinate.x - i * initialPoint.speed * Math.cos(initialPoint.angle * (Math.PI / 180)) * deltaRef.current,
            y: initialPoint.coordinate.y - i * initialPoint.speed * Math.sin(initialPoint.angle * (Math.PI / 180)) * deltaRef.current
          }
        }))
      })
    })
  }, [quadNumber, speed, streakNumber])
  
  const [quadrilateres, setQuadrilateres] = useState<QuadrilateresType>(initialQuadrilateres)

  const updateCoordinates = (quads: QuadrilateresType, deltaT: number): QuadrilateresType => {
    return quads.map(quadrilatere => {
      const newQuad = [...quadrilatere]
  
      for (let i = 0; i < newQuad.length; i++) {
  
        const head = newQuad[i][0];
        let newX = head.coordinate.x + head.speed * Math.cos(head.angle * (Math.PI / 180)) * deltaT;
        let newY = head.coordinate.y + head.speed * Math.sin(head.angle * (Math.PI / 180)) * deltaT;
        let newSpeed = head.speed;
        let newAngle = head.angle;
    
        if (newX < 0) {
          newX = 0
          newSpeed = setNewSpeed()
          if (newAngle < 180) {
            newAngle = setNewAngle(0)
          } else {
            newAngle = setNewAngle(270)
          }
        } else if (newX > 1000) {
          newX = 1000
          newSpeed = setNewSpeed()
          if (newAngle < 90) {
            newAngle = setNewAngle(90)
          } else {
            newAngle = setNewAngle(180)
          }
        } else if (newY < 0 ) {
          newY = 0
          newSpeed = Math.random() * 20 + 100
          if (newAngle < 270) {
            newAngle = setNewAngle(90)
          } else {
            newAngle = setNewAngle(0)
          }
        } else if (newY > 1000 ) {
          newY = 1000
          newSpeed = Math.random() * 20 + 100
          if (newAngle < 90) {
            newAngle = setNewAngle(270)
          } else {
            newAngle = setNewAngle(180)
          }
        }
  
        newQuad[i][0] = {
          coordinate: { x: newX, y: newY },
          speed: newSpeed,
          angle: newAngle
        }
    
        for (let j = newQuad[i].length - 1; j > 0; j--) {
          newQuad[i][j] = { ...newQuad[i][j-1] } as PointType
        }
      }
    
      return newQuad
    })
  }

  const render = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (ctx && canvas) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      quadrilateres.forEach((quad) => {
        for (let i = 1; i < quad[0].length; i++) {
          ctx.beginPath()
          ctx.moveTo(quad[0][i].coordinate.x, quad[0][i].coordinate.y)
          ctx.lineTo(quad[1][i].coordinate.x, quad[1][i].coordinate.y)
          ctx.lineTo(quad[2][i].coordinate.x, quad[2][i].coordinate.y)
          ctx.lineTo(quad[3][i].coordinate.x, quad[3][i].coordinate.y)
          ctx.closePath()
          ctx.strokeStyle = theme.componentBackGroundColor
          ctx.lineWidth = 1
          ctx.stroke()
        }
      })
    }
  }, [quadrilateres, theme.componentBackGroundColor])

  useEffect(() => {
    let animationFrameId: number
    let lastUpdateTime = performance.now()
  
    const update = () => {
      const currentTime = performance.now()
      if (currentTime - lastUpdateTime > 1000 / 60) {
        setQuadrilateres((prevQuads ) => updateCoordinates(prevQuads , deltaRef.current))
        lastUpdateTime = currentTime
      }
      render()
      animationFrameId = requestAnimationFrame(update)
    }
  
    update()
  
    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [updateCoordinates, render])

  const isAnimationAllowedByUser: boolean = window.matchMedia("(prefers-reduced-motion: no-preference)").matches

  return (
    <>
    { isAnimationAllowedByUser ? (
      <StyledCanvas ref={ canvasRef } height={ 1000 } width={ 1000 } $footerheight={ footerHeight }/>
    ) : null }
    </>
  )
}