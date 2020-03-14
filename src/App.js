import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import "./App.css"

import Header from "./Components/Header"
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

export default App;