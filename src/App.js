import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
     
    </>
  );
}

export default App;
