import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import App from './App'
import { MemoryRouter, Switch, Route, useParams } from 'react-router-dom'
import Menu from './Menu'

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

it ("renders without crashing", async () => {
    render(<MemoryRouter><App /></MemoryRouter>)
})

it ("shows home page with link at loading", async () => {
    const { getByText } = render(<MemoryRouter><App /></MemoryRouter>)
    const snackBtn = getByText("Snacks")
    const boozeBtn = getByText("Drinks")
    const formBtn = getByText("Add Item")

    expect(getByText("Welcome to Silicon Valley's premier dive cafe!")).toBeInTheDocument() 
    expect(snackBtn).toBeInTheDocument()
    expect(boozeBtn).toBeInTheDocument()
    expect(formBtn).toBeInTheDocument()

    fireEvent.click(snackBtn)
    expect(getByText("Snacks Menu")).toBeInTheDocument()

    fireEvent.click(boozeBtn)
    expect(getByText("Booze Menu")).toBeInTheDocument()

    fireEvent.click(formBtn)
    expect(getByText("Add item to the menu:")).toBeInTheDocument()
})

test("renders form", () => {
    const { getByText } = render((
        <MemoryRouter initialEntries={['/addItem']}>
            <App />
        </MemoryRouter>
    ))
    expect(getByText("Add item to the menu:")).toBeInTheDocument()
})

it ("shows snacks menu", async () => {
    const { getByText } = render(
        <MemoryRouter initialEntries={['/snacks']}>
            <App />
        </MemoryRouter>
    )
    expect(getByText("Snacks Menu")).toBeInTheDocument()
})



it ("shows booze menu", () => {
    let type = 'booze'
    const { getByText } = render(
        <MemoryRouter initialEntries={[`/${type}`]}>
            <App />
        </MemoryRouter>
    )
    expect(getByText("Booze Menu")).toBeInTheDocument()
})

it("redirects to home from nonexisting route", () => {
    const { getByText } = render((
        <MemoryRouter initialEntries={['/invalid-route']}>
            <App />
        </MemoryRouter>
    ))
    expect(getByText("Welcome to Silicon Valley's premier dive cafe!")).toBeInTheDocument()
})

test("renders form", () => {
    const { getByText } = render((
        <MemoryRouter initialEntries={['/addItem']}>
            <App />
        </MemoryRouter>
    ))
    expect(getByText("Add item to the menu:")).toBeInTheDocument()
})







