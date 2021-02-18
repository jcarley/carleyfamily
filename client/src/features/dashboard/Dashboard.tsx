import React, { ReactElement } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { Albums } from '../albums/Albums';
import { SideNavBar } from '../layout/SideNavBar';
import { Photos } from '../photos/Photos';
import { Sharing } from '../sharing/Sharing';
import { Trash } from '../trash/Trash';

export const Dashboard = (): ReactElement => {
  let { url } = useRouteMatch();

  return (
    <div className='dashboard-grid-container'>
      <div className='dashboard-toolbar'>
        <span className='inline-block h-8 text-2xl font-semibold align-bottom'>CarleyFamily.com</span>
        <span className='cursor-pointer text-blue-500 hover:text-blue-800 transition-colors'>
          <label htmlFor='check'>
            <i className='fas fa-bars'></i>
          </label>
        </span>
      </div>
      <div className='dashboard-main'>
        <input type='checkbox' name='check' id='check' />
        <div className='sidebar'>
          <SideNavBar />
        </div>
        <div className='debug content'>
          <Switch>
            <Route path={`${url}/photos`} component={Photos} />
            <Route path={`${url}/sharing`} component={Sharing} />
            <Route path={`${url}/albums`} component={Albums} />
            <Route path={`${url}/trash`} component={Trash} />
          </Switch>
        </div>
      </div>
    </div>
  );
};
