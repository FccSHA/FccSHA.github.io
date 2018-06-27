import React from 'react';
import {Carousel} from 'antd';

export default class AboutUs extends React.Component {
  render() {
    return (
      <div className="sha-about-us">
        <h3 className="sha-carousel-legend">来自各个社区的小伙伴</h3>
        <div className="sha-carousel">
          <Carousel autoplay>
            <div><img src="/static/imgs/hongkong.png" alt="Hong Kong"/></div>
            <div><img src="/static/imgs/guangzhou.png" alt="Guang Zhou"/></div>
            <div><img src="/static/imgs/suzhou.png" alt="Su Zhou"/></div>
            <div><img src="/static/imgs/chengdu.png" alt="Cheng Du"/></div>
            <div><img src="/static/imgs/shanghai.jpeg" alt="Shang Hai"/></div>
          </Carousel>
        </div>
        <div className="sha-who-are-we">
          <h3 className="sha-intro-title">
            关于我们
          </h3>
          <p className="sha-intro-content">
            FCC上海社区是一个传承了FCC全球社区倡导人人皆可编程的主旨思想, 面向上海所有有意愿学习的编程,
            热爱编程, 还有那些想要通过编程找到一份满意工作的学生以及社会群众. 是一个可以帮助上海公益组织贡献
            代码, 帮助大学生积累经验, 帮助企业培养人才为目的的公益性开发者社区. 截止目前为止, 社区的人数已经有
            300余人. 是社员们作为日常交流, 学习的平台.
          </p>
        </div>
        <div className="sha-why-join">
          <h3 className="sha-intro-title">
            为什么加入我们?
          </h3>
          <p className="sha-intro-content">
            FreeCodeCamp 是由 Quincy Larson 创办的开源社区，它致力于帮助人们利用零散时间学习编程，内容以
            前端和JS全栈为主。目前已经发展成为一个30万开发者的社区，通过游戏化的项目实战，来吸引大家学习编
            程，并在社区内给予实时的帮助。同时，为 NPO、NGO 组织给予技术支持。通过学习4个部分课程，你将获
            得 FCC 颁布的4个证书，分别是“前端开发证书”、“数据可视化证书”、“后端开发证书”、“全栈开发证书”。
          </p>
        </div>
      </div>
    )
  }
};