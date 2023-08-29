import React, { FC } from 'react'
import Fade from 'react-reveal/Fade'
import ProjectList from './components/projectList'
import projectImg from '../../../assets/img/project/project.png'
import project from './index.module.scss'
type Props = {
  className?: string
}
const Project: FC<Props> = () => {
  return (
    <div id="project" className={project.project}>
      <div className={project.img}>
        <Fade cascade>
          <img src={projectImg} alt="workspace"></img>
        </Fade>
      </div>
      <div className={project.title}>
        <h2>个人开发过的项目</h2>
        <p>含在职期间项目、有意思的个人项目</p>
      </div>
      <ProjectList></ProjectList>
    </div>
  )
}
export default Project
