import './Socials.css'
import emailIcon from '../../assets/email icon.png'
import githubIcon from '../../assets/github.png'
import linkedinIcon from '../../assets/linkedin.png'
import resumeIcon from '../../assets/pdfIcon.png'
const Socials = () => {
  return (
    <div className='socials-container'>
      <ul className='socials-parent'>
        <li> 
          <a href="mailto:hashmihassan47@gmail.com" target='_blank'>
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

        <li>
          <a href="https://kuromaple.github.io/resume/" target='_blank'>
            <img className='socials-parent__item' src={resumeIcon}/>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Socials