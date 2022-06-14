import { Input } from '@/presentation/components'
import React from 'react'
import FormStatus from './FormStatus'
import { ContextProvider } from './Login.context'
import Styles from './Login.scss'

const Login: React.FC = () => {
  return (
    <ContextProvider>
      <form className={Styles.form}>
        <h2>Login</h2>
        <Input type='email' name='email' placeholder='Digite sem e-mail' />
        <Input type='password' name='password' placeholder='Digite sua senha' />
        <button type='submit' name='login' className={Styles.submit}>
          Entrar
        </button>
        <span className={Styles.link}>Criar conta</span>
        <FormStatus />
      </form>
    </ContextProvider>
  )
}

export default Login
