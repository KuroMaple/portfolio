import './Welcome.css'
import facePic from '../../assets/facePic.jpg'
const Welcome = () => {
  return (
    <div className='welcome-container'>
      <img 
        src={facePic} 
        alt="Profile Picture" 
        style={{ 
          width: '100%', // Adjust to the container's full width 
          maxWidth: '300px', // Prevent it from being too large
          height: 'auto', // Maintain aspect ratio
          borderRadius: '10%', // Slightly rounded corners
          objectFit: 'cover', // Crop image to fit perfectly
          display: 'block', // Prevent inline spacing
          margin: '0 auto', // Center the image horizontally
        }} 
      />
      <p>
        Back in 2015, I discovered&nbsp;
        <a href='https://create.roblox.com' className='welcome__text-links' id='welcome-roblox' target='_blank'>
          Roblox Studio
        </a>
        &nbsp;and set out to create a game that would make me "Robux Rich." 
        While initially driven by  greed, I quickly became captivated by the process of coding and the ability to bring my most creative and unconventional ideas to life. 
      </p>
      <p>
        This early exploration sparked my passion for software development, especially at the intersection of engaging design and accessible web technologies.
        Since then, I've had the privilege of building web software for a&nbsp;
        <a href='https://www.janacorporation.com' className='welcome__text-links' target='_blank'>GIS company</a>,&nbsp;
        my university's&nbsp;
        <a href='https://uwbc-web-demo.netlify.app' className='welcome__text-links' target='_blank' >badminton</a> 
        &nbsp;club, and a project dedicated to&nbsp;
        <a href='https://poke-view.netlify.app' className='welcome__text-links' target='_blank' >Pokémon</a> 
        &nbsp;fans.
      </p>
      <p>
      Today, I'm passionate about developing interactive 
      and user-friendly applications, whether that's through 
      front-end development, full-stack solutions, or even game design. 
      When I'm not coding, you'll find me pushing my limits at the gym, 
      competing on the badminton court, bouldering, or spending quality time with friends and family.
      </p>
      

    </div>
  )
}

export default Welcome
