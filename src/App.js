import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {routes} from './route'
import Header from './components/common/Header'
import {useState} from 'react'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="App">
      <Router>
        <Header isLoggedIn={isLoggedIn} />
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
