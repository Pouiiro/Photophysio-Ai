import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from 'Components/common/navbar/NavHeader'
import Home from '../Pages/Home'
import Test from '../Pages/Test'

const Routes = () => (
  <BrowserRouter>
    <Header /> {/*this is the navigation bar} */}
    <Route path='/' exact component={Home} />
    <Route path='/Test' component={Test} />
  </BrowserRouter>
)
export default Routes
