import './App.css'
import ProjectsList from './Components/Projects/ProjectsList'
import { useState } from 'react'
import Content from './Components/Content/Content'
import Socials from './Components/Socials/Socials'
import NavBar from './Components/NavBar/NavBar'

export type ContentType = 'About' | 'Project1' | 'Project2' | 'Project3'

function App() {

  const [currentContent, setCurrentContent] = useState<ContentType>('About')
  console.log(currentContent)

  return (
    <div className='app-container'>
      <header className='app-container__header'>
        
        <div className='header__title'>
          <h1 className='title-name' onClick={() => setCurrentContent('About')} >
            Hassan Hashmi
          </h1>
          <h2 className='title-profession'>Frontend Developer</h2>
          <p className='title-subtext'>I build fun and powerful tools</p>
        </div>
          

        <NavBar />

        <Socials />
      </header>
      
      <main id='main'>
        <Content content='About' />
      </main>

        

      

    </div>
  )
}

export default App
