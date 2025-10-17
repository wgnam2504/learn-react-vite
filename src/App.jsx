import './components/Todo/todo.css';
import TodoData from './components/Todo/TodoData';
import TodoNew from './components/Todo/todoNew';
import reactLogo from './assets/react.svg'
import { useState } from 'react';
const App = () => {

  const [todoList, setToDoList] = useState([
    {id : 1, name: "Learning react"},
    {id : 2, name: "Watching youtube"}
  ])

  const ten = "Quang nam";
  const age = 25;
  const data = {
    address: "ha noi",
    country: "vietnam"
  }

  const addNewTodo = (name) => {
    alert(`call me ${name}`)
  }

  
  return (
    <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew 
        addNewTodo={addNewTodo}
        />
        <TodoData
          name={ten}
          age={age}
          data={data}
          todoList= {todoList}
        />
        <div className='todo-image'>
          <img src={reactLogo} className='logo'/>
        </div>
    </div>
  )
}

export default App
