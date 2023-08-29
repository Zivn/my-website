import React, { FC, useState, useEffect } from 'react'
import { Modal, Image } from 'antd'
import styles from './index.module.scss'
import baizeMap from '../../../../../assets/img/project/baizeMap/banner.png'
import baizeFlag from '../../../../../assets/img/project/baizeFlag/banner1.png'
import baizeIoc from '../../../../../assets/img/project/baizeIoc/banner.png'
import baizeWeb from '../../../../../assets/img/project/baizeWeb/banner.png'
import dhzq from '../../../../../assets/img/project/zuque/banner.jpg'
import dhChild1 from '../../../../../assets/img/project/zuque/child1.jpg'
import dhChild2 from '../../../../../assets/img/project/zuque/child2.jpg'
import dhErp from '../../../../../assets/img/project/erp/banner.png'
import dhErpChild1 from '../../../../../assets/img/project/erp/index.png'
import dhErpChild2 from '../../../../../assets/img/project/erp/data.png'
type Props = {
  className?: string
}
interface DataItem {
  name: string
  anotherName: string
  terminal: string
  stack: string[]
  sketch: string
  description: string
  banner: string
  children: string[]
}
const list: DataItem[] = [
  {
    name: 'APT全息知识图谱分析系统',
    anotherName: '白泽图',
    terminal: 'Web',
    stack: ['Vue', 'Element', 'Echarts', 'Neo4jd3', 'Stylus'],
    sketch:
      '系统集合了数据采集、图谱关联分析、攻击全流程建模评估等功能于一体，提供APT组织态势展示、威胁情报检索、IOC/TTP线索图谱分析挖掘、APT知识推理发现等功能。',
    description:
      'APT全息知识图谱分析系统（白泽图）是一套整合了多源异构威胁情报，图谱化建模和运营的专业知识推理挖掘系统。系统集合了数据采集、图谱关联分析、攻击全流程建模评估等功能于一体，提供APT组织态势展示、威胁情报检索、IOC/TTP线索图谱分析挖掘、APT知识推理发现等功能。',
    banner: baizeMap,
    children: [
      'https://baizesec.com/img/bzt-pro-1.64994656.png',
      'https://baizesec.com/img/bzt-pro-2.7dde3d4a.png',
      'https://baizesec.com/img/bzt-pro-3.5cf89f38.png',
      'https://baizesec.com/img/bzt-pro-4.f28bf54e.png',
      'https://baizesec.com/img/bzt-pro-5.e2a8edb5.png',
      'https://baizesec.com/img/bzt-pro-6.a92b1ee6.png',
    ],
  },
  {
    name: 'APT攻击流量检测系统',
    anotherName: '白泽旗',
    terminal: 'Web',
    stack: ['Vue', 'Element', 'Echarts', 'Webpack'],
    sketch: '一款具备网络威胁行为发现、威胁主体识别以及全流量取证溯源能力的旁路型威胁检测与溯源系统',
    description:
      'APT攻击流量检测系统（白泽旗）是一款具备网络威胁行为发现、威胁主体识别以及全流量取证溯源能力的旁路型威胁检测与溯源系统。在威胁检测方面，系统内置了自主研发的新一代智能检测引擎，采用静态特征关联识别和威胁步态（行为）建模分析相结合的不依赖样本、跨会话检测方式，检测识别网络流量中的高级持续威胁、僵木蠕威胁、挖矿威胁、扫描探测威胁、远程攻击威胁、潜在未知威胁等。在流量取证溯源方面，系统具备高性能离线数据采集/回放、数据存储、数据回溯、协议分析、协议元数据提取、应用识别、会话分析、文件还原等。',
    banner: baizeFlag,
    children: [
      'https://baizesec.com/img/bzq-pro-1.9a072105.png',
      'https://baizesec.com/img/bzq-pro-2.2c162390.png',
      'https://baizesec.com/img/bzq-pro-3.43cf9e05.png',
      'https://baizesec.com/img/bzq-pro-4.d6ebdc28.png',
      'https://baizesec.com/img/bzq-pro-5.7679900c.png',
      'https://baizesec.com/img/bzq-pro-6.168cecab.png',
    ],
  },
  {
    name: 'APT线索关联溯源系统',
    anotherName: '白泽剑',
    terminal: 'Web',
    stack: ['Vue', 'Element', 'Echarts'],
    sketch:
      '提供了最新威胁情报订阅推送、威胁线索关联挖掘、威胁线索人工关联溯源、威胁线索自动关联溯源等功能。/TTP线索图谱分析挖掘、APT知识推理发现等功能。',
    description:
      'APT线索关联溯源系统（白泽剑）是一款高效整合国内外OSINT数据源，结合威胁特征抽取、大数据分析挖掘、智能算法评估等方法，专门针对高级持续威胁线索进行关联拓展与归因溯源的产品。产品提供了最新威胁情报订阅推送、威胁线索关联挖掘、威胁线索人工关联溯源、威胁线索自动关联溯源等功能。/TTP线索图谱分析挖掘、APT知识推理发现等功能。',
    banner: baizeIoc,
    children: [
      'https://baizesec.com/img/bzj-pro-1.d2cf41e1.png',
      'https://baizesec.com/img/bzj-pro-2.6c053ee4.png',
      'https://baizesec.com/img/bzj-pro-3.a0d3e606.png',
      'https://baizesec.com/img/bzj-pro-4.6f45314d.png',
      'https://baizesec.com/img/bzj-pro-5.580237a0.png',
    ],
  },
  {
    name: '华安云科官网',
    anotherName: '白泽安全实验室',
    terminal: 'Web',
    stack: ['Vue', 'Swiper', 'Animate'],
    sketch: '知识驱动安全——专注于高级持续威胁防御的网络安全公司',
    description: '知识驱动安全——专注于高级持续威胁防御的网络安全公司',
    banner: baizeWeb,
    children: [],
  },
  {
    name: '租雀支付宝小程序',
    anotherName: '租雀',
    terminal: 'Uni-app & Mobile',
    stack: ['UniApp', 'Swiper', 'Scss'],
    sketch: '一站式全品类数码产品信用租赁的平台，智享生活，全新体验',
    description: '一站式全品类数码产品信用租赁的平台，智享生活，全新体验',
    banner: dhzq,
    children: [dhChild1, dhChild2],
  },
  {
    name: '德汇融资ERP系统',
    anotherName: 'ERP系统',
    terminal: 'Web',
    stack: ['Vue', 'aVue', 'Echarts', 'Cryptojs', 'Bootstrap', 'Scss'],
    sketch: '所有租赁项目的运营及中心调度系统',
    description: '所有租赁项目的运营及中心调度系统',
    banner: dhErp,
    children: [dhErpChild1, dhErpChild2],
  },
]
const ProjectList: FC<Props> = () => {
  const [modalWidth, setModalWidth] = useState('60%')
  useEffect(() => {
    window.addEventListener('resize', function () {
      let { innerWidth } = window
      if (innerWidth > 991) {
        setModalWidth('60%')
      }
      if (innerWidth < 992 && innerWidth > 767) {
        setModalWidth('80%')
      }
      if (innerWidth < 768) {
        setModalWidth('95%')
      }
    })
  }, [])

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentInfo, setCurrentInfo] = useState<DataItem | null>(null)
  const showModal = (info: DataItem): void => {
    setCurrentInfo(info)
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }
  return (
    <>
      <div className={styles.listWrap}>
        {list.map((item) => {
          return (
            <div className={styles.card} key={item.name} onClick={() => showModal(item)}>
              <div className={styles.banner}>
                <img src={item.banner} alt={item.anotherName} />
              </div>
              <p className={styles.name}>{item.name}</p>
              <span className={styles.terminal}>{item.terminal}</span>
              <p className={styles.sketch}>{item.sketch}</p>
            </div>
          )
        })}
      </div>

      <Modal
        title={<div className={styles.modalBtnl}></div>}
        closeIcon={<div className={styles.cancelText}></div>}
        wrapClassName={styles.modal}
        centered
        footer={null}
        width={modalWidth}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        destroyOnClose={true}
      >
        {currentInfo && (
          <div className={styles.modalWrap}>
            <div className={styles.modalTitle}>
              <h2>{currentInfo.name}</h2>
              <p>{currentInfo.terminal}</p>
            </div>
            <div className={styles.modalBanner}>
              <img src={currentInfo.banner} alt={currentInfo.name} />
            </div>
            <div className={styles.modalStacks}>
              <h2>Technology stacks:</h2>
              <p>
                {currentInfo.stack.map((item, index) => {
                  return <span key={index}>{item}</span>
                })}
              </p>
            </div>
            <p className={styles.modalDesc}>{currentInfo?.description}</p>
            <div className={styles.modalChild}>
              <Image.PreviewGroup>
                {currentInfo.children.length > 0 &&
                  currentInfo.children.map((item, index) => {
                    return (
                      <div key={index} className={styles.imgItem}>
                        <Image src={item} alt={item}></Image>
                      </div>
                    )
                  })}
              </Image.PreviewGroup>

              {currentInfo.children.length == 0 && (
                <div className={styles.imgItem}>
                  <Image src={currentInfo.banner} alt={currentInfo.name} />
                </div>
              )}
            </div>
          </div>
        )}
      </Modal>
    </>
  )
}
export default ProjectList
