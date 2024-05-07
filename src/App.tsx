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
          <h1 className='app__title-name' onClick={() => setCurrentContent('Welcome')} >Hassan Hashmi</h1>
          <h2 className='app__title-subtitle'>Frontend Developer</h2>
          <p>I build fun and powerful tools</p>
        </div>
          

        <div className='app__container__left-container__projects-list'>
          <ProjectsList setCurrentContent={setCurrentContent}/>
        </div>
        <Socials />
      </div>

      <div className='app__container__right-container'>
        <Content content={currentContent}/>
      </div>

        

      

    </div>
  )
}

export default App
