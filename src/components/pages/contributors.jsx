import React from 'react';
import axios from 'axios';
import Contributor from '../contributor';
import userNameList from '../../config/contributors.config'
import {Col, Row} from 'antd';

export default class Contributors extends React.Component {
  constructor() {
    super();
    this.state = {
    //   users: []
      users: userNameList
    }
    this.getContributors = this.getContributors.bind(this);
  }

  getContributors(username){
    let promiseList = userNameList.map((user)=>{
        return axios.get(`https://api.github.com/users/${user.username}`);
    });
    return axios.all(promiseList);
  }

  componentDidMount(){
    this.getContributors().then((res)=>{
      if(!res || !res.length){
        return ;
      }
      this.setState({
        users: res.map((user, index)=>{
          if(user && user.data){
            return Object.assign({}, user.data, userNameList[index]);
          }else{
            return userNameList[index]
          }
        })
      })
    })
  }

  render() {
    const users = this.state.users.map((user, index)=>{
      return (
        <Col span={8} key={index}>
          <Contributor user={user}/>
        </Col>
      );
    })
    return (
      <div className="sha-contributors">
        <div className="sha-title">Contributors</div>
        <Row gutter={16} className="sha-contributors-wall">
          {users}
        </Row>
      </div>
    )
  }

}