import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface Props {
  to: string;
  iconName: string;
  text: string;
  className?: string;
  activeClassName?: string;
}

export const SideNavItem = (props: Props) => {
  let location = useLocation();

  const isActive = (): string => {
    if (location.pathname === props.to) {
      return props.activeClassName === undefined ? 'active' : props.activeClassName;
    }
    return '';
  };

  return (
    <li className={['nav-item', props.className, isActive()].join(' ')}>
      <Link to={props.to}>
        <span className='nav-icon'>
          <i className={props.iconName}></i>
        </span>
        <span className='nav-text'>{props.text}</span>
      </Link>
    </li>
  );
};
