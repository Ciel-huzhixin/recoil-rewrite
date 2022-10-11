import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom/client';

const TodoContext = React.createContext();

function App() {
  const [todoList, setTodoList] = useState(['吃饭']);
  const contextValue = {
    todoList,
    addTodo: (text) => setTodoList([...todoList, text])
  }
  return (
    <TodoContext.Provider value={contextValue}>
      <TodoList />
    </TodoContext.Provider>
  )
}

function TodoList() {
  const { todoList, addTodo } = useContext(TodoContext);
  const [text, setText] = useState('');
  return (
    <div>
      <input type="text" value={text} onChange={event => setText(event.target.value)} />
      <button onClick={() => { addTodo(text); setText('') }}>add</button>
      <ul>
        {
          todoList.map((todo, index) => {
            return (<li key={index}>{todo}</li>)
          })
        }
      </ul>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

