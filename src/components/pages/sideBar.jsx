import React from 'react';
import {SideItem} from '../sideItem';
import SideBarItems from '../../config/sidebar.config';
import {Menu, Popover} from 'antd';

export default class SideBar extends React.Component {
  render() {
    const wechatPopover = (
      <img src="/static/group-owner.jpg" alt=""
        style={{ height: '260px', width: '200px'}}/>
    );
    return (
      <div>
        <img className="sha-main-logo" src="/static/EastPerl.svg" alt="EastPerl"/>
        <h2 className="sha-img-legend">FCC Shanghai</h2>
        <Menu mode="inline" theme="light" defaultSelectedKeys={["0"]}>
          {SideBarItems.map((v, i) => <SideItem title={v.title} icon={v.icon} to={v.to} key={i}/>)}
        </Menu>
        <div className="sha-social">
          <h3 className="sha-social-legend">Join Us</h3>
          <p className="sha-social-icons">
            <a href="https://github.com/FccSHA/FccSHA.github.io" target="_blank" rel="noopener noreferrer">
              <img src="/static/github.svg" alt="" className="sha-social-icon"/>
            </a>
            <a href="//shang.qq.com/wpa/qunwpa?idkey=cd476c93cb4faf805ba36b1be3a0daf0359d31628b14f654fc7a086dd911d05a"
               target="_blank" rel="noopener noreferrer">
              <img src="/static/qq.svg" alt="" className="sha-social-icon"/>
            </a>
            <Popover content={wechatPopover}>
              <a target="_blank" rel="noopener noreferrer">
                <img src="/static/wechat.svg" alt="WeChat" className="sha-social-icon"/>
              </a>
            </Popover>
          </p>
        </div>
      </div>
    )
  }
};