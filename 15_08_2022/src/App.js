
import './App.css';
import {  useState } from 'react';







function App() {
  const [number, setNumber] = useState(0)

  return(
    <div>
      <div>{number}</div>
      <Children changeNumber={setNumber} name='Нажми'></Children>
    </div>
      
  )

}

function Children(props) {

  function ClickMe() {
    props.changeNumber(100500)
  }

  return(
    <div>
      <button onClick={ClickMe}>{props.name}</button>
    </div>
  )
}

export default App;




/*
const [arr, setArr] = useState([200, 500, 100])
  

  function ClickMe() {
    const newArr = [...arr, 2000]
    //Аналогично orr.concat(2000)
    setArr(newArr)


  }



  return (
    <div className="App">
      <div>{arr.join(', ')}</div>
      <button onClick={ClickMe}>Нажми меня</button>
    </div>
  )
*/




/*const [number, setNumber] = useState(0)
  const inputEl = useRef(null)

  function ClickMe() {
    setNumber(inputEl.current.value)


  }



  return (
    <div className="App">
      <input type='number' ref={inputEl} />
      <div>{number}</div>
      <button onClick={ClickMe}>Нажми меня</button>
    </div>
  )*/