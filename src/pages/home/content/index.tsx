import React, { FC } from 'react'
import { Col, Row } from 'antd'
import content from './index.module.scss'
import LeftCol from './components/leftCol'
import RightCol from './components/rightCol'
import BottomCol from './components/bottomCol'
type Props = {
  className?: string
}
const Content: FC<Props> = () => {
  return (
    <div className={content.content} id="home">
      <Row className={content.row}>
        <Col span={24} lg={12} className={content.col}>
          <LeftCol></LeftCol>
        </Col>
        <Col span={24} lg={12} className={content.col}>
          <RightCol></RightCol>
        </Col>
      </Row>
      <Row className={content.bottom}>
        <Col span={24}>
          <BottomCol></BottomCol>
        </Col>
      </Row>
    </div>
  )
}
export default Content
