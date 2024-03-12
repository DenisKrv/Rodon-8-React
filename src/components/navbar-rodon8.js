import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navbar-rodon8.css'

const NavbarRodon8 = (props) => {
  return (
    <div className="navbar-rodon8-navbar-rodon8">
      <header
        data-thq="thq-navbar"
        className="navbar-rodon8-navbar-interactive navbarContainer"
      >
        <img
          alt={props.imageAlt1}
          src={props.imageSrc1}
          className="navbar-rodon8-logo"
        />
        <div data-thq="thq-burger-menu" className="navbar-rodon8-burger-menu">
          <svg
            viewBox="0 0 1024 1024"
            className="navbar-rodon8-burger-menu1 socialIcons"
          >
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div
          data-thq="thq-mobile-menu"
          className="navbar-rodon8-mobile-menu1 mobileMenu"
        >
          <div className="navbar-rodon8-nav">
            <div className="navbar-rodon8-top">
              <img
                alt={props.imageAlt11}
                src={props.imageSrc11}
                className="navbar-rodon8-logo1"
              />
              <div
                data-thq="thq-close-menu"
                className="navbar-rodon8-close-menu"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="navbar-rodon8-icon1 socialIcons"
                >
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navbar-rodon8-links Heading">
              <Link to="/" className="navbar-rodon8-home">
                {props.home1}
              </Link>
              <Link to="/rodon8-events" className="navbar-rodon8-events">
                {props.events1}
              </Link>
              <span className="navbar-rodon8-description">
                {props.description1}
              </span>
              <Link to="/properties-home-en" className="navbar-rodon8-property">
                {props.property1}
              </Link>
              <span className="navbar-rodon8-contact">{props.contact1}</span>
            </nav>
          </div>
          <div className="navbar-rodon8-icon-group">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="navbar-rodon8-icon3 socialIcons"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="navbar-rodon8-icon5 socialIcons"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="navbar-rodon8-icon7 socialIcons"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
        <div data-thq="thq-navbar-nav" className="navbar-rodon8-desktop-menu">
          <nav className="navbar-rodon8-links1">
            <Link to="/properties-home-en" className="navbar-rodon8-home1">
              {props.home}
            </Link>
            <Link to="/rodon8-events" className="navbar-rodon8-events1">
              {props.events}
            </Link>
            <span className="navbar-rodon8-description1">
              {props.description}
            </span>
            <Link to="/properties-home-en" className="navbar-rodon8-property1">
              {props.property}
            </Link>
            <Link
              to="/residential-properties-en"
              className="navbar-rodon8-contact1"
            >
              {props.contact}
            </Link>
          </nav>
        </div>
      </header>
    </div>
  )
}

NavbarRodon8.defaultProps = {
  nav42: 'Contact',
  nav121: 'Home',
  register: 'Register',
  imageAlt11: 'image',
  home: 'Home',
  description1: 'Description',
  nav32: 'Residential Properties',
  nav321: 'Residential Properties',
  logo: 'Property Athens',
  nav221: 'Comercial Properties',
  logo2: 'Property Athens',
  property1: 'Property',
  description: 'Description',
  logo1: 'PROPERTYATHENS',
  imageAlt: 'image',
  register1: 'Register',
  imageSrc1: '/external/rodon8-logo-1500h.png',
  imageAlt1: 'image',
  nav22: 'Comercial Properties',
  nav12: 'Home',
  events: 'Events',
  logo11: 'PROPERTYATHENS',
  home1: 'Home',
  property: 'Property',
  contact: 'Contact',
  imageSrc11: '/external/rodon8-logo-1500h.png',
  contact1: 'Contact',
  imageSrc: '792deb2e-dfa4-4cb5-a693-6fcd51869870',
  events1: 'Events',
  login: 'Login',
  nav421: 'Contact',
  login1: 'Login',
}

NavbarRodon8.propTypes = {
  nav42: PropTypes.string,
  nav121: PropTypes.string,
  register: PropTypes.string,
  imageAlt11: PropTypes.string,
  home: PropTypes.string,
  description1: PropTypes.string,
  nav32: PropTypes.string,
  nav321: PropTypes.string,
  logo: PropTypes.string,
  nav221: PropTypes.string,
  logo2: PropTypes.string,
  property1: PropTypes.string,
  description: PropTypes.string,
  logo1: PropTypes.string,
  imageAlt: PropTypes.string,
  register1: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt1: PropTypes.string,
  nav22: PropTypes.string,
  nav12: PropTypes.string,
  events: PropTypes.string,
  logo11: PropTypes.string,
  home1: PropTypes.string,
  property: PropTypes.string,
  contact: PropTypes.string,
  imageSrc11: PropTypes.string,
  contact1: PropTypes.string,
  imageSrc: PropTypes.string,
  events1: PropTypes.string,
  login: PropTypes.string,
  nav421: PropTypes.string,
  login1: PropTypes.string,
}

export default NavbarRodon8
