import React, { FC } from 'react'
import Lottie from 'react-lottie'
import Fade from 'react-reveal/Fade'
import rebbitGif from '../../../../../assets/lottie/rabbit.json'
import rightCol from './index.module.scss'
type Props = {
  className?: string
}

const Options = {
  loop: true,
  autoplay: true,
  animationData: rebbitGif,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}
const RightCol: FC<Props> = () => {
  return (
    <div className={rightCol.content}>
      <Fade bottom>
        <div className={rightCol.mask}>
          <Lottie options={Options} width={'50%'} height={'50%'} />
        </div>
      </Fade>
    </div>
  )
}
export default RightCol
