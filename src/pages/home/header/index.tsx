import React, { FC } from 'react'
import Logo from './components/logo'
import Nav from './components/nav'
import header from './index.module.scss'

type Props = {
  className?: string
}
const Header: FC<Props> = () => {
  return (
    <div className={header.header}>
      <Logo></Logo>
      <Nav></Nav>
    </div>
  )
}
export default Header
