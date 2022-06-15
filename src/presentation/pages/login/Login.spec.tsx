import { renderLogin } from '@/presentation/test/renders/render-login'
import { cleanup, fireEvent } from '@testing-library/react'
import { faker } from '@faker-js/faker'

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

  // test('EmailStatus title should be required', () => {
  //   const { getByTestId } = renderLogin()
  //   const emailInput = getByTestId('emailInput')
  //   expect(emailInput.title).toBe('Campo obrigatório!')
  // })
  // test('PasswordStatus title should be required', () => {
  //   const { getByTestId } = renderLogin()
  //   const passInput = getByTestId('passInput')
  //   expect(passInput.title).toBe('Campo obrigatório!')
  // })
})

describe('Login validation input', () => {
  afterEach(cleanup)

  test('Should call validation email with correct value', () => {
    const { getByTestId, validationSpy } = renderLogin()
    const emailInput = getByTestId('emailInput')
    const email = faker.internet.email()

    fireEvent.input(emailInput, { target: { value: email } })

    expect(validationSpy.fieldName).toBe('email')
    expect(validationSpy.fieldValue).toBe(email)
  })
  test('Should call validation password with correct value', () => {
    const { getByTestId, validationSpy } = renderLogin()
    const passInput = getByTestId('passInput')
    const password = faker.internet.password()
    fireEvent.input(passInput, { target: { value: password } })

    expect(validationSpy.fieldName).toBe('password')
    expect(validationSpy.fieldValue).toBe(password)
  })
})

describe('Login validation errors', () => {
  afterEach(cleanup)

  // Fazer depois

  test('Should show email error if validation fails', () => {
    const { getByTestId, validationSpy } = renderLogin()
    const emailInput = getByTestId('emailInput')
    const email = faker.internet.email()

    fireEvent.input(emailInput, { target: { value: email } })

    expect(validationSpy.fieldName).toBe('email')
    expect(validationSpy.fieldValue).toBe(email)
  })

  test('Should show password error if validation fails', () => {
    const { getByTestId, validationSpy } = renderLogin()
    const passwordInput = getByTestId('passInput')
    const password = faker.internet.password()

    fireEvent.input(passwordInput, { target: { value: password } })

    expect(validationSpy.fieldName).toBe('password')
    expect(validationSpy.fieldValue).toBe(password)
  })
})
