import React from "react";


function Header(props) {
  return (
    <div className="App">
        <header>
            <h1>
                {props.name}
            </h1>
        </header>
    
    </div>
  );
}

export default Header;