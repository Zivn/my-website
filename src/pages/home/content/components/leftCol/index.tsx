import React, { FC } from 'react'
import leftCol from './index.module.scss'
import useTyped from '../../../../../hooks/useType'
type Props = {
  className?: string
}
const strings = ['聊聊技术', '吹吹水', '打打游戏']
const LeftCol: FC<Props> = () => {
  const el = useTyped(strings, { loop: true })
  return (
    <div className={leftCol.content}>
      <p>我是ZiYuan,</p>
      <p>
        一个 前端工程师，主要写 <span className={leftCol.vue}>Vue</span> 的。
      </p>
      <p>喜欢简约的设计 🛀，</p>
      <p>
        偶尔
        <span className={leftCol.sometime} ref={el} />
      </p>
    </div>
  )
}
export default LeftCol
