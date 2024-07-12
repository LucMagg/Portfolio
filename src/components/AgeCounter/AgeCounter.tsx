import React, { useEffect, useState } from 'react'
import { differenceInYears, differenceInMonths, differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns'
import { useTranslation } from 'react-i18next'


export default function AgeCounter({ birthDateTime }) {
  const differenceBetweenDates = (startDate: Date, endDate: Date) => {
    return {
      years: differenceInYears(endDate, startDate),
      months: differenceInMonths(endDate, startDate) % 12,
      days: differenceInDays(endDate, startDate) % 30,
      hours: differenceInHours(endDate, startDate) % 24,
      minutes: differenceInMinutes(endDate, startDate) % 60,
      seconds: differenceInSeconds(endDate, startDate) % 60
    }
  }

  const [difference, setDifference] = useState(differenceBetweenDates(birthDateTime, new Date()))

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDifference(differenceBetweenDates(birthDateTime, new Date()))
    }, 1000)

    return () => clearInterval(intervalId)
  }, [birthDateTime])

  const { t } = useTranslation()

  const calcCounterText = () => {
    const countToString = Object.entries(difference).reduce((acc, [key, value]) => {
      if (value > 0) {
        const unit = t(`counter.${key}.${value === 1 ? 'singular' : 'plural'}`)
        acc.push(`${value} ${unit}`)
      }
      return acc
    }, [] as string[])
    
    let toReturn = ''
    for (let i = 0; i < countToString.length - 1; i++) {
      toReturn += countToString[i] + ', '
    }
    return toReturn.substring(0, toReturn.length - 2) + t('counter.and') + countToString[countToString.length - 1]
  }

  return (
    <span>{calcCounterText()}</span>
  )
}