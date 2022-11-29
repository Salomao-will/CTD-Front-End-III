import { useState, useEffect } from 'react';
import './styles.scss';

export function ThirteenthClass(){

  const [count, setCount] = useState(0);
  const [ userName, setUserName ] = useState('')
  const [ userNameError, setUserNameError] = useState(false)

  function addCount(){
    setCount(count + 1)
  }

  useEffect(() => {
    if (userName.length > 10) {
      setUserNameError(true)
    }else {
      setUserNameError(false)
    }
  }, [userName])

  return(
    <>
      <input type="text" value={userName} onChange={event => setUserName(event.target.value)} />
      {userNameError ? (<small>The text is bigger than 10</small>) : null}
      <p>The counter is {count}</p>
      <button onClick={() => addCount()}>Add</button>
    </>
  )
}