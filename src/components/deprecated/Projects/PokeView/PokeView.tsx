import './PokeView.css'
import pokeViewOne from '../../../assets/pokeViewGeneral.png'
import pokeViewTwo from '../../../assets/pokeViewCloseUp.png'
import pokeViewThree from '../../../assets/pokeViewDarkMode.png'


const PokeView = () => {
  return (
    <div className='pokeview'>  
      <h1
        style={{
          fontSize: '1.5rem',
          textAlign: 'left',
          marginBottom: '-0.5rem',
          
        }}
      >
        PokéView
      </h1>      
      <p>
        <a href='https://poke-view.netlify.app' className='welcome__text-links' target='_blank' >PokéView</a>&nbsp;
         is a web app to learn more about Pokemon. 
        It generates pokemon randomly and paints them in a 
        custom design that mimics the orignal Nintendo DS games. 
      </p> 
      <img src={pokeViewOne} id='pokeview__image-1'/>
      <p>
        Click on a card to open a detailed view with additional stats and a custom graph.
      </p>
      <img src={pokeViewTwo} id='pokeview__image-2'/>
      <p>
        There's also a search feature, a dropdown filter, 
        and a custom dark mode with a shiny surprise.
      </p>
      <img src={pokeViewThree} id='pokeview__image-3'/> 
    </div>
  )
}

export default PokeView