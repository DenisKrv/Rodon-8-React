import React from 'react'

import PropTypes from 'prop-types'

import './footer-en.css'

const FooterEN = (props) => {
  return (
    <div
      id="PROPERTIES-ATHENS-FOOTER-ENG"
      className={`footer-en-footer ${props.rootClassName} `}
    >
      <div className="footer-en-container">
        <span className="footer-en-text">{props.text}</span>
        <div className="footer-en-container1"></div>
        <span className="footer-en-text1">{props.text1}</span>
      </div>
    </div>
  )
}

FooterEN.defaultProps = {
  rootClassName: '',
  text: 'Owner Contact Number: +30 69 44 69 1446',
  text1: 'Contact Numbers: +30 210 961 8516, +30 6977402514',
}

FooterEN.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default FooterEN
