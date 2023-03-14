import React, { useState }  from 'react'
import SnackOrBoozeApi from "./Api";

const AddForm = () => {
    const initialState = {
     type: "",
     name: "",
     description: "",
     recipe: "",
     serve: ""
    }
    
    const [formData, setFormData] = useState(initialState)

    const handleChange = e => {
        const { name, value } = e.target
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        const newItem = formData
        console.log(newItem)
        // const addItem = async () => {
        // let addedItem = await SnackOrBoozeApi.addSnackorBooze(newItem[type], newItem);
        // }
        // addItem()

        setFormData(initialState)
    }

    return (
        <form>
            <h2>Add item to the menu:</h2>
            <label htmlFor="snacks">Snacks</label>
            <input onChange={handleChange} type="radio" id="snacks" name="type" value="snacks"></input>
            <label htmlFor="drinks">Drinks</label>
            <input onChange={handleChange} type="radio" id="drinks" name="type" value="drinks"></input>
            <label htmlFor="name">Name</label>
            <input onChange={handleChange} type="text" id="name" name="name" value="name"></input>
            <label htmlFor="description">Description</label>
            <input onChange={handleChange} type="text" id="description" name="description" value="description"></input>
            <label htmlFor="recipe">Recipe</label>
            <input onChange={handleChange} type="text" id="recipe" name="recipe" value="recipe"></input>
            <label htmlFor="serve">Recipe</label>
            <input onChange={handleChange} type="text" id="serve" name="serve" value="serve"></input>
            <button onClick={handleSubmit}>Add Item</button>
        </form>
    )
}

export default AddForm