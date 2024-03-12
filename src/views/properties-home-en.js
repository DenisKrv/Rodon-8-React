import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import FooterEN from '../components/footer-en'
import './properties-home-en.css'

const PropertiesHomeEN = (props) => {
  return (
    <div className="properties-home-en-container">
      <Helmet>
        <title>PropertiesHomeEN - Rodon 8</title>
        <meta property="og:title" content="PropertiesHomeEN - Rodon 8" />
      </Helmet>
      <Header rootClassName="header-root-class-name1"></Header>
      <div className="properties-home-en-container1">
        <div className="properties-home-en-container2">
          <span className="properties-home-en-text">
            <span>Welcome to Property Athens</span>
            <br></br>
          </span>
        </div>
        <div className="properties-home-en-container3">
          <img
            alt="image"
            src="/external/property-comercial-business-offices-athens-rent_2-1400w.png"
            className="properties-home-en-image"
          />
        </div>
        <div className="properties-home-en-container4">
          <div className="properties-home-en-container5">
            <Link
              to="/properties-home-en"
              className="properties-home-en-navlink"
            >
              <img
                alt="image"
                src="/external/r-1500w.png"
                className="properties-home-en-image1"
              />
            </Link>
          </div>
          <div className="properties-home-en-container6">
            <Link
              to="/properties-home-gr"
              className="properties-home-en-navlink1"
            >
              <img
                alt="image"
                src="/external/oip-1500w.png"
                className="properties-home-en-image2"
              />
            </Link>
          </div>
        </div>
      </div>
      <FooterEN rootClassName="footer-en-root-class-name"></FooterEN>
    </div>
  )
}

export default PropertiesHomeEN
