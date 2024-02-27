import './App.css'

import placeHolderLogo from './assets/react.svg'

import ProjectsList from './Components/ProjectsList'
import Welcome from './Components/Welcome/Welcome'

function App() {

  return (
    <div className='app__main-container'>
      <div className='app__main-container__inner'>
        <header className='app__header'>
          <div>
            <img className='app__header-logo' src={placeHolderLogo} alt='logo' />
          </div>
          <div className='app__top-header__socials'>
            <ul className='socials-parent'>
              <li className='socails-chile'>Email</li>
              <li>Github</li>
              <li>Linkedin</li>
            </ul>
          </div>
        </header>

        <div className='app__main-content'>
          <Welcome />
        </div>
        <div className='app__projects-list'>
          <ProjectsList />
        </div>
      </div>
    </div>
  )
}

export default App
