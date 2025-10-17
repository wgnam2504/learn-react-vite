const TodoData = (props) => {
    
    const {todoList} = props;

    console.log("check props", todoList)
    return (
        <div>
            <div className='todo-data'>
                {todoList.map((item, index) => {
                    return (
                        <div className="todo-item"                    
                        style={{display : "flex", justifyContent : "space-between"}}>

                            {item.name}
                            <button>Delete</button>   
                            
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TodoData