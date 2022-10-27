import './styles.scss';
import banner from "./../../assets/images/banner.jpeg"

export function SeccondClass() {
  return(
    <header className='header-component'>
      <img className='img-component' src={ banner } alt="" />
    </header>
  )
}