const TodoData = (props) => {
    console.log("check props", props)
    const {name, age, data} = props;
    return (
        <div>
            <div className='todo-data'>
                <div>My name is {name} </div>
                <div>Learning react</div>
                <div>watching youtube</div>
            </div>
        </div>
    )
}

export default TodoData