import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import { Switch, BrowserRouter } from 'react-router-dom'
import configureStore from './store'
import Base from './layouts/Base'
import Resume from './pages/Resume'
import Notfound from './pages/404'
import Shutter from './pages/Shutter'
import WaveGrid from './pages/WaveGrid'
import Cube from './pages/Cube'
import CardCarousel from './pages/CardCarousel'
import Logo from './pages/Logo'
import Worm from './pages/Worm'

import './index.css'

ReactDOM.render(
  <Provider store={configureStore()}>
    <BrowserRouter>
      <Switch>
        <Base exact path="/" component={Resume} />
        <Base exact path="/shutter" component={Shutter} />
        <Base exact path="/wave-grid" component={WaveGrid} />
        <Base exact path="/cube" component={Cube} />
        <Base exact path="/carousel" component={CardCarousel} />
        <Base exact path="/worm" component={Worm} />
        <Base exact path="/logo" component={Logo} />
        <Base path="/" component={Notfound} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// registerServiceWorker();
