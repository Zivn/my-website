import React, { FC,lazy } from 'react'
import website from './index.module.scss'

type Props = {
  className?: string
}
const Header = lazy(()=>import('./header'))
const Content = lazy(()=>import('./content'))
const About = lazy(()=>import('./about'))
const Project = lazy(()=>import('./project'))
const Footer = lazy(()=>import('./footer'))
const Index: FC<Props> = () => {
  return (
    <div className={website.website}>
      <Header></Header>
      <Content></Content>
      <About></About>
      <Project></Project>
      <Footer></Footer>
    </div>
  )
}
export default Index
