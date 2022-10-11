import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot, atom, useRecoilState, selector, useRecoilValue } from 'recoil';



const root = ReactDOM.createRoot(document.querySelector('#root'));
// 定义原子状态
const todoListState = atom({
  key: 'todoList',
  default: ['eat']
})

const charCountState = selector({
  key: 'charCountState', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(todoListState);

    return text.length;
  },
});

function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}

function TodoApp() {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  console.log('todoList', todoList)
  const [text, setText] = useState('');
  return (
    <div>
      <input type="text" value={text} onChange={(event) => setText(event.target.value)} />
      <button onClick={() => { setTodoList([...todoList, text]); setText('') }}>add</button>
      <CharacterCount />
      <ul>
        {
          todoList.map((text, index) => <li key={index}>{text}</li>)
        }
      </ul>
    </div>
  )
}


root.render(
  <RecoilRoot>
    <TodoApp />
  </RecoilRoot>
)