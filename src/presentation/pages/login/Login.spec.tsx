import { renderLogin } from '@/presentation/test/renders/render-login'
import { cleanup, fireEvent } from '@testing-library/react'

describe('Login page initial state', () => {
  test('Error message and Loading should not appear', () => {
    const { getByTestId } = renderLogin()
    const errorWrap = getByTestId('errorWrap')
    expect(errorWrap.childElementCount).toBe(0)
  })

  test('Button should be disables', () => {
    const { getByTestId } = renderLogin()
    const submit = getByTestId('submit') as HTMLButtonElement
    expect(submit.disabled).toBe(true)
  })

  test('EmailStatus title should be required', () => {
    const { getByTestId } = renderLogin()
    const emailInput = getByTestId('emailInput')
    expect(emailInput.title).toBe('Campo obrigatório!')
  })
  test('PasswordStatus title should be required', () => {
    const { getByTestId } = renderLogin()
    const passInput = getByTestId('passInput')
    expect(passInput.title).toBe('Campo obrigatório!')
  })
})

describe('Login validation input', () => {
  afterEach(cleanup)

  test('Should call validation email with correct value', () => {
    const { getByTestId, validationSpy } = renderLogin()
    const emailInput = getByTestId('emailInput')

    fireEvent.input(emailInput, { target: { value: 'any_email' } })

    expect(validationSpy.fieldName).toBe('email')
    expect(validationSpy.fieldValue).toBe('any_email')
  })
  test('Should call validation password with correct value', () => {
    const { getByTestId, validationSpy } = renderLogin()
    const passInput = getByTestId('passInput')

    fireEvent.input(passInput, { target: { value: 'any_password' } })

    expect(validationSpy.fieldName).toBe('password')
    expect(validationSpy.fieldValue).toBe('any_password')
  })
})
