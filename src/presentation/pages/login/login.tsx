import Logo from '@/presentation/components/Logo/Logo'
import Spinner from '@/presentation/components/Spinner'
import React from 'react'
import Styles from './Login.scss'

const Login: React.FC = () => {
  return (
    <form className={Styles.form}>
      <h2>Login</h2>
      <div className={Styles.inputWrap}>
        <input type='email' name='email' placeholder='Digite sem e-mail' />
        <span className={Styles.status}>❤️‍🩹</span>
      </div>
      <div className={Styles.inputWrap}>
        <input type='password' name='password' placeholder='Digite sua senha' />
        <span className={Styles.status}>❤️‍🩹</span>
      </div>
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
