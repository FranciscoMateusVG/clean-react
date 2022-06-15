import { Input } from '@/presentation/components'
import React, { useContext, useEffect } from 'react'
import FormStatus from './FormStatus'
import { Context } from './context'
import Styles from './Login.scss'
import { Validation } from '@/presentation/protocols/validation'

type Props = {
  validation: Validation
}

const Login: React.FC<Props> = ({ validation }) => {
  const { state, setState } = useContext(Context)
  const { emailError, passwordError } = state

  useEffect(() => {
    const emailErr = validation.validate('email', state.email)
    setState({ ...state, emailError: emailErr })
  }, [state.email, state.password])

  useEffect(() => {
    const passErr = validation.validate('password', state.password)
    setState({ ...state, passwordError: passErr })
  }, [state.password])

  return (
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
  )
}

export default Login
