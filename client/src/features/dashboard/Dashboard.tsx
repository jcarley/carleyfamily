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
    <div className='grid-container'>
      <div className='sidebar border-r-2 shadow-xl'>
        <SideNavBar />
      </div>
      <div className='content'>
        <Switch>
          <Route path={`${url}/photos`} component={Photos} />
          <Route path={`${url}/sharing`} component={Sharing} />
          <Route path={`${url}/albums`} component={Albums} />
          <Route path={`${url}/trash`} component={Trash} />
        </Switch>
      </div>
    </div>
  );
};
