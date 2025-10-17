import './components/Todo/todo.css';
import TodoData from './components/Todo/TodoData';
import TodoNew from './components/Todo/todoNew';
import reactLogo from './assets/react.svg'
const App = () => {

  return (
    <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew />
        <TodoData />
        <div className='todo-image'>
          <img src={reactLogo} className='logo'/>
        </div>
    </div>
  )
}

export default App
