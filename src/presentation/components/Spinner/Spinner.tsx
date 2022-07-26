import React from 'react'
import Styles from './Spinner.scss'

const Spinner: React.FC = () => {
  return (
    <div className={Styles.spinner}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Spinner
