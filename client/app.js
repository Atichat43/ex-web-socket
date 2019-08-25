import React from 'react'
import Store from './store'

import Dashboard from './dashboard'

const App = () => {
  return (
    <div className="app">
      <header className="app-header" />
      <Store>
        <Dashboard />
      </Store>
    </div>
  )
}

export default App