import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Covid from './Components/Covid_tracker/Covid';
import Statewise from './Components/Stateswise/Statewise'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const App =()=>{
  return(
    <>
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Covid}/>
    <Route exact path="/statewise" component={Statewise}/>
    </Switch>
    </BrowserRouter>
    </>
  )
}
export default App