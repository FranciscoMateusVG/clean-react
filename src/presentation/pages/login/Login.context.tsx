import React, { createContext } from 'react'

type StateProps = {
  isLoading: boolean
  messageError: string
}

const state = {
  isLoading: false,
  messageError: ''
}

export const Context = createContext<StateProps>(state)

export const ContextProvider: React.FC<any> = ({ children }) => {
  return <Context.Provider value={state}>{children}</Context.Provider>
}
