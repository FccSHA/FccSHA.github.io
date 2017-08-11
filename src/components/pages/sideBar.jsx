import React from 'react';
import { Link } from 'react-router-dom';
import {SideItem} from '../sideItem';
import SideBarItems from '../../config/sidebar.config';

export default class SideBar extends React.Component {
  constructor() { 
    super();
  };

  render() {
    return (
      <div>
        <ul className="sha-side-bar">
            {SideBarItems.map((v, i) => <SideItem title={v.title} icon={v.icon} key={i} />)}  
        </ul>
      </div>
    )
  }
};