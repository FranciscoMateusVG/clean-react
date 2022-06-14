/* eslint-disable react/prop-types */
import { Context } from '@/presentation/pages/Login/context'
import React, { useContext } from 'react'
import Styles from './Input.scss'

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

const Input: React.FC<Props> = (props: Props) => {
  return (
    <div className={Styles.inputWrap}>
      <input {...props} />
      <span title={props.title} className={Styles.status}>
        ❤️‍🩹
      </span>
    </div>
  )
}

export default Input
