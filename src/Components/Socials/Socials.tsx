import './Socials.css'
import emailIcon from '../../assets/email icon.png'
import githubIcon from '../../assets/github.png'
import linkedinIcon from '../../assets/linkedin.png'
const Socials = () => {
  return (
    <div className='app__top-header__socials'>
      <ul className='socials-parent'>
        <li> 
          <a href="mailto:h4hashmi@uwaterloo.ca" target='_blank'>
            <img className='socials-parent__item' src={emailIcon} alt='email' />
          </a>
        </li>
        <li>
          <a href='https://github.com/KuroMaple' target='_blank'>
            <img className='socials-parent__item' src={githubIcon}/>
          </a>
        </li>

        <li>
          <a href="https://www.linkedin.com/in/hassan-hashmi/" target='_blank'>
            <img className='socials-parent__item' src={linkedinIcon}/>
          </a>
        </li>

      </ul>
    </div>
  )
}

export default Socials