import './styles.scss'

export function ItemNewGames(props){
  return(
    <main className="item-component">

      <h1>New Games</h1>

      <div  className="card-item">
        <img className='img-component' src={props.item.picture} alt="" />
        <div className="descriptions">
          <div>
          <h2>{props.item.name}</h2>
          <p className='paragraph'>{props.item.plataforms}</p>
          <small>{props.item.categories}</small>
          </div>
          <div>
          <p className='price'>{props.item.price}</p>
          </div>
        </div>
      </div>
      
    </main>
  )
}