import './NavBar.css'

const NavBar = () => {
  return (
    <nav className='header__nav-bar'>
      <ul className='nav-bar__list'>
        <li className='nav-bar__item'>
          <span className='nav-bar__indicator'>&nbsp;</span>
          <span>ABOUT</span>
        </li>
        <li className='nav-bar__item'>EXPERIENCE</li>
        <li className='nav-bar__item'>PROJECTS</li>
      </ul>
    </nav>
  )
}

export default NavBar