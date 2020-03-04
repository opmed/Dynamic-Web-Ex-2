import React from 'react'

import "./App.css"

import Header from "./Components/Header"
import Home from "./Container/Home"

function App() {
	return(

		<div className="SiteWrapper">
		  <Header />
		  <Home />
		</div>

  );
}

export default App;