import { useState } from 'react';
import './App.css';
import img1 from './assets/image/img1.jpg'


function App() {
  let [count, setCount] = useState(10)
  const [valid, setValid] = useState(true)
  let add = () => {
    setCount(count + 1)
  }

  return (
    <div className='box'>
      <p>{count}</p>
      <button onClick={add}>Add</button>

      <p>{valid ? "User is valid" : "user Not Valid"}</p>
      <button onClick={() => setValid(!valid)}>Toggle</button>
    </div>
  );
}

export default App;
