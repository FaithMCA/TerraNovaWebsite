//React import
import React from "react";

//Components folder imports
import Main from "./components/Main";
import SideBarNavigation from "./components/SideBarNavigation"

//Stylesheet import
import './style.css'



function App(){
    
    return(
        <div id="container-fluid">
            <div className="row">
                <SideBarNavigation />
                <Main /> 
            </div>
        </div>
    )
}



export default App;