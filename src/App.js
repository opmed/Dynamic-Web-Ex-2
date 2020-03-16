import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import "./App.css"

import Header from "./Components/Header"
import WeatherImage from "./Components/WeatherImage"
import Home from "./Container/Home"


function App() {

	return(
       
		<div className="SiteWrapper">
		  <Header />
		  <Router>
		     <Switch>
		       <Route path="/">
		         <Home />
		       </Route>
		      </Switch>
		   </Router>    
		</div>
  );
}

/*Change background color*/
function changeBackground(color) {
   document.body.style.background = color;
}
window.addEventListener("load",function() { changeBackground('lightblue') });



export default App;

