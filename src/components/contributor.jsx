import '../styles/contributors.scss';
import React from 'react';

export default class Contributor extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    const user = this.props.user;
    return (
      <div className="contributor">
        <span className="bg"></span>
        <img className="logo" src={user.avatar_url || '/static/EastPerl.svg'}/>
        <div className="info">
          <div className="nickname">{user.nickname}</div>
          <div className="cup">罩杯: {user.cup}</div>
          <div className="hobbies">爱好: {user.hobbies}</div>
        </div>
      </div>
    )
  }
}