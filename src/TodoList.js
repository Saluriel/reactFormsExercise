import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'

function TodoList() {
    const INITIAL_STATE = [
        { task: 'Make todo list' }
    ]

    const [todos, setTodos] = useState(INITIAL_STATE);

    const addTodo = (task) => {
        setTodos(todos => [...todos, { task, id: uuid() }])
    }

    const removeTodo = id => {
        setTodos(todos => todos.filter(todo => todo.id !== id))
    }

    return (
        <div>
            <h3>TODO LIST</h3>
            <NewTodoForm addTodo={addTodo} />
            <div>{todos.map(({ task, id }) => <Todo task={task} removeTodo={removeTodo} id={id} />)}
            </div>
        </div>
    )
}

export default TodoList;