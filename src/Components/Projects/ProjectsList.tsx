import React from 'react'
import pokeball from '../../assets/pokeballIcon.png'
import badminton from '../../assets/badmintonIcon.png'

import "./ProjectList.css"
import { ContentType } from '../../App'

interface Props {
  setCurrentContent: React.Dispatch<React.SetStateAction<ContentType>>
}
const ProjectsList: React.FC<Props> = ({setCurrentContent}) => {
  return (
    <div className='container'>
      
      <ul>
        <li className='list-item' onClick={() => setCurrentContent('Project1')}>
          <img src={pokeball} className='list-item-icon'/>
          PokéView
        </li>
        <li className='list-item' onClick={() => setCurrentContent('Project2')}>
          <img src={badminton} className='list-item-icon'/>
          UWBC Web
        </li>
      </ul>
    </div>
  )
}

export default ProjectsList
