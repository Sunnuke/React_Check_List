import React, {useState} from "react";

const TodoList = (props) => {
    const { list, setList } = props;
    const { newTask } = props;
    const { deleteTodo } = props;
    
    const todos = [...list];
    console.log(todos);
    const check = (e) => {
        todos[e.target.id].completed = !todos[e.target.id].completed;
        console.log(todos[e.target.id].completed);
        setList(todos);
        console.log(list);
    }



    return(
        <div>
            {/* {JSON.stringify(list)} */}
            {
                todos.map( (todo, i) =>
                    <p className=
                        {
                            todo.completed ? 'done' : ''
                        }
                    key={i}>{todo.body}: <input key={i} type="checkbox" id={i} name={todo.body} checked={todo.completed} onChange={ e => check(e) }/><input type="submit" value="Delete" onClick={ e => deleteTodo(i) } /></p>
                )
            }
        </div>
    )
}

export default TodoList;