import '../styles/contributors.scss';
import React from 'react';

export default class Contributor extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    const user = this.props.user;
    return (
      <a className="sha-contributor" target="_blank" href={"https://github.com/" + user.username}>
        <img className="sha-logo" src={user.avatar_url || '/static/EastPerl.svg'}/>
        <div className="sha-info">
          <div className="sha-nickname">{user.nickname}</div>
          <div className="sha-cup">罩杯: {user.cup}</div>
          <div className="sha-hobbies">爱好: {user.hobbies}</div>
        </div>
      </a>
    )
  }
}