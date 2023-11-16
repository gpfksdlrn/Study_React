import { useState, useRef, useReducer } from 'react';
import './App.css';
import Header from './components/Header';
import TodoEditor from './components/TodoEditor';
import TodoList from './components/TodoList';

const mockData = [
  {
    id : 0,
    isDone : true,
    content : "React 공부하기",
    createdDate: new Date().getTime(),

  },
  {
    id : 1,
    isDone : false,
    content : "빨래 널기",
    createdDate: new Date().getTime(),

  },
  {
    id : 2,
    isDone : true,
    content : "설거지 하기",
    createdDate: new Date().getTime(),

  }
];

function reducer(state, action){
  switch(action.type){
    case "CREATE" : {
      return [...state, action.data];
    }
    case "UPDATE" : {
      return state.map((it) => 
        it.id === action.data // targetId
          ? {...it, isDone: !it.isDone}
          : it)
    }
    case "DELETE" : {
      return state.filter((it) => 
          it.id !== action.data
        );
    }
  }
}

function App() {

  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data : {
        id : idRef.current++,
        isDone : false,
        content,
        createdDate: new Date().getTime()
      }
    });
    // setTodos([newTodo, ...todos]);
  };

  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      data: targetId
    });
    // setTodos(
    //   todos.map((todo) =>
    //     todo.id === targetId 
    //       ? { ...todo, isDone : !todo.isDone }
    //       : todo
    //   )
    // );
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      data: targetId
    });
    // setTodos(
    //   todos.filter((todo) => todo.id !== targetId)
    // );
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;