import { useState, useEffect, useRef } from 'react'
import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import Even from './components/Even'
import useUpdate from './hooks/useUpdate'
import useInput from './hooks/useInput'

// 1. 마운트 (탄생)
// 2. 업데이트 (변화, 리렌더)
// 3. 언마운트 (죽음)

function App() {
  const [count, setCount] = useState(0);
  const [text, onChangeText] = useInput();

  useUpdate(()=>{
    console.log("APP 컴포넌트 업데이트");
  });

  // 마운트, 한번만 실행
  useEffect(()=> {
    console.log("마운트");
  },[]);

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={onChangeText}/>
      </section>
      <section>
        <Viewer count={count}/>
        {count % 2 === 0 && <Even/>}
      </section>
      <section>
        <Controller onClickButton={onClickButton}/>
      </section>
    </div>
  )
}

export default App
