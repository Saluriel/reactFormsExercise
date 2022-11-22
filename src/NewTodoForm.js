import React, { useState } from 'react';

const NewTodoForm = ({ addTodo }) => {
    const INITIAL_STATE = { task: '' }
    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleSubmit = e => {
        e.preventDefault()
        addTodo(formData.task);
        setFormData(INITIAL_STATE)
    }

    const handleChange = e => {
        const { name, value } = e.target
        setFormData(formData => ({ ...formData, [name]: value }))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">Task</label>
            <input
                id="name"
                type="text"
                name="task"
                placeholder="Task"
                value={formData.task}
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    )
}

export default NewTodoForm;