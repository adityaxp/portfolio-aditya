'use client'
import React from 'react'
import {PiCaretLeftBold, PiCaretRightBold} from 'react-icons/pi'
import {projectData} from '@/constants/projects'

interface SliderButtonsProps {
  containerStyles: string
  btnStyles: string
  iconsStyles: string
  index: number
  setIndex: (index: number) => void
  setproject: (project: any) => void
}

const SliderButtons: React.FC<SliderButtonsProps> = ({
  containerStyles,
  btnStyles,
  iconsStyles,
  index,
  setIndex,
  setproject
}) => {
  const handlePrevious = () => {
    const newIndex = index > 0 ? index - 1 : projectData.length - 1
    setIndex(newIndex)
    setproject(projectData[newIndex])
  }

  const handleNext = () => {
    const newIndex = index < projectData.length - 1 ? index + 1 : 0
    setIndex(newIndex)
    setproject(projectData[newIndex])
  }

  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={handlePrevious}>
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button className={btnStyles} onClick={handleNext}>
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  )
}

export default SliderButtons
