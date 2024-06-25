import { useState } from 'react'
import './NavBar.css'

const NavBar = () => {
  const [active, setActive] = useState(0)
  const [hovered, setHovered] = useState(-1)

  const renderlistElement = (index: number, text: string) => {
    const reference = '#'+ text.toLowerCase()
    let textSelectedColor
    switch(index){
    case 0:
      textSelectedColor = '#C8F7C5'
      break
    case 1:
      textSelectedColor = '#7fffd4'
      break
    case 2:
      textSelectedColor = '#c5eff7'
      break
    }
    return (
      <li 
        onClick={() => setActive(index)}
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(-1)}
      >
        <a className='nav-bar__item' href={reference}>
          {(active === index || hovered === index) ? 
            (<span className='nav-bar__indicator-long'>&nbsp;</span>) : 
            (<span className='nav-bar__indicator-short'>&nbsp;</span>)
          }
          <span
            style={{color : (active === index || hovered === index) ? textSelectedColor : '#a5acb3'}}
          >{text}
          </span>
        </a>
      </li>
    )
  }

  return (
    <nav className='header__nav-bar'>
      <ul className='nav-bar__list'>
        {renderlistElement(0, 'ABOUT')}
        {renderlistElement(1, 'EXPERIENCE')}
        {renderlistElement(2, 'PROJECTS')}
      </ul>
    </nav>
  )
}

export default NavBar