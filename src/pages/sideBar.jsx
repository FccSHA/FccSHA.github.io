import React from 'react';
import {SideItem} from '../components/sideItem';
import SideBarItems from '../config/sidebar.config';
import {Menu, Popover, Button, Icon} from 'antd';

export default class SideBar extends React.Component {
  render() {
    const wechatPopover = (
      <img src="/static/imgs/group-owner.jpg" alt=""
        style={{ height: '260px', width: '200px'}}/>
    );

    const NavBar = (<Menu class="sha-main-nav-phone" mode="inline" theme="light" defaultSelectedKeys={["0"]}>
      {SideBarItems.map((v, i) => <SideItem title={v.title} icon={v.icon} to={v.to} key={i}/>)}
    </Menu>);

    return (
      <div>
        <img className="sha-main-logo" src="/static/imgs/EastPerl.svg" alt="EastPerl"/>
        <h2 className="sha-img-legend">FCC Shanghai</h2>
        <Popover content={NavBar} trigger="click">
          <Button className="sha-toggle-nav" type="primary">
            <Icon type='menu-unfold'/>
          </Button>
        </Popover>
        <Menu className="sha-main-nav" mode="inline" theme="light" defaultSelectedKeys={["0"]}>
          {SideBarItems.map((v, i) => <SideItem title={v.title} icon={v.icon} to={v.to} key={i}/>)}
        </Menu>
        <div className="sha-social">
          <h3 className="sha-social-legend">Join Us</h3>
          <p className="sha-social-icons">
            <a href="https://github.com/FccSHA/FccSHA.github.io" target="_blank" rel="noopener noreferrer">
              <img src="/static/imgs/github.svg" alt="" className="sha-social-icon"/>
            </a>
            <a href="//shang.qq.com/wpa/qunwpa?idkey=cd476c93cb4faf805ba36b1be3a0daf0359d31628b14f654fc7a086dd911d05a"
               target="_blank" rel="noopener noreferrer">
              <img src="/static/imgs/qq.svg" alt="" className="sha-social-icon"/>
            </a>
            <Popover content={wechatPopover}>
              <a target="_blank" rel="noopener noreferrer">
                <img src="/static/imgs/wechat.svg" alt="WeChat" className="sha-social-icon"/>
              </a>
            </Popover>
          </p>
        </div>

      </div>
    )
  }
};