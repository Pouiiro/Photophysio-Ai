// import LoadingPage from 'Pages/Loading'
import React from 'react'
import AppProvider from './Providers/AppContext'
import Routes from './Routes'

const App = () => {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  )
}

export default App
