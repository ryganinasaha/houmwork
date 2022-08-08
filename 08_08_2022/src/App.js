import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';


function App() {
  const [output, setOutput] = useState([])
  const inputRef = useRef(null)

  
  function onClick(){
    console.log('velue', inputRef.current.value)

    lettersCount(inputRef)
  }

  function lettersCount(str){
    const count = {}
    
    for(let i=0; i < str.length ; i++){
      const letter = str[i]
      if (count[letter] === undefined){
        count[letter] = 0
      }
      count[letter]++ 
    }
    return count;
  }


  return (
    <div className="App">
      <input ref={inputRef} type="text" />
      <button onClick={onClick}>Запустить</button>
      <div></div>
    </div>
  );
}

export default App;
