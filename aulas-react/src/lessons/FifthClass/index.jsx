import './styles.scss';
import cards from './../../assets/images/card.jpeg';
import cardsOne from './../../assets/images/card1.jpeg';
import cardsTwo from './../../assets/images/card2.jpeg';
import cardsThree from './../../assets/images/card3.jpeg';
import { FifthClassItem } from '../../components/FifthClassItem';

export function FifthClass(){
  const cardsComponents = [
    {
      id: 1,
      image: cards,
      description: 'Lorem ipsum dolor sit amet.'
    },
    {
      id: 2,
      image: cardsOne,
      description: 'Lorem ipsum dolor sit amet.'
    },
    {
      id: 3,
      image: cardsTwo,
      description: 'Lorem ipsum dolor sit amet.'
    },
    {
      id: 4,
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
            <FifthClassItem key={component.id} item={component} />
          ))
        }
        
      </section>
    </main>
  )
}