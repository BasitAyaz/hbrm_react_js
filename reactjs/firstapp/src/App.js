import { useState } from 'react';
import './App.css';
import Btn from './components/btn';


function App() {
  const [text, setText] = useState('')
  const [list, setList] = useState([])

  const addTodo = () => {
    list.push(text)
    console.log(list)
    setList([...list])
    setText('')
  }

  const del = (i) => {
    list.splice(i, 1)
    setList([...list])
  }

  const edit = (i) => {
    let a = list[i]
    let b = prompt("Enter Value", a)

    list[i] = b
    setList([...list])
  }

  const deleteAll = () => {
    setList([])
  }

  return (
    <div className='box'>
      <input
        value={text}
        onChange={(e) => {
          setText(e.target.value)
        }}
        placeholder='Enter Todo'
      />
      <button onClick={addTodo}>Add</button>
      <button onClick={deleteAll}>Delete All</button>
      <ul>
        {list.map((x, i) => <li key={i}>
          {x}
          <button onClick={() => edit(i)}>Edit</button>
          <button onClick={() => del(i)}>Delete</button>
        </li>)}
      </ul>
      <Btn btnClick={() => console.log("test")} text='Test' />
      <Btn btnClick={() => console.log("Submit")} text="Submit" />
      <Btn btnClick={() => console.log("Register")} text='Register' />
      <Btn btnClick={() => console.log("Apply")} text='Apply' />
    </div>
  );
}

export default App;
