import React from 'react'
import { ContentType } from '../../App'
import Welcome from '../Welcome/Welcome'
import PokeView from '../Projects/PokeView/PokeView'
import UWBC from '../Projects/UWBC Web/UWBC'
import Experience from '../Experience/Experience'

interface Props {
  content: ContentType
}
const Content: React.FC<Props> = ({content}) => {

  return (
    <>
      <Welcome />
      <Experience />
      {/* <PokeView />
      <UWBC /> */}
    </>
    
  )

}

export default Content