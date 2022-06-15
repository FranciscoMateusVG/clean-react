import React, { useContext } from 'react'
import Spinner from '../../../components/Spinner'
import Styles from './FormStatus.scss'
import { Context } from '../context'

const FormStatus: React.FC<any> = () => {
  const { state } = useContext(Context)
  const { isLoading, messageError } = state
  return (
    <div data-testid='errorWrap' className={Styles.errorWrapper}>
      {isLoading && <Spinner />}
      {messageError && <span className={Styles.error}>Erro</span>}
    </div>
  )
}

export default FormStatus
