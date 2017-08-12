import React from 'react';
import {SideItem} from '../sideItem';
import SideBarItems from '../../config/sidebar.config';

export default class SideBar extends React.Component {
  constructor() {
    super();
  };

  render() {
    return (
      <div>
        <img className="sha-main-logo" src="/static/EastPerl.svg" alt="EastPerl"/>
        <h2 className="sha-img-legend">FCC Shanghai</h2>
        <ul className="sha-side-bar">
          {SideBarItems.map((v, i) => <SideItem title={v.title} icon={v.icon} to={v.to} key={i}/>)}
        </ul>
        <div className="sha-social">
          <h3 className="sha-social-legend">Join Us</h3>
          <p className="sha-social-icons">
            <a href="https://github.com/FccSHA/FccSHA.github.io" target="_blank">
              <img src="/static/github.svg" alt="" className="sha-social-icon"/>
            </a>
            <a href="//shang.qq.com/wpa/qunwpa?idkey=cd476c93cb4faf805ba36b1be3a0daf0359d31628b14f654fc7a086dd911d05a"
               target="_blank">
              <img src="/static/qq.svg" alt="" className="sha-social-icon"/>
            </a>
            <a href="javascript: void(0)">
              <img src="/static/wechat.svg"
                   alt="WeChat"
                   className="sha-social-icon"
                   onMouseOver={this.onOver.bind(this)}
                   onMouseOut={this.onLeave.bind(this)}/>
            </a>
          </p>
        </div>
      </div>
    )
  }

  onOver($event) {
    const div = document.createDocumentFragment();
    const img = new Image();
    img.src = '/static/group-owner.jpg';
    img.className = 'sha-popover';
    div.append(img);
    $event.target.parentNode.append(div);
  }

  onLeave($event) {
    const parent = $event.target.parentNode;
    parent.removeChild(parent.lastChild);
  }
};