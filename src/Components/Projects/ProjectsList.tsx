import React from 'react'
import pokeball from '../../assets/pokeballIcon.png'
import badminton from '../../assets/badmintonIcon.png'
import linkIcon from '../../assets/linkIcon.png'

import "./ProjectList.css"
import { ContentType } from '../../App'

interface Props {
  setCurrentContent: React.Dispatch<React.SetStateAction<ContentType>>
}
const ProjectsList: React.FC<Props> = ({setCurrentContent}) => {
  return (
    <div className='container'>
      
      <ul>
        <li className='list-item'>
          <div className='project-text' onClick={() => setCurrentContent('Project1')}>
            <img src={pokeball} className='list-item-icon'/>
            PokéView
          </div>
          <a href="https://github.com/KuroMaple/Poke-View" target="_blank" rel="noopener noreferrer" className="github-btn">
            <img className="github-icon" src={linkIcon} alt="GitHub" />
          </a>
        </li>
        <li className='list-item'>
          <div className="project-text" onClick={() => setCurrentContent('Project2')}>
            <img src={badminton} className="list-item-icon" alt="UWBC Web Icon" />
        UWBC Web
          </div>
          <a href="https://github.com/KuroMaple/uwbc-web" target="_blank" rel="noopener noreferrer" className="github-btn">
            <img className="github-icon" src={linkIcon} alt="GitHub" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default ProjectsList
