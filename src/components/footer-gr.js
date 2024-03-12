import React from 'react'

import PropTypes from 'prop-types'

import './footer-gr.css'

const FooterGR = (props) => {
  return (
    <div
      id="PROPERTIES-ATHENS-FOOTER-GR"
      className={`footer-gr-footer ${props.rootClassName} `}
    >
      <div className="footer-gr-container">
        <span className="footer-gr-text">{props.text}</span>
        <div className="footer-gr-container1"></div>
        <span className="footer-gr-text1">{props.text1}</span>
      </div>
    </div>
  )
}

FooterGR.defaultProps = {
  nav421: 'Contact',
  nav121: 'Home',
  nav42: 'Επικοινωνία',
  login: 'Login',
  nav12: 'Αρχηκή',
  nav321: 'Services',
  nav221: 'Properties',
  nav32: 'Οικιακά Ακίνητα',
  rootClassName: '',
  logo: 'Property Athens',
  text1: 'Τηλέφωνα Επικοινωνίας: +30 210 961 8516, +30 6977402514',
  register: 'Register',
  text: 'Τηλέφωνο Επικοινωνίας Ιδιοκτήτη: +30 69 44 69 1446',
  logo1: 'PROPERTYATHENS',
  nav22: 'Επαγγελματικά Ακίνητα',
}

FooterGR.propTypes = {
  nav421: PropTypes.string,
  nav121: PropTypes.string,
  nav42: PropTypes.string,
  login: PropTypes.string,
  nav12: PropTypes.string,
  nav321: PropTypes.string,
  nav221: PropTypes.string,
  nav32: PropTypes.string,
  rootClassName: PropTypes.string,
  logo: PropTypes.string,
  text1: PropTypes.string,
  register: PropTypes.string,
  text: PropTypes.string,
  logo1: PropTypes.string,
  nav22: PropTypes.string,
}

export default FooterGR
