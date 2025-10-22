const TodoData = (props) => {
    
    const {todoList, deleteTodo} = props;

    const handleClick = (id) => {
        deleteTodo(id)
    }
  
    return (
        <div>
            <div className='todo-data'>
                {todoList.map((item, index) => {
                    return (
                        <div className={`todo-item`} key={item.id}                  
                        style={{display : "flex", justifyContent : "space-between"}}>

                            {item.name}
                            <button style={{cursor : "pointer"}}
                            onClick={() => handleClick(item.id)}
                            >Delete</button>   

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TodoData