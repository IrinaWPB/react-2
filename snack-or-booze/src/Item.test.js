import React from 'react'
import Item from './Item'
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


test("item details", () => {
    const { getByText } = render(
        <MemoryRouter initialEntries={['./snacks/chips']}>
            <Item items={{snacks, booze}} cantFind='/'></Item>
        </MemoryRouter>
    )
})