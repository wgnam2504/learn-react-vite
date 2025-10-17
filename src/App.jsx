import './components/Todo/todo.css';
import TodoData from './components/Todo/TodoData';
import TodoNew from './components/Todo/todoNew';
import reactLogo from './assets/react.svg'
const App = () => {
  const ten = "Quang nam";
  const age = 25;
  const data = {
    address: "ha noi",
    country: "vietnam"
  }
  return (
    <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew />
        <TodoData
          name={ten}
          age={age}
          data={data}
        />
        <div className='todo-image'>
          <img src={reactLogo} className='logo'/>
        </div>
    </div>
  )
}

export default App
