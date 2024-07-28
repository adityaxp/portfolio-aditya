'use client'

import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const ProjectCarousel = (props) => {
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
      >
        {props.images.map((image, index) => {
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
