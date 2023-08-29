import React, { FC } from 'react'
import { Avatar, Row, Col } from 'antd'
import LightSpeed from 'react-reveal/LightSpeed'
import Fade from 'react-reveal/Fade'
import Live from './live'
import about from './index.module.scss'
import Lottie from 'react-lottie'
import blockGif from '../../../assets/lottie/block.json'
import rocket from '../../../assets/img/rocket.png'
import avatar from '../../../assets/img/avatar.jpg'
type Props = {
  className?: string
}
const Options = {
  loop: true,
  autoplay: true,
  animationData: blockGif,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}
const About: FC<Props> = () => {
  return (
    <div id="about" className={about.about}>
      <div className={about.workspace}>
        <Fade cascade>
          <img src={rocket} alt="workspace"></img>
        </Fade>
      </div>
      <div className={about.info}>
        <Row>
          <Col span={24}>
            <div className={about.top}>
              <LightSpeed>
                <h2 className={about.title}>关于</h2>
                <h3 className={about.name}>
                  哈喽，我是前端奇遇记 🗒️
                  <br />
                  聊聊我自己👨‍🏭
                </h3>
              </LightSpeed>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24} lg={12}>
            <div className={about.avatar}>
              <Fade left>
                <Avatar src={avatar} size={{ xs: 200, sm: 220, md: 240, lg: 260, xl: 280, xxl: 300 }}></Avatar>
              </Fade>
            </div>
          </Col>
          <Col span={24} lg={12}>
            <div className={about.desc}>
              <Fade bottom>
                <p className={about.padbot20}>
                  我是 孙自愿
                  ，99公兔🐇一只(单身)，一个前端开发者👨‍💻，坐标📍上海浦东，根据工作需要目前专注于B端管理后台和uniapp小程序开发。热衷于解决复杂的用户界面挑战，并在代码的世界中不断追求卓越。
                </p>
              </Fade>
              <Fade bottom>
                <p>
                  不仅仅满足于工作领域，平时喜欢折腾一些有意义的事情，比如说使用开始涉猎react18.x开发个人网站、用Python进行爬虫🕷️、实现一些一些有时候天马行空想到的idea🎠...
                </p>
              </Fade>
              <Fade bottom>
                <Lottie options={Options} height={180} width={180}></Lottie>
              </Fade>
              <Fade bottom>
                <p className={about.padbot20}>
                  当然不仅仅有工作，还要有生活，平时也没有什么特殊的爱好，只不过偶尔爬爬山🏔️、和朋友聚聚🍾、打打桌球🎱(虽然技术很水但是喜欢)；宅在家里的时候偶尔打游戏🎮，不过最喜欢的还是自己做饭🍱(很享受做饭的过程，像是完成一个大工程似的💪)...更多人生技能点陆续点亮中
                </p>
              </Fade>
              <Fade bottom>
                <p>目前最想做的事情就是能够遇见人生的另一半，尝一尝爱情的苦🐶...</p>
              </Fade>
            </div>
          </Col>
        </Row>
        <Live></Live>
      </div>
    </div>
  )
}
export default About
