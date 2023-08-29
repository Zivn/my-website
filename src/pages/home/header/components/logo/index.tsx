import React, { FC, MouseEventHandler, useState } from 'react'
import logo from './index.module.scss'
import Lottie from 'react-lottie'
import headerGif from '../../../../../assets/lottie/header.json'
type Props = {
  className?: string
}

const Options = {
  loop: true,
  autoplay: true,
  animationData: headerGif,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const Logo: FC<Props> = () => {
  const home = () => {
    const $about = document.querySelector('#home')
    if ($about) {
      $about.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <div className={logo.logoWrap} onClick={home}>
      <div className={logo.mask}>
        <Lottie options={Options} height={66} width={66} />
      </div>
      <div className={logo.text}>
        ZiYuan
        <span className={logo.name}>Sun</span>
      </div>
    </div>
  )
}
export default Logo
