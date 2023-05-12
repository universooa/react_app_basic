import React from 'react'
import { render } from '@testing-library/react'
import App from '../App'

it('renders welcome message', () => {
    render(<App />)
    // expect(screen.getByText('Home')).toBeInTheDocument()
})
