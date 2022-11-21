import React, { useState } from 'react';


// Form for creating a new box on submit

const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = { width: "", height: "", backgroundColor: "" };
    const [formData, setFormData] = useState(INITIAL_STATE)

    // send width, height, and color to parent & clear the form

    const handleSubmit = e => {
        e.preventDefault();
        addBox(formData.width, formData.height, formData.backgroundColor);
        setFormData(INITIAL_STATE);
    }

    const handleChange = e => {
        const { name, value } = e.target
        setFormData(formData => ({
            ...formData, [name]: value
        }))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="width">Width</label>
            <input
                id="name"
                type="text"
                name="width"
                placeholder="Box Width"
                value={formData.width}
                onChange={handleChange}
            /><br></br>
            <label htmlFor="height">Height</label>
            <input
                id="name"
                type="text"
                name="height"
                placeholder="Box Height"
                value={formData.height}
                onChange={handleChange}
            /><br></br>
            <label htmlFor="backgroundColor">Background Color</label>
            <input
                id="name"
                type="text"
                name="backgroundColor"
                placeholder="Background Color"
                value={formData.backgroundColor}
                onChange={handleChange}
            /><br></br>
            <button>Add Box</button>
        </form>
    )
}

export default NewBoxForm;