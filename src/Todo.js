import React from 'react';

const Todo = ({ task, id, removeTodo }) => {
    const remove = () => removeTodo(id)

    return (
        <div>Task: {task} <button onClick={remove}>X</button></div>
    )
}

export default Todo;