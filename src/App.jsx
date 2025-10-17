import './components/Todo/todo.css';
import TodoData from './components/Todo/TodoData';
import TodoNew from './components/Todo/todoNew';
import reactLogo from './assets/react.svg'
import { useState } from 'react';
const App = () => {

  const [todoList, setToDoList] = useState([])

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000000),
      name: name
    }
    setToDoList([...todoList, newTodo])
  }

  const randomIntFromInterval = (min, max) =>  { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


  
  return (
    <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew 
        addNewTodo={addNewTodo}
        />
        <TodoData
          todoList= {todoList}
        />
        <div className='todo-image'>
          <img src={reactLogo} className='logo'/>
        </div>
    </div>
  )
}

export default App
