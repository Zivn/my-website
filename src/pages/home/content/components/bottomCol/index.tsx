import React, { FC } from 'react'
import Lottie from 'react-lottie'
import Fade from 'react-reveal/Fade'
import Arrow from '../../../../../assets/lottie/arrow.json'
import bottomCol from './index.module.scss'
type Props = {
  className?: string
}

const Options = {
  loop: true,
  autoplay: true,
  animationData: Arrow,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}
const BottomCol: FC<Props> = () => {
  const next = () => {
    const $about = document.querySelector('#about')
    if ($about) {
      $about.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <Fade top>
      <div className={bottomCol.content}>
        <div className={bottomCol.gifWrap} onClick={next}>
          <div className={bottomCol.mask}>
            <Lottie options={Options} height={100} width={100} />
          </div>
        </div>
      </div>
    </Fade>
  )
}
export default BottomCol
