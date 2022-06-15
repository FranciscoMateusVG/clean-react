/* eslint-disable react/prop-types */
import { Context } from '@/presentation/pages/Login/context'
import React, { useContext } from 'react'
import Styles from './Input.scss'

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

const Input: React.FC<Props> = (props: Props) => {
  const { state, setState } = useContext(Context)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const inputTarget = event.target.name
    const inputValue = event.target.value

    setState({
      ...state,
      [inputTarget]: inputValue
    })
  }
  return (
    <div className={Styles.inputWrap}>
      <input {...props} onChange={handleChange} />
      <span title={props.title} className={Styles.status}>
        ❤️‍🩹
      </span>
    </div>
  )
}

export default Input
