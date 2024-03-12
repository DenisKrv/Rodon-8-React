import React from 'react'

import { Helmet } from 'react-helmet'

import NavbarRodon8 from '../components/navbar-rodon8'
import ImageSlider from '../components/image-slider'
import './rodon8-main.css'

const Rodon8Main = (props) => {
  return (
    <div className="rodon8-main-container">
      <Helmet>
        <title>Rodon 8</title>
        <meta property="og:title" content="Rodon 8" />
      </Helmet>
      <NavbarRodon8></NavbarRodon8>
      <div className="rodon8-main-container1">
        <div className="rodon8-main-container2">
          <ImageSlider rootClassName="image-slider-root-class-name"></ImageSlider>
          <div className="rodon8-main-container3">
            <span className="rodon8-main-text">
              <span>ΡΟΔΩΝ 8 ΑΛΙΜΟΣ 17456</span>
              <br></br>
              <span>info@rodon8.com</span>
              <br></br>
              <span>Tel +30210 9944342</span>
              <br></br>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rodon8Main
