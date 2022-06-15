import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '@/presentation/pages/Login'
import { Layout } from '@/presentation/components'
import { ContextProvider } from '@/presentation/pages/Login/context'
import { ValidationSpy } from '@/presentation/pages/Login/Login.spec'

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
