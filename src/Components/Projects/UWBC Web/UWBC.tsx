import './UWBC.css'
import uwbcOne from '../../../assets/uwbcWebMenu.png'
import uwbcTwo from '../../../assets/uwbcWebExecPage.png'
import uwbcThree from '../../../assets/uwbcWebMemberView.png'


const UWBC = () => {
  return (
    <div className='uwbc'>        
      <p>
        A big problem within local badminton clubs is organzing efficient and fair systems to establish badminton games
        between members. UWBC Web is a platform for badminton organizers to manage their club's members on an interactive court system. 
      </p> 
      <img src={uwbcOne} id='uwbc__image-1'/>
      <p>
        Players can be dragged and dropped into courts, and the application has custom logic to ensure that players are matched up fairly. 
        The app comes with a timer and user command panel to easily edit players on courts.
      </p>
      <img src={uwbcTwo} id='uwbc__image-2'/>
      <p>
        Members can then view their assigned courts via the member view page. To generate extra revenue for the club, the member view page can be customized to display ads.
      </p>
      <img src={uwbcThree} id='uwbc__image-3'/> 
    </div>
  )
}

export default UWBC