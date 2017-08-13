import React from 'react';
import axios from 'axios';
import Contributor from '../components/contributor';
import userNameList from '../config/contributors.config'
import {Col, Row} from 'antd';

export default class Contributors extends React.Component {
  constructor() {
    super();
    this.state = {
      users: userNameList
    };
    // this.getContributors = this.getContributors.bind(this);
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
        <Col sm={{span:8}} xs={{span:24}} key={index}>
          <Contributor user={user}/>
        </Col>
      );
    });
    return (
      <div className="sha-contributors">
        <div className="sha-title">Contributors</div>
        <Row gutter={16} className="sha-contributors-wall">
          {users}
        </Row>

        <div className="sha-title">
          如何成为一位贡献者
        </div>
        <p>
          成为一位项目贡献者非常简单, 这里有一个链接, 相信你能在里面找到你想要的答案
          <a href="https://github.com/FccSHA/FccSHA.github.io/blob/master/README.md" target="_blank">链接</a>
        </p>
      </div>
    )
  }

}