import { FormStatus, Input } from '@/presentation/components'
import React from 'react'
import Styles from './Login.scss'

const Login: React.FC = () => {
  return (
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
  )
}

export default Login
