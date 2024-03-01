import './App.css'

import placeHolderLogo from './assets/react.svg'
import emailIcon from './assets/email icon.png'
import githubIcon from './assets/github.png'
import linkedinIcon from './assets/linkedin.png'
import ProjectsList from './Components/Projects/ProjectsList'
import Welcome from './Components/Welcome/Welcome'

function App() {

  return (
    <div className='app__main-container'>
      <header className='app__header'>
        <div>
          <img className='app__header-logo' src={placeHolderLogo} alt='logo' />
        </div>
        <div className='app__top-header__socials'>
          <ul className='socials-parent'>
            <li> <img className='socials-parent__item' src={emailIcon}/> </li>
            <li><img className='socials-parent__item' src={githubIcon}/></li>
            <li><img className='socials-parent__item' src={linkedinIcon}/></li>

          </ul>
        </div>
      </header>

      <div className='app__main-content'>
        <div className='app__main-content__highlighted'>
          <Welcome />
        </div>

        <div className='app__main-content__projects-list'>
          <ProjectsList />
        </div>
      </div>
      

    </div>
  )
}

export default App
