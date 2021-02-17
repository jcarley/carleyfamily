import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Dashboard } from './features/dashboard/Dashboard';
import { Signin } from './features/signin/Signin';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/signin'>
          <Signin />
        </Route>
        <Route path='/dashboard'>
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
