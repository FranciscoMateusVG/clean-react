import Input from '@/presentation/components/Input/Input'
import Logo from '@/presentation/components/Logo/Logo'
import Spinner from '@/presentation/components/Spinner'
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
      <div className={Styles.errorWrapper}>
        <Spinner />
        <span className={Styles.error}>Erro</span>
      </div>
    </form>
  )
}

export default Login
