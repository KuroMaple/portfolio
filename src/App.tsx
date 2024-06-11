import './App.css'
import ProjectsList from './Components/Projects/ProjectsList'
import { useState } from 'react'
import Content from './Components/Content/Content'
import Socials from './Components/Socials/Socials'

export type ContentType = 'About' | 'Project1' | 'Project2' | 'Project3'

function App() {

  const [currentContent, setCurrentContent] = useState<ContentType>('About')
  console.log(currentContent)

  return (
    <div className='container'>
      <header className='header'>
        
        <div className='header__title'>
          <h1 className='title-name' onClick={() => setCurrentContent('About')} >
            Hassan Hashmi
          </h1>
          <h2 className='title-profession'>Frontend Developer</h2>
          <p className='title-subtext'>I build fun and powerful tools</p>
        </div>
          

        <nav className='header__nav-bar'>
          <ul className='nav-bar__list'>
            <li>About</li>
            <li>Experience</li>
            <li>Projects</li>
          </ul>
          {/* <a className='projects-list__text'>Projects</a>
          <ProjectsList setCurrentContent={setCurrentContent}/> */}
        </nav>
        <Socials />
      </header>
      {/* 
      <div className='app__container__right-container'>
        <Content content={currentContent}/>
      </div> */}

        

      

    </div>
  )
}

export default App
