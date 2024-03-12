import React from 'react'

import PropTypes from 'prop-types'

import './rodon-footer.css'

const RodonFooter = (props) => {
  return (
    <div
      id="PROPERTIES-ATHENS-FOOTER-ENG"
      className={`rodon-footer-rodon-footer ${props.rootClassName} `}
    >
      <div className="rodon-footer-container">
        <span className="rodon-footer-text">{props.text}</span>
        <div className="rodon-footer-container1"></div>
        <span className="rodon-footer-text1">{props.text1}</span>
      </div>
    </div>
  )
}

RodonFooter.defaultProps = {
  text: 'Owner Contact Number: +30 69 44 69 1446',
  text1: 'Contact Numbers: +30 210 961 8516, +30 6977402514',
  rootClassName: '',
}

RodonFooter.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default RodonFooter
