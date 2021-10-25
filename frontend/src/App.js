import React from 'react';
import { BrowserRouter as  Router, Route, Switch  } from 'react-router-dom';
//import Button from './Components/buttons';
import Home from './Components/Home';
import Loading from './Components/Loading';
import H2 from './Components/text';

//button functionality
// function goHome(){
    // return
     
//}

const ReactRuter = () => {

  return(
<Router>

  <Route exact path= './Components/Home'> 
      <Home />
  </Route>

<Route exact path= './Components/Loading'> 
      <Loading />
  </Route>
</Router>

  )

}

function App() {
  return (

    <div> 

<H2> Display </H2>      
<ReactRuter />
       
  
    </div>
    
  );
}

export default App;
