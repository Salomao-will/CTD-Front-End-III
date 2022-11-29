import './style.scss'

export function FifteenthClassItem() {

  return (
    <div className="decima-quinta-aula-item">
      <h1>Endereço: {props.address.logradouro}</h1>
      <address>Bairro: {props.address.bairro}</address>
      <small>Cep: {props.address.cep}</small>
      <button onClick={() => props.onDeleteLocation(props.data)}>Deletar</button>
    </div>
  )

}