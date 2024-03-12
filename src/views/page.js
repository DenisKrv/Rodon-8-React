import React from 'react'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Rodon 8</title>
        <meta property="og:title" content="Page - Rodon 8" />
      </Helmet>
      <div className="page-header">
        <img
          alt="image"
          src="/external/rodon8-logo-200h.png"
          className="page-logo"
        />
      </div>
      <div className="page-container1">
        <div className="page-container2">
          <span className="page-text">
            <span>Error - 404</span>
            <br></br>
          </span>
        </div>
      </div>
      <div className="page-header1">
        <img
          alt="image"
          src="/external/rodon8-logo-200h.png"
          className="page-logo1"
        />
      </div>
    </div>
  )
}

export default Page
