import React, { ReactElement } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { SideNavItem } from './SideNavItem';

interface SideNavBarProps {}

export const SideNavBar = (props: SideNavBarProps): ReactElement => {
  let { url } = useRouteMatch();

  return (
    <nav>
      <div>
        <ul className='p-2'>
          <SideNavItem to={`${url}/photos`} iconName='far fa-image' text='Photos' />
          <SideNavItem to={`${url}/sharing`} iconName='far fa-share-square' text='Sharing' />
          <SideNavItem to={`${url}/albums`} iconName='far fa-images' text='Albums' />
          <SideNavItem to={`${url}/trash`} iconName='far fa-trash-alt' text='Trash' />
          <SideNavItem to={`${url}/trash`} iconName='fab fa-github' text='Source' className='border-t-2' />
        </ul>
      </div>
    </nav>
  );
};
