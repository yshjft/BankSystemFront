import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {routes} from './route'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Switch>
      </Router>
    </div>
  )
}

export default App
