import React from 'react'

import "./ProjectList.css"
import { ContentType } from '../../App'

interface Props {
  setCurrentContent: React.Dispatch<React.SetStateAction<ContentType>>
}
const ProjectsList: React.FC<Props> = ({setCurrentContent}) => {
  return (
    <div className='container'>
      <h1 className='title' >Projects</h1>
      <ul>
        <li className='list-item' onClick={() => setCurrentContent('Project1')}>PokéView</li>
        <li className='list-item' onClick={() => setCurrentContent('Project2')}>UWBC Web</li>
      </ul>
    </div>
  )
}

export default ProjectsList
