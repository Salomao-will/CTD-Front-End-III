import './styles.scss'
import card from './../../assets/images/scale.png'
import cardTwo from './../../assets/images/scale1.png'
import cardThree from './../../assets/images/scale2.png'
import cardFour from './../../assets/images/scale3.png'

export function ThirdClass() {

  const components = [
    {
      image: card
    },
    {
      image: cardTwo
    },
    {
      image: cardThree
    },
    {
      image: cardFour
    }
  ]

  return(

    <main className='container'>
      
      <ul className='list-component'>
        {
          components.map(component => (
            <li>
              <img className='img' src={component.image} alt="" />
            </li>
          ))
        }
        
      </ul>
      
    </main>
  )
}