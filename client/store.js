import React from 'react'
import io from 'socket.io-client'

export const CTX = React.createContext()

const initState = {
  general: [
    { from: 'Atichat', msg: 'hello' },
    { from: 'Tom', msg: 'hi' },
    { from: 'Arron', msg: 'yoo' },
  ],
  topic2: [
    { from: 'A', msg: 'hello' },
    { from: 'B', msg: 'hi' },
    { from: 'C', msg: 'yoo' },
  ],
}

const reducer = (state, action) => {
  const { from, msg, topic } = action.payload

  switch (action.type) {
    case 'RECEIVE_MESSAGE':
      return {
        ...state,
        [topic]: [
          ...state[topic],
          { from, msg },
        ],
      }
    default: return state
  }
}

let socket;

const Store = props => {
  if (!socket) {
    socket = io(':3001')
  }

  const reducerHook = React.useReducer(reducer, initState)
  return (
    <CTX.Provider value={reducerHook}>
      {props.children}
    </CTX.Provider>
  )
}

export default Store