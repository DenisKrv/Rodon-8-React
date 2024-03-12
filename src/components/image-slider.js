import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './image-slider.css'

const ImageSlider = (props) => {
  const [isVisible, setIsVisible] = useState(1)
  return (
    <div className={`image-slider-container ${props.rootClassName} `}>
      {isVisible === 1 && (
        <div className="image-slider-slide1">
          <img
            alt={props.imageAlt}
            src='https://lh3.googleusercontent.com/drive-viewer/AKGpihapg1OdBJqQoXgOIzQgLK03fBm1ZhRSSXd1hOOP_ArFD3TVBnZGVSretBc9jqfzNN-ck4_T4noVlBpzq78UQdKfs85dbw=s1600?source=screenshot.guru"&gt; &lt;img src="https://lh3.googleusercontent.com/drive-viewer/AKGpihapg1OdBJqQoXgOIzQgLK03fBm1ZhRSSXd1hOOP_ArFD3TVBnZGVSretBc9jqfzNN-ck4_T4noVlBpzq78UQdKfs85dbw=s1600'
            className="image-slider-image"
          />
          <div
            onClick={() => setIsVisible(3)}
            className="image-slider-left-button"
          >
            <svg viewBox="0 0 1024 1024" className="image-slider-icon">
              <path
                d="M658 708l-60 60-256-256 256-256 60 60-196 196z"
                className=""
              ></path>
            </svg>
          </div>
          <div
            onClick={() => setIsVisible(2)}
            className="image-slider-right-button"
          >
            <svg viewBox="0 0 1024 1024" className="image-slider-icon02">
              <path
                d="M366 708l196-196-196-196 60-60 256 256-256 256z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
      )}
      {isVisible === 2 && (
        <div className="image-slider-slide2">
          <img
            alt={props.imageAlt1}
            src='https://lh3.googleusercontent.com/drive-viewer/AKGpihZPrWZ88Cd9NnNy66uV-qTeRrX5p9SZAFfKGlbBLunCoFwio8jI-f8msJw9yzIMAc0qeMtcog_tRygYK_bqaf1WnPN-cA=s1600?source=screenshot.guru"&gt; &lt;img src="https://lh3.googleusercontent.com/drive-viewer/AKGpihZPrWZ88Cd9NnNy66uV-qTeRrX5p9SZAFfKGlbBLunCoFwio8jI-f8msJw9yzIMAc0qeMtcog_tRygYK_bqaf1WnPN-cA=s1600'
            className="image-slider-image1"
          />
          <div
            onClick={() => setIsVisible(1)}
            className="image-slider-left-button1"
          >
            <svg viewBox="0 0 1024 1024" className="image-slider-icon04">
              <path
                d="M658 708l-60 60-256-256 256-256 60 60-196 196z"
                className=""
              ></path>
            </svg>
          </div>
          <div
            onClick={() => setIsVisible(3)}
            className="image-slider-right-button1"
          >
            <svg viewBox="0 0 1024 1024" className="image-slider-icon06">
              <path
                d="M366 708l196-196-196-196 60-60 256 256-256 256z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
      )}
      {isVisible === 3 && (
        <div className="image-slider-slide3">
          <img
            alt={props.imageAlt11}
            src='https://lh3.googleusercontent.com/drive-viewer/AKGpihb2t-pn4QxBO536XYPScacVkZDI8US5w-oBbAGXLLVye45HbuxNnJhWvHD4s3OPNQUSr2-04lfrFSP9VsEVXw4Deq7ohw=s1600?source=screenshot.guru"&gt; &lt;img src="https://lh3.googleusercontent.com/drive-viewer/AKGpihb2t-pn4QxBO536XYPScacVkZDI8US5w-oBbAGXLLVye45HbuxNnJhWvHD4s3OPNQUSr2-04lfrFSP9VsEVXw4Deq7ohw=s1600'
            className="image-slider-image2"
          />
          <div
            onClick={() => setIsVisible(2)}
            className="image-slider-left-button2"
          >
            <svg viewBox="0 0 1024 1024" className="image-slider-icon08">
              <path
                d="M658 708l-60 60-256-256 256-256 60 60-196 196z"
                className=""
              ></path>
            </svg>
          </div>
          <div
            onClick={() => setIsVisible(1)}
            className="image-slider-right-button2"
          >
            <svg viewBox="0 0 1024 1024" className="image-slider-icon10">
              <path
                d="M366 708l196-196-196-196 60-60 256 256-256 256z"
                className=""
              ></path>
            </svg>
          </div>
        </div>
      )}
    </div>
  )
}

ImageSlider.defaultProps = {
  imageAlt11: 'image',
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imageAlt: 'image',
  imageAlt1: 'image',
  rootClassName: '',
}

ImageSlider.propTypes = {
  imageAlt11: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  imageAlt1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ImageSlider
