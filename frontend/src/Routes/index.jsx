import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
// import Header from 'Components/common/navbar/NavHeader'
import Home from '../Pages/Home'
import Test from '../Pages/Patient'
import Physio from '../Pages/Physiotherapist'
import LoadingPage from 'Pages/LoadingPage'
//import ReactNavbar from 'Components/common/navbar/ReactNavbar'
import HeaderArtur from 'Components/common/navbar/Navbar'

const Routes = () => (
  <BrowserRouter>
    <HeaderArtur />
    <Route path='/' exact component={Home} />
    <Route path='/Patient' component={Test} />
    <Route path='/Physiotherapist' component={Physio} />
    <Route path='/LoadingPage' component={LoadingPage} />
    {/* <Header /> this is the navigation bar} */}
  </BrowserRouter>
)
export default Routes
