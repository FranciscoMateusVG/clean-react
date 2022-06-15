import React from 'react'
import { ContextProvider } from '../../pages/Login/context'
import { render, Matcher, MatcherOptions } from '@testing-library/react'
import { ValidationSpy } from '../mocks/mock-validation'
import Login from '@/presentation/pages/Login'

type RTLType = (
  id: Matcher,
  options?: MatcherOptions | undefined
) => HTMLElement

type RenderLogin = {
  getByTestId: RTLType
  validationSpy: ValidationSpy
}

export const renderLogin = (): RenderLogin => {
  const validationSpy = new ValidationSpy()
  const getByTestId = render(
    <ContextProvider>
      <Login validation={validationSpy} />
    </ContextProvider>
  ).getByTestId
  return { getByTestId, validationSpy }
}
