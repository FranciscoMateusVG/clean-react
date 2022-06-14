import React from 'react'
import Spinner from '../Spinner'
import Styles from './FormStatus.scss'

const FormStatus: React.FC<any> = () => {
  return (
    <div className={Styles.errorWrapper}>
      <Spinner />
      <span className={Styles.error}>Erro</span>
    </div>
  )
}

export default FormStatus
