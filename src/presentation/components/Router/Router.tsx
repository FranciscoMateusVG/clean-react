import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '@/presentation/pages/Login'
import { Layout } from '@/presentation/components'
import { Validation } from '@/presentation/protocols/validation'
import { ContextProvider } from '@/presentation/pages/Login/context'
class ValidationSpy implements Validation {
  errorMessage: string
  input: object
  validate(input: object): string {
    this.input = input
    return this.errorMessage
  }
}

const Router: React.FC<any> = () => {
  const validationSpy = new ValidationSpy()
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Layout>
              <ContextProvider>
                <Login validation={validationSpy} />
              </ContextProvider>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
