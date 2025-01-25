import './App.css'
import ProjectsList from './Components/Projects/ProjectsList'
import { useState } from 'react'
import Content from './Components/Content/Content'
import Socials from './Components/Socials/Socials'

export type ContentType = 'Welcome' | 'Project1' | 'Project2' | 'Project3'

function App() {

  const [currentContent, setCurrentContent] = useState<ContentType>('Welcome')
  console.log(currentContent)

  return (
    <div className='app__container'>

      <div className='app__container__left-container'>
        <div className='app__container__left-container__title'>
          <a className='app__title-name' onClick={() => setCurrentContent('Welcome')} >
            Hassan Hashmi
          </a>
          <a className='app__title-subtitle'>Frontend Developer</a>
          <a className='app__title-subtext'>I build fun and powerful tools</a>
        </div>
         

        <div className='app__container__left-container__projects-list'>
          <a className='projects-list__text'>Projects</a>
          <ProjectsList setCurrentContent={setCurrentContent}/>
        </div>
        
      </div>

      <div className='app__container__right-container'>
        <Content content={currentContent}/>
      </div>
      <Socials />
    </div>
  )
}

export default App
