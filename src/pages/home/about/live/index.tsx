import React, { FC } from 'react'
import { Row, Col, Card, Timeline, Avatar } from 'antd'
import LightSpeed from 'react-reveal/LightSpeed'
import Fade from 'react-reveal/Fade'
import ChinaMap from '../map'
import live from './index.module.scss'
import company from '../../../../assets/img/company.png'
import hayk from '../../../../assets/img/company/hayk.png'
import dh from '../../../../assets/img/company/dh.png'
import technology from '../../../../assets/img/technology/technology.png'
import react from '../../../../assets/img/technology/React.png'
import vue from '../../../../assets/img/technology/Vue.png'
import uniapp from '../../../../assets/img/technology/uni-app.png'
import echarts from '../../../../assets/img/technology/echarts.png'
import Neo4jd3 from '../../../../assets/img/technology/relation.png'
import ElementUI from '../../../../assets/img/technology/element-ui.png'
import antDesign from '../../../../assets/img/technology/AntDesign.png'
import Webpack from '../../../../assets/img/technology/Webpack.png'
import Nodejs from '../../../../assets/img/technology/nodejs.png'
import Spider from '../../../../assets/img/technology/spider.png'
import Mysql from '../../../../assets/img/technology/MYSQL.png'
import more from '../../../../assets/img/technology/more.png'
import address from '../../../../assets/img/address.png'
import food from '../../../../assets/img/food.png'
type Props = {
  className?: string
}
const liveList = [
  {
    flag: technology,
    title: '技能画布：我独特的能力组合',
    technology: [
      {
        label: 'Vue',
        img: vue,
      },
      {
        label: 'React',
        img: react,
      },
      {
        label: 'uni-app',
        img: uniapp,
      },
      {
        label: 'Echarts',
        img: echarts,
      },
      {
        label: 'Neo4jd3',
        img: Neo4jd3,
      },
      {
        label: 'ElementUI',
        img: ElementUI,
      },
      {
        label: 'AntDesign',
        img: antDesign,
      },
      {
        label: 'Webpack',
        img: Webpack,
      },
      {
        label: 'Nodejs',
        img: Nodejs,
      },
      {
        label: 'pySpider',
        img: Spider,
      },
      {
        label: 'Mysql',
        img: Mysql,
      },
      {
        label: '解锁中...',
        img: more,
      },
    ],
  },
  {
    flag: company,
    title: '公司足迹：我的职业历程',
    timeLine: [
      {
        color: '#00CCFF',
        dot: <Avatar src={hayk} alt="hayk" size={24}></Avatar>,
        children: (
          <>
            <p>2021-09-01 至 2023-03-31</p>
            <p>北京华安云科网络技术有限公司</p>
          </>
        ),
      },
      {
        color: '#00CCFF',
        dot: <Avatar src={dh} alt="dh" size={24}></Avatar>,
        children: (
          <>
            <p>2023-05-03 至 ...</p>
            <p>上海德汇置业投资有限公司</p>
          </>
        ),
      },
    ],
  },
  {
    flag: address,
    title: '地理追忆：我曾到过的地方',
    map: true,
  },
  {
    flag: food,
    title: '厨艺画廊：我烹饪的视觉盛宴',
    foods: [
      '不喜欢下厨房的码农💻，怎么能成为一名“热”门前端大厨！',
      '妈妈劝你学做饭也会说🗣️：“孩子啊，学会做饭，就像是掌握了编程语言一样，不管是调味还是代码，都是让世界更美好的技能！谁说前端工程师只能调试代码，你也能调味出让人垂涎的美味佳肴🥗！”',
      '所以啊，现在的我经过两年半的练习🏀已经从刚开始只能自己吃的程度到现在不说三星级大厨也得两颗半😁,比如说小鸡炖蘑菇、酸菜/红烧鱼、各种炒菜、还有吃的特别频繁的番茄鸡蛋面(简单)...',
      '唯一不敢尝试的就是海鲜了，没有为啥——太贵...消费不起😭',
      '给你们的视觉冲击等有照片后再进行补充吧...',
    ],
  },
]

const Live: FC<Props> = () => {
  return (
    <div className={live.live}>
      <LightSpeed>
        <h2 className={live.title}>多维画卷：我的前端征程与多彩生活</h2>
      </LightSpeed>
      <Row>
        {liveList.map((item, index) => {
          return (
            <Col span={24} md={12} key={item.title}>
              <Fade
                left={index % 2 == 0 ? true : false}
                right={index % 2 == 1 ? true : false}
                style={{ width: '100%', height: '100%' }}
              >
                <div className={live.card}>
                  <div className={live.desc}>
                    <img src={item.flag} alt="item.flag" className={live.flag} />
                    <p className={live.cardTitle}>{item.title}</p>
                  </div>
                  {item.timeLine && <Timeline mode="alternate" items={item.timeLine} className={live.timeline}></Timeline>}
                  {item.technology && (
                    <div className={live.technology}>
                      <Row gutter={[16, 22]}>
                        {item.technology.map((tech) => {
                          return (
                            <Col lg={8} md={12} sm={24} xs={24} key={tech.label}>
                              <div className={live.tech}>
                                <img src={tech.img} alt={tech.label} />
                                <p>{tech.label}</p>
                              </div>
                            </Col>
                          )
                        })}
                      </Row>
                    </div>
                  )}
                  {item.map && <ChinaMap></ChinaMap>}
                  {item.foods &&
                    item.foods.map((food, index) => {
                      return (
                        <p key={index} className={live.food}>
                          {food}
                        </p>
                      )
                    })}
                </div>
              </Fade>
            </Col>
          )
        })}
      </Row>
    </div>
  )
}
export default Live
