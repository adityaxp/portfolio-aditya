'use client'
import {Confetti} from 'react-confetti'

function ConfettiEffect() {
  return (
    <Confetti
      size={8}
      shape="circle"
      colors={['#f44336', '#9c27b0', '#3f51b5']}
      wind={0.1}
      gravity={0.2}
    />
  )
}

export default ConfettiEffect
