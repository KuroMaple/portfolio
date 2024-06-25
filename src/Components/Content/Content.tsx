import React from 'react'
import { ContentType } from '../../App'
import Welcome from '../Welcome/Welcome'
import PokeView from '../Projects/PokeView/PokeView'
import UWBC from '../Projects/UWBC Web/UWBC'

interface Props {
  content: ContentType
}
const Content: React.FC<Props> = ({content}) => {

  return (
    <>
      <Welcome />
      <PokeView />
      <UWBC />
    </>
    
  )

}

export default Content