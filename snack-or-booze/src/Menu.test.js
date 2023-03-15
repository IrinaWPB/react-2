import React from 'react'
import Menu from './Menu'
import { render, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

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

test('snack menu', () => {
    const {getByText} = render(
        <MemoryRouter initialEntries={['/snacks']}>
            <App >
                <Menu items={{snacks, booze}} cantFind={'/'}/>
           </App>
        </MemoryRouter>
    )
    expect(getByText('chips')).toBeInTheDocument()
    })