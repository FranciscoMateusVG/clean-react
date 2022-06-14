import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '@/presentation/pages/Login'
import { Layout } from '@/presentation/components'
import '@/presentation/styles/global.scss'

const Router: React.FC<any> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
