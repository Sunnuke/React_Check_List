import React, {useState} from "react";


const NewToDo = (props) => {
    const { newTask } = props;
    const [ add, setAdd ] = useState("");
    const [ todo, setTodo ] = useState({id: null, body: "", completed: false});

    const addToo = (e) => {
        e.preventDefault();
        todo.body = add;
        newTask(todo);
    }

    return(
        <>
            <h2>Add A Todo</h2>
            <form onSubmit={addToo}>
                <input type="text" onChange={ e => setAdd(e.target.value) } />
                <button type="submit">Add</button>
            </form>
        </>
    )
}



export default NewToDo;
