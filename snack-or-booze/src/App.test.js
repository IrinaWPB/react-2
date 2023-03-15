import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import App from './App'
import { MemoryRouter } from 'react-router-dom'

it ("renders without crashing", () => {
    render(<MemoryRouter><App /></MemoryRouter>)
})

it ("shows home page snack and booze buttons at loading", () => {
    const { getByText } = render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    )
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

it ("shows snacks menu", () => {
    const { getByText } = render(
        <MemoryRouter initialEntries={['/snacks']}>
            <App />
        </MemoryRouter>
    )
    expect(getByText("Snacks Menu")).toBeInTheDocument()
})

it ("shows booze menu", () => {
    const { getByText } = render(
        <MemoryRouter initialEntries={['/booze']}>
            <App />
        </MemoryRouter>
    )
    expect(getByText("Booze Menu")).toBeInTheDocument()
})

it("redirects to home from nonexisting route", () => {
    const { getByText } = render(
        <MemoryRouter initialEntries={['/invalid-route']}>
            <App />
        </MemoryRouter>
    )
    expect(getByText("Welcome to Silicon Valley's premier dive cafe!")).toBeInTheDocument()
})






