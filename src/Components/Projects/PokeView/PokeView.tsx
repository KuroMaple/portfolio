import pokeViewOne from '../../../assets/pokeViewGeneral.png'
import pokeViewTwo from '../../../assets/pokeViewCloseUp.png'
import pokeViewThree from '../../../assets/pokeViewDarkMode.png'


const PokeView = () => {
  return (
    <div>        
      <p>PokeView is a web app to learn more about Pokemon. 
      It generates pokemon randomly and paints them in a 
      custom design that mimics the orignal DS games. 
      There is also a search feature, a dropdown filter, 
      and a custom dark mode with a shiny surprise.
      </p>
      <div className='projectOne_images'>
        <img src={pokeViewOne} className='projectOne_images__item-1'/>
        <img src={pokeViewTwo} className='projectOne_images__item-2'/>
        <img src={pokeViewThree} className='projectOne_images__item-3'/> 
      </div></div>
  )
}

export default PokeView