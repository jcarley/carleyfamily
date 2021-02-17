import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Dashboard } from './features/dashboard/Dashboard';
import { Home } from './features/home/Home';

function App() {
  return (
    <Router>
      <div className='app'>
        <div className='grid-container grid grid-flow-row grid-rows-3 h-screen'>
          <div className='header'>
            <div className='p-2'>
              <Link className='mr-2' to='/'>
                Home
              </Link>
              <Link to='/dashboard'>Dashboard</Link>
            </div>
          </div>
          <div className='main'>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/dashboard'>
                <Dashboard />
              </Route>
            </Switch>
          </div>
          <div className='footer'>Footer</div>
        </div>
      </div>
    </Router>
  );
}

export default App;
