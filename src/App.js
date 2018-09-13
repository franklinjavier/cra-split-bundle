import React from 'react'
import Loadable from 'react-loadable'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Loading = () => (<p>Loading...</p>)

// const Screen1 = import(/* webpackChunkName: 'Screen1' */ './screens/Screen1')
// const Screen2 = import(/* webpackChunkName: 'Screen2' */ './screens/Screen2')

const Screen1 = Loadable({
  loader: () => import(/* webpackChunkName: 'Screen1' */ './screens/Screen1'),
  loading: Loading
})

const Screen2 = Loadable({
  loader: () => import(/* webpackChunkName: 'Screen2' */ './screens/Screen2'),
  loading: Loading
})

const App = () => (
  <BrowserRouter>
	<Switch>
	    <Route exact path="/screen1" component={Screen1} />
	    <Route exact path="/screen2" component={Screen2} />
	</Switch>
  </BrowserRouter>
)

export default App
