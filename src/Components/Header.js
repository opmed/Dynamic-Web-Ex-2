import React from 'react'


function Header() {
	return(

       <div className="Header">
          <h2>Weather Header</h2>
          <div className="CitiesNav">
            <a href="/?city=tokyo">Tokyo</a>
            <a href="/?city=seoul">Seoul</a>
            <a href="/?city=chicago">Chicago</a>
            <a href="/?city=toranto">Toranto</a>
          </div>
       </div>
  );
}

export default Header