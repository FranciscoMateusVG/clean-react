import React, { createContext, useState } from 'react'

type StateProps = {
  isLoading: boolean
  messageError: string
  emailError: string
  passwordError: string
  email: string
  password: string
}

type StateContext = {
  state: StateProps
  setState: any
}

const state = {
  isLoading: false,
  messageError: '',
  emailError: 'Campo obrigatório!',
  passwordError: 'Campo obrigatório!',
  email: '',
  password: ''
}

export const Context = createContext<StateContext>({
  state: state,
  setState: null
})

export const ContextProvider: React.FC<any> = ({ children }) => {
  const [initialState, setState] = useState<StateProps>(state)

  return (
    <Context.Provider value={{ state: initialState, setState }}>
      {children}
    </Context.Provider>
  )
}
