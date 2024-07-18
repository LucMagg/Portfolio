import React, { useRef, useEffect, useState } from 'react'
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

type PointsArray = PointType[];

function updateCoordinates(points: PointType[], deltaT: number): PointType[] {
  let toReturn: PointType[] = []

  for (let i = 0; i < points.length; i++) {   
    const deltaX = points[i].speed * Math.cos(points[i].angle * (Math.PI / 180)) * deltaT
    const deltaY = points[i].speed * Math.sin(points[i].angle * (Math.PI / 180)) * deltaT
    
    let newX = points[i].coordinate.x + deltaX
    let newY = points[i].coordinate.y + deltaY
    let newSpeed = points[i].speed
    let newAngle = points[i].angle

    if (newX < 0) {
      newX = 0
      newSpeed = Math.random() * 400 + 100
      if (newAngle < 180) {
        newAngle = Math.random() * 90
      } else {
        newAngle = Math.random() * 90 + 270
      }
    } else if (newX > 1000) {
      newX = 1000
      newSpeed = Math.random() * 400 + 100
      if (newAngle < 90) {
        newAngle = Math.random() * 90 + 90
      } else {
        newAngle = Math.random() * 90 + 180
      }
    } else if (newY < 0 ) {
      newY = 0
      newSpeed = Math.random() * 400 + 100
      if (newAngle < 270) {
        newAngle = Math.random() * 90 + 90
      } else {
        newAngle = Math.random() * 90
      }
    } else if (newY > 1000 ) {
      newY = 1000
      newSpeed = Math.random() * 400 + 100
      if (newAngle < 90) {
        newAngle = Math.random() * 90 + 270
      } else {
        newAngle = Math.random() * 90 + 180
      }
    }

    toReturn.push({ 
      coordinate: { x: newX, y: newY },
      angle: newAngle,
      speed: newSpeed
    })
  }

  return toReturn
}

export default function OldSchoolBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { footerRef, footerHeight } = useFooterContext()

  const [points, setPoints] = useState<PointsArray>(Array.from({ length: 4 }, () => ({
    coordinate: { x: Math.random() * 990 + 5, y: Math.random() * 990 + 5 },
    speed: Math.random() * 400 + 100,
    angle: Math.random() * 360
  })))
  const delta = 1/60

  const theme = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    let animationFrameId: number
    let lastUpdateTime = performance.now()

    const render = () => {
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        
        ctx.beginPath()
        ctx.moveTo(points[0].coordinate.x, points[0].coordinate.y)
        ctx.lineTo(points[1].coordinate.x, points[1].coordinate.y)
        ctx.lineTo(points[2].coordinate.x, points[2].coordinate.y)
        ctx.lineTo(points[3].coordinate.x, points[3].coordinate.y)
        ctx.closePath()
        ctx.strokeStyle = theme.componentBackGroundColor    
        ctx.lineWidth = 2
        ctx.stroke()
      }
    }

    const update = () => {
      const currentTime = performance.now();
      if (currentTime - lastUpdateTime > 1000 / 60) {
        setPoints((prevPoints) => updateCoordinates(prevPoints, delta));
        lastUpdateTime = currentTime;
      }
      render();
      animationFrameId = requestAnimationFrame(update);
    };

    update() // Start the animation

    return () => {
      cancelAnimationFrame(animationFrameId)
    };
  }, [points])

  return <StyledCanvas ref={ canvasRef } height={ 1000 } width={ 1000 } $footerheight={ footerHeight }/>
}