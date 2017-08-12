import React from 'react';
import { Link } from 'react-router-dom';
import {Menu, Icon} from 'antd';

export const SideItem = (props) => (
  <Menu.Item {...props}>
    <Link to={props.to}>
      <Icon type={props.icon} style={{ fontSize: 16 }} />
      {props.title}
    </Link>
  </Menu.Item>
);