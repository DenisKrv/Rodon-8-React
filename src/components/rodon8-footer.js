import React from 'react'

import PropTypes from 'prop-types'

import './rodon8-footer.css'

const Rodon8Footer = (props) => {
  return (
    <div className={`rodon8-footer-rodon8-footer ${props.rootClassName} `}>
      <span className="rodon8-footer-text">
        <span>ΡΟΔΩΝ 8 ΑΛΙΜΟΣ 17456</span>
        <br></br>
        <span>info@rodon8.com</span>
        <br></br>
        <span>Tel +30210 9944342</span>
        <br></br>
      </span>
    </div>
  )
}

Rodon8Footer.defaultProps = {
  rootClassName: '',
}

Rodon8Footer.propTypes = {
  rootClassName: PropTypes.string,
}

export default Rodon8Footer
