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
        <img src="/static/EastPerl.svg" alt="EastPerl"/>
        <h2 className="sha-img-legend">FCC Shanghai</h2>
        <ul className="sha-side-bar">
            {SideBarItems.map((v, i) => <SideItem title={v.title} icon={v.icon} to={v.to} key={i} />)}  
        </ul>

        <div className="sha-social">
          <h3 className="sha-social-legend">Join Us</h3>
          <p className="sha-social-icons">
            <img src="/static/github.svg" alt="" className="sha-social-icon"/>
            <img src="/static/qq.svg" alt="" className="sha-social-icon"/>
            <img src="/static/wechat.svg" alt="" className="sha-social-icon"/>
          </p>
        </div>
      </div>
    )
  }
};