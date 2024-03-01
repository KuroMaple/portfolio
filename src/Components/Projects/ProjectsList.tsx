import React from 'react'

import "./ProjectList.css"
import { Content } from '../../App'

interface Props {
  setCurrentContent: React.Dispatch<React.SetStateAction<Content>>
}
const ProjectsList: React.FC<Props> = ({setCurrentContent}) => {
  return (
    <div className='container'>
      <h1 className='title' >Projects</h1>
      <ul>
        <li onClick={() => setCurrentContent('Project1')}>Project 1</li>
        <li onClick={() => setCurrentContent('Project2')}>Project 2</li>
        <li onClick={() => setCurrentContent('Project3')}>Project 3</li>
      </ul>
    </div>
  )
}

export default ProjectsList
