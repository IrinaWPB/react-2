import AddForm from './AddForm'
import React from 'react'
import { render } from '@testing-library/react'

test("add Item form route", () => {
    const {getByText} = render(<AddForm />)
    expect(getByText("Add item to the menu:")).toBeInTheDocument()
})

