import React, { useState }  from 'react'
import { useHistory } from "react-router-dom";
import './App.css'
import './AddForm.css'

const AddForm = ({addItem}) => {
    
    //define default state
    const initialState = {
     type: "",
     id: "",
     name: "",
     description: "",
     recipe: "",
     serve: ""
    }

    const [formData, setFormData] = useState(initialState)
    
    //setting data as user is adding info to the form
    const handleChange = e => {
        const { name, value } = e.target
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    //get history object to use for redirecting on submit
    const history = useHistory()

    const handleSubmit = e => {
        e.preventDefault()

        //get type and name from the form
        let {type, name, ...rest} = formData

        //setting id to lower case name
        formData.id = name.toLowerCase()

        //remove type property
        delete formData.type

        //post request to add item
        addItem(type, formData)

        //formating url piece
        if (type === 'drinks') type = 'booze'

        //setting form to initial state
        setFormData(initialState)
        
        //redirection to drink or snack page
        history.push(`/${type}`)
    }

    return (
        <form className='AddForm card'>
            <h2>Add item to the menu:</h2>
            <div onChange={handleChange} className="AddForm-radio">
                <label htmlFor="snacks">Snacks</label>
                <input type="radio" id="snacks" name="type" value="snacks"></input>
                <label htmlFor="drinks">Drinks</label>
                <input type="radio" id="drinks" name="type" value="drinks"></input>
            </div>
            <label htmlFor="name">Name</label>
            <input onChange={handleChange} type="text" id="name" name="name"></input>
            <label htmlFor="description">Description</label>
            <input onChange={handleChange} type="text" id="description" name="description" value={formData.description}></input>
            <label htmlFor="recipe">Recipe</label>
            <input onChange={handleChange} type="text" id="recipe" name="recipe" value={formData.recipe}></input>
            <label htmlFor="serve">Serve</label>
            <input onChange={handleChange} type="text" id="serve" name="serve" value={formData.serve}></input>

            <button onClick={handleSubmit}>Add Item</button>
        </form>
    )
}

export default AddForm