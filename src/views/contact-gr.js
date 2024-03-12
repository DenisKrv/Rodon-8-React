import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import FooterEN from '../components/footer-en'
import './contact-gr.css'

const ContactGR = (props) => {
  return (
    <div className="contact-gr-container">
      <Helmet>
        <title>ContactGR - Rodon 8</title>
        <meta property="og:title" content="ContactGR - Rodon 8" />
      </Helmet>
      <Header rootClassName="header-root-class-name2"></Header>
      <div className="contact-gr-container1">
        <div className="contact-gr-container2">
          <span className="contact-gr-text">
            <span>Welcome to Property Athens</span>
            <br></br>
          </span>
        </div>
        <div className="contact-gr-container3"></div>
      </div>
      <FooterEN rootClassName="footer-en-root-class-name2"></FooterEN>
    </div>
  )
}

export default ContactGR
