//React imports
import React from "react"
import { Link } from "react-router-dom"

//Import image
import HeroImg from './images/ArtAssets/MalliaHEROIMGlegend1.png'

//Import components
import About from '../pages/About'
import FAQ from "../pages/FAQ"

//Import router
import {Route, Routes, BrowserRouter} from 'react-router-dom'



function Main() {
    return(
        <MainHeader />
    )
}//end Main function



function MainHeader(){
    return(
        <div className="flex-grow-1 col-sm-9 px-0 MainHeader">
            <div>
                <img className="img-fluid w-100" src={HeroImg} alt="" />
            </div>
            


            <div className="row">
                <div className="navbar sticky-top d-flex justify-content-center text-center col-sm-12 px-0 MainNavbar">
                    <div className="col-sm-3">
                        <Link to="/">
                            <h1>About</h1>
                        </Link>
                    </div>


                    <div className="col-sm-3">
                        <Link to="/faq">
                            <h1>FAQ</h1>
                        </Link>
                    </div>
                </div>          
            </div>

            {/* Router Main Menu is here to fit with the SideNav layout*/}
            
                <Routes>
                    <Route path="/*" element={                        
                            <About />                    
                    } />
                    <Route path="faq" element={
                            <FAQ />
                    } />
                </Routes>
        </div>
    )
}//end MainHeader function


export default Main