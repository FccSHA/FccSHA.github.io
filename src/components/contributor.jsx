import '../styles/contributors.scss';
import React from 'react';
import {Card, Tag} from 'antd';

export default class Contributor extends React.Component {
  render() {
    const user = this.props.user;
    const color = ["pink", "red", "orange", "green", "cyan", "blue", "purple"];
    return (
      <Card className="sha-contributor">
        <a target="_blank" href={"https://github.com/" + user.username}>
          <img className="sha-logo" alt="" src={user.avatar_url || '/static/imgs/EastPerl.svg'}/>
          <div className="sha-info">
            <div className="sha-nickname">{user.nickname}</div>
            <div className="sha-cup">罩杯: {user.cup}</div>
            <div className="sha-hobbies">{user.hobbies.map((hobby, index) => (
              <Tag key={index} color={color[[Math.floor(Math.random() * 7)]]}>{hobby}</Tag>
            ))}</div>
          </div>
        </a>
      </Card>
    )
  }
}