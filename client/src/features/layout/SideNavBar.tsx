import React, { ReactElement } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

interface SideNavBarProps {}

export const SideNavBar = (props: SideNavBarProps): ReactElement => {
  let { url } = useRouteMatch();

  return (
    <nav>
      <div>
        <ul className='p-2'>
          <li className='nav-item'>
            <Link to={`${url}/photos`}>
              <span className='nav-icon'>
                <i className='far fa-image'></i>
              </span>
              <span className='nav-text'>Photos</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to={`${url}/sharing`}>
              <span className='nav-icon'>
                <i className='far fa-share-square'></i>
              </span>
              <span className='nav-text'>Sharing</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to={`${url}/albums`}>
              <span className='nav-icon'>
                <i className='far fa-images'></i>
              </span>
              <span className='nav-text'>Albums</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to={`${url}/trash`}>
              <span className='nav-icon'>
                <i className='far fa-trash-alt'></i>
              </span>
              <span className='nav-text'>Trash</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
