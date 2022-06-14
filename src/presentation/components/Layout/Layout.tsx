import React, { memo } from 'react'
import Logo from '../Logo/Logo'
import Styles from './Layout.scss'

const Layout: React.FC<any> = ({ children }) => {
  return (
    <div className={Styles.layout}>
      <header className={Styles.header}>
        <Logo />
        <h1>4DEV - Enquete para programadores</h1>
      </header>
      {children}
      <footer className={Styles.footer}>Teste</footer>
    </div>
  )
}

export default memo(Layout)
