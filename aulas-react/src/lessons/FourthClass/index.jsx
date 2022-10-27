import './styles.scss';
import cards from './../../assets/images/card.jpeg';
import cardsOne from './../../assets/images/card1.jpeg';
import cardsTwo from './../../assets/images/card2.jpeg';
import cardsThree from './../../assets/images/card3.jpeg';

export function FourthClass(){
  const cardsComponents = [
    {
      image: cards,
      description: 'Lorem ipsum dolor sit amet.'
    },
    {
      image: cardsOne,
      description: 'Lorem ipsum dolor sit amet.'
    },
    {
      image: cardsTwo,
      description: 'Lorem ipsum dolor sit amet.'
    },
    {
      image: cardsThree,
      description: 'Lorem ipsum dolor sit amet.'
    }
  ];

  return (
    <main className="quarta-aula-component">
      <h1 className='title'>Reommended For You</h1>
      <section>
        {
          cardsComponents.map(component => (
            <div>
              <img src={component.image} alt="" />
              <p>{component.description}</p>
            </div>
          ))
        }
        
      </section>
    </main>
  )
}