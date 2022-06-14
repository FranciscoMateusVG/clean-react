import { Input } from '@/presentation/components'
import React, { useContext } from 'react'
import FormStatus from './FormStatus'
import { Context, ContextProvider } from './context'
import Styles from './Login.scss'

const Login: React.FC = () => {
  const { emailError, passwordError } = useContext(Context)

  return (
    <ContextProvider>
      <form className={Styles.form}>
        <h2>Login</h2>
        <Input
          data-testid='emailInput'
          type='email'
          name='email'
          placeholder='Digite sem e-mail'
          title={emailError}
        />
        <Input
          data-testid='passInput'
          type='password'
          name='password'
          placeholder='Digite sua senha'
          title={passwordError}
        />
        <button
          data-testid='submit'
          type='submit'
          name='login'
          className={Styles.submit}
          disabled
        >
          Entrar
        </button>
        <span className={Styles.link}>Criar conta</span>
        <FormStatus />
      </form>
    </ContextProvider>
  )
}

export default Login
