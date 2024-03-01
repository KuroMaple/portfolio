import React from 'react'
import { Content } from '../../App'
import Welcome from '../Welcome/Welcome'

interface Props {
  content: Content
}
const Content: React.FC<Props> = ({content}) => {

  if (content === 'Welcome') return (
    <Welcome />
  )
  else if (content === 'Project1') return (
    <div>
      <h1>Project 1.</h1>
      <p>Project 1 info here lorem ipsum </p>
    </div>
  )
  else if (content === 'Project2') return (
    <div>
      <h1>Project 2.</h1>
      <p>Project 2 info here lorem ipsum </p>
    </div>
  )
  else if (content === 'Project3') return (
    <div>
      <h1>Project 3.</h1>
      <p>Project 3 info here lorem ipsum </p>
    </div>
  )
  else return (
    <div>404</div>
  )
}

export default Content