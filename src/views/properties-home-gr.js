import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import HeaderGR from '../components/header-gr'
import FooterGR from '../components/footer-gr'
import './properties-home-gr.css'

const PropertiesHomeGR = (props) => {
  return (
    <div className="properties-home-gr-container">
      <Helmet>
        <title>PropertiesHomeGR - Rodon 8</title>
        <meta property="og:title" content="PropertiesHomeGR - Rodon 8" />
      </Helmet>
      <HeaderGR rootClassName="header-gr-root-class-name"></HeaderGR>
      <div className="properties-home-gr-container1">
        <div className="properties-home-gr-container2">
          <span className="properties-home-gr-text">
            <span>Καλώς ήρθατε στο Property Athens</span>
            <br></br>
          </span>
        </div>
        <div className="properties-home-gr-container3">
          <img
            alt="image"
            src="/external/property-comercial-business-offices-athens-rent_2-1400w.png"
            className="properties-home-gr-image"
          />
        </div>
        <div className="properties-home-gr-container4">
          <div className="properties-home-gr-container5">
            <Link
              to="/properties-home-en"
              className="properties-home-gr-navlink"
            >
              <img
                alt="image"
                src="/external/r-1500w.png"
                className="properties-home-gr-image1"
              />
            </Link>
          </div>
          <div className="properties-home-gr-container6">
            <Link
              to="/properties-home-gr"
              className="properties-home-gr-navlink1"
            >
              <img
                alt="image"
                src="/external/oip-1500w.png"
                className="properties-home-gr-image2"
              />
            </Link>
          </div>
        </div>
      </div>
      <FooterGR rootClassName="footer-gr-root-class-name"></FooterGR>
    </div>
  )
}

export default PropertiesHomeGR
