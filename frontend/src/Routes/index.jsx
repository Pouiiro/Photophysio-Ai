import React, { useContext } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from 'Pages/Home'
import Patient from 'Pages/Patient'
import Physio from 'Pages/Physiotherapist'
import { AppContext } from 'Providers/AppContext'
import Header from 'Components/common/navbar/Navbar'
import LoadingComp from 'Components/loader/loading'

const Routes = () => {
  const { Loading } = useContext(AppContext)

  return Loading ? (
    <LoadingComp />
  ) : (
    <BrowserRouter>
      <Header />
      <Route path='/' exact component={Home} />
      <Route path='/Patient' component={Patient} />
      <Route path='/Physiotherapist' component={Physio} />
    </BrowserRouter>
  )
}
export default Routes
