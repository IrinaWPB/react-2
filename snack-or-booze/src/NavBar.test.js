import NavBar from './NavBar'
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

const snacks = [{id: 'chips',
            name: 'chips',
            description: 'blabla',
            recipe: 'recipe',
            serve: 'serve'}]

const booze = [{id: 'coke',
            name: 'coke',
            description: 'blabla',
            recipe: 'recipe',
            serve: 'serve'}]

test('showing navbar', () => {
    const {getByText} = render(
        <MemoryRouter>
           <NavBar snacks={snacks} booze={booze} /> 
        </MemoryRouter>
    )
    expect(getByText("Snack or Booze")).toBeInTheDocument()
    expect(getByText("Add Item")).toBeInTheDocument()
})