import { useState } from 'react'
import './NavBar.css'

const NavBar = () => {
  const [active, setActive] = useState(0)
  const [hovered, setHovered] = useState(-1)

  const renderlistElement = (index: number, text: string) => {
    return (
      <li 
        onClick={() => setActive(index)}
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(-1)}
      >
        <a className='nav-bar__item' >
          {(active === index || hovered === index) ? 
            (<span className='nav-bar__indicator-long'>&nbsp;</span>) : 
            (<span className='nav-bar__indicator-short'>&nbsp;</span>)
          }
          <span>{text}</span>
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