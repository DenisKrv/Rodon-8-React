import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import ResidentialPropertiesEN from './views/residential-properties-en'
import CommercialPropertiesGR from './views/commercial-properties-gr'
import Rodon8Events from './views/rodon8-events'
import ResidentialPropertiesGR from './views/residential-properties-gr'
import PropertiesHomeGR from './views/properties-home-gr'
import Page from './views/page'
import ContactGR from './views/contact-gr'
import PropertiesHomeEN from './views/properties-home-en'
import CommercialPropertiesEN from './views/commercial-properties-en'
import Rodon8Main from './views/rodon8-main'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          component={ResidentialPropertiesEN}
          exact
          path="/residential-properties-en"
        />
        <Route
          component={CommercialPropertiesGR}
          exact
          path="/commercial-properties-gr"
        />
        <Route component={Rodon8Events} exact path="/rodon8-events" />
        <Route
          component={ResidentialPropertiesGR}
          exact
          path="/residential-properties-gr"
        />
        <Route component={PropertiesHomeGR} exact path="/properties-home-gr" />
        <Route component={Page} path="**" />
        <Route component={ContactGR} exact path="/contact-gr" />
        <Route component={PropertiesHomeEN} exact path="/properties-home-en" />
        <Route
          component={CommercialPropertiesEN}
          exact
          path="/commercial-properties-en"
        />
        <Route component={Rodon8Main} exact path="/" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
