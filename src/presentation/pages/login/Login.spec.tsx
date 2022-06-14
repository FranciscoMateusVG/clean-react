import React from 'react'
import { render } from '@testing-library/react'
import Login from './Login'

describe('Login page initial state', () => {
  test('Error message and Loading should not appear', () => {
    const { getByTestId } = render(<Login />)
    const errorWrap = getByTestId('errorWrap')
    expect(errorWrap.childElementCount).toBe(0)
  })

  test('Button should be disables', () => {
    const { getByTestId } = render(<Login />)
    const submit = getByTestId('submit') as HTMLButtonElement
    expect(submit.disabled).toBe(true)
  })

  test('EmailStatus title should be required', () => {
    const { getByTestId } = render(<Login />)
    const emailInput = getByTestId('emailInput')
    expect(emailInput.title).toBe('Campo obrigatório!')
  })
  test('PasswordStatus title should be required', () => {
    const { getByTestId } = render(<Login />)
    const passInput = getByTestId('passInput')
    expect(passInput.title).toBe('Campo obrigatório!')
  })
})
