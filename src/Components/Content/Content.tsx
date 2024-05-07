import React from 'react'
import { ContentType } from '../../App'
import Welcome from '../Welcome/Welcome'
import PokeView from '../Projects/PokeView/PokeView'
import UWBC from '../Projects/UWBC Web/UWBC'

interface Props {
  content: ContentType
}
const Content: React.FC<Props> = ({content}) => {

  if (content === 'Welcome') return (
    <Welcome />
  )
  else if (content === 'Project1') return (
    <PokeView />
  )
  else if (content === 'Project2') return (
    <UWBC />
  )
  
  else return (
    <div>404</div>
  )
}

export default Content