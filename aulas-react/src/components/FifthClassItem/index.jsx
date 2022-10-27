export function FifthClassItem(props){
  return(

    <div>
      <img src={props.item.image} alt="" />
      <p>{props.item.description}</p>
    </div>

  )
}