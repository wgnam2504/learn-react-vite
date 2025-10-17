const TodoData = (props) => {
    
    const {todoList} = props;
  
    return (
        <div>
            <div className='todo-data'>
                {todoList.map((item, index) => {
                    return (
                        <div className={`todo-item`} key={item.id}                  
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