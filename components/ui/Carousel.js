'use client'

import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import React, {useState, useEffect} from 'react'

const ProjectCarousel = ({images, id}) => {
  // Carousel reset hack (this so f***ing  stupid)
  // TODO: Aditya please change this  ASAP
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    setSlide(0)

    const timer = setTimeout(() => {
      setSlide(null)
    }, 100)

    return () => clearTimeout(timer)
  }, [id])

  return (
    <div className="mx-auto select-none">
      <Carousel
        showArrows={true}
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        showThumbs={false}
        dynamicHeight={false}
        emulateTouch={false}
        showStatus={false}
        selectedItem={slide}
      >
        {images.map((image, index) => {
          return (
            <div key={index}>
              <img src={image} alt="Banner img" className="rounded-xl" />
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default ProjectCarousel
