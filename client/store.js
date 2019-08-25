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

const sendChatAction = value => {
  socket.emit('chat message', value)
}

const Store = props => {
  const user = `Atichat ${  Math.random(100).toFixed(2)}`
  const [allChat, dispatch] = React.useReducer(reducer, initState)

  if (!socket) {
    socket = io(':3001')
    socket.on('chat message', msg => {
      dispatch({type: 'RECEIVE_MESSAGE', payload: msg})
    })
  }

  return (
    <CTX.Provider value={{ allChat, sendChatAction, user }}>
      {props.children}
    </CTX.Provider>
  )
}

export default Store