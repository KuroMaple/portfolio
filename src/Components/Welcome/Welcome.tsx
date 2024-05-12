import './Welcome.css'

const Welcome = () => {
  return (
    <div className='welcome-container'>
      
      <p>
        Back in 2015, I messed around with&nbsp;
        <a href='https://create.roblox.com' className='welcome__text-links' id='welcome-roblox' target='_blank'>
          Roblox Studio
        </a>
        &nbsp;to try and make a game to make me Robux Rich. 
        Beyond greed, I was motivated by the notion of bringing my wildest, most intrusive ideas to life. 
      </p>
      <p>
        At some point during my confused blundering, I realized that I was more interested in the code than the game itself.
        I found true joy in the intersection of video game aesthetics and the accessibility of the web.
        Fast-forward to today, and I've built web software for a&nbsp;
        <a href='https://www.janacorporation.com' className='welcome__text-links' target='_blank'>GIS company</a>,&nbsp;
        my&nbsp;
        <a href='https://uwbc-web-demo.netlify.app' className='welcome__text-links' target='_blank' >badminton</a> 
        &nbsp;club, and for all my fellow&nbsp;
        <a href='https://poke-view.netlify.app' className='welcome__text-links' target='_blank' >Pokémon</a> 
        &nbsp;fans.
      </p>
      <p>
        To this day I still play video games, and I hope to one day release my own games. Otherwise you can find me straining in the gym, 
        playing badminton, bouldering, or goofing off with my friends and family.
      </p>
      
    </div>
  )
}

export default Welcome
