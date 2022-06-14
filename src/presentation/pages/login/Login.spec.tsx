import React from 'react'
import { render } from '@testing-library/react'
import Login from './Login'

describe('Login page', () => {
  test('Error message and Loading should not appear', () => {
    const { getByTestId } = render(<Login />)
    const errorWrap = getByTestId('errorWrap')
    expect(errorWrap.childElementCount).toBe(0)
  })
})
