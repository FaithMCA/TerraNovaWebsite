//React imports
import React from "react"
import { Link } from "react-router-dom"

//Import image
import StoryImage from '../components/images/infoimages/Story.png'
import OverviewImage from '../components/images/infoimages/Overview.png'
import GameplayandFeaturesImage from '../components/images/infoimages/GameplayandFeatures.png'
import DynamicGraphicsImage from '../components/images/infoimages/8bit16bitgraphics.gif'
import DynamicBattleSystemImage from '../components/images/infoimages/dynamicbattlesystem.gif'
import PaletteEditorImage from '../components/images/infoimages/Palette.png'
import DualScenarioImage from '../components/images/infoimages/DualScenarioSystem.png'
import ClassChangeImage from '../components/images/infoimages/ClassChangeSystem.png'
import MonstersGaloreImage from '../components/images/infoimages/MonstersGalore.png'
import GraphicsFiltersImage from '../components/images/infoimages/GraphicsFilters.png'

//Import pages
import Story from '../pages/Story'
import GameplayFeatures from '../pages/GameplayFeatures'
import TheDevTeam from '../pages/TheDevTeam'

//Import router
import {Route, Routes} from 'react-router-dom'




function About() {
    return(
        <div className="row">  
       
        
        {/* Overview */}




            {/* Youtube Video */}
            
                <iframe className="Youtube" width="100" height="700" src="https://www.youtube.com/embed/HtAhSng1wM0?si=c9RYE30I2yCbWM_d" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                </iframe>

                <div className="col-sm-12 text-center">
                <img className="" src={OverviewImage} alt="OverviewImage" />
                </div>



            {/* Overview Description    */}
                <div className="About col-sm-12 text-center">
                    <h1>TERRA NOVA</h1>
                    <h4>Legend of the Runes</h4>
                </div>
                
                <div className="AboutParagraph mx-auto col-sm-6">
                    <p>
                        Terra Nova: Legend of the Runes is a 2D RPG that is for the most part inspired by 8 & 16-bit entries of the Final Fantasy series, but honestly all of the great RPG's of the 80's, 90's, and beyond that I grew up playing have had an influence. Though inspired by those classics, Terra Nova: LotR has custom built engines, mechanics, and gameplay not possible on common hardware during the 80's & 90's. I've worked hard to make this project feel fresh but also familiar, so that it has something to offer to retrogamers and new gamers alike. It also features great music, and super slick pixel art. I'm also proud to announce that Terra Nova was featured at PAX South, and it was very well received.
                    </p>
                </div>



            {/* Mini NavBar */}
                <div className="row">
                    <div className="navbar mx-auto col-sm-6 text-center px-0 MiniMainNavbar">
                        <div className="col-sm-3">
                            <Link to="/" className=".currentLink">
                                <h3>Story</h3>
                            </Link>
                        </div>

                        <div className="col-sm-3">
                            <Link to="/gameplayfeatures">
                                <h3>Gameplay Features</h3>
                            </Link>
                        </div>

                        <div className="col-sm-3">
                            <Link to="/dev">
                                <h3>The Dev Team</h3>
                            </Link>
                        </div>
                    </div>
                </div>


                {/* Router About Mimi-Menu is here to fit with the SideNav layout*/}
                
                    <Routes>
                        <Route path="/" element={                        
                                <Story />                    
                        } />
                         <Route path="gameplayfeatures" element={
                            <GameplayFeatures />
                        } />
                         <Route path="dev" element={
                            <TheDevTeam />
                        } />
                    </Routes>

                    {/* <Routes>
                        <Route path="/gameplayfeatures" element={
                            <GameplayFeatures />
                        } />
                    </Routes>

                    <Routes>
                        <Route path="/dev" element={
                            <TheDevTeam />
                        } />
                    </Routes> */}



                {/* Story */}
                    {/* <div className="col-sm-12 text-center">
                        <img className="" src={StoryImage} alt="StoryImage" />
                    </div>
                    
                    <div className="About mx-auto col-sm-6">
                        <p>
                            A empty planet lies in a forgotten sector of space. Eight sibling gods visit this planet and named it "Nova" after their mother. These gods then brought life, magic and order to the planet.  Over time, a civilization formed under the guidance of the eight gods, and the people all worshipped them as the "Holy Eight". After centuries of watching over their creations, the Holy Eight were pleased with their work and departed, leaving the people of Nova to their own fate. Millenia have passed since then, and in the present time, an ancient artifact of unknown origin is found in a mineshaft, what will its discovery spell for the denizens of Nova?
                        </p>
                    </div> */}



                {/* Gameplay and Features */}
                    {/* <div className="col-sm-12 text-center">
                        <img className="" src={GameplayandFeaturesImage} alt="GameplayandFeaturesImage" />
                    </div>



                    <div className="About mx-auto col-sm-6">
                        <h1> Dynamic Gameplay</h1>
                    </div>
                    
                    <div className="col-sm-12 text-center">
                        <img className="" src={DynamicGraphicsImage} alt="DynamicGraphicsImage" />
                    </div>
                    <div className="About col-sm-12 mx-auto text-center">
                        <p>Freely switch between 8-bit & 16-bit graphics and sounds in real-time.</p>
                    </div>



                    <div className="About mx-auto col-sm-6">
                        <h1> Dynamic Battle System</h1>
                    </div>
                    
                    <div className="col-sm-12 text-center">
                        <img className="" src={DynamicBattleSystemImage} alt="DynamicBattleSystemImage" />
                    </div>
                    <div className="About col-sm-12 mx-auto text-center">
                        <p>Choose to play in Turn-Based or Action-Based battle styles.</p>
                    </div>



                    <div className="row">
                        <div className="About mx-auto col-sm-6">
                            <h1>Palette Editor</h1>
                        </div>
                        
                        <div className="col-sm-12 text-center">
                            <img className="" src={PaletteEditorImage} alt="PaletteEditorImage" />
                        </div>
                        <div className="About col-sm-6 mx-auto text-center">
                            <p>Have you ever wanted a knight with blue hair and golden armor, or an entire party decked out in black and silver? No problem!</p>
                        </div>
                    </div>




                    <div className="row">
                        <div className="About mx-auto col-sm-6">
                            <h1>Dual Scenario System</h1>
                        </div>
                        
                        <div className="col-sm-12 text-center">
                            <img className="" src={DualScenarioImage} alt="DualScenarioImage" />
                        </div>
                        <div className="About col-sm-6 mx-auto text-center">
                            <p>Choose to play through an engrossing 20-30 hour story, or a 7-10 hour "Gaiden" mode that is lighter on story.</p>
                        </div>
                    </div>



                    <div className="row">
                        <div className="About mx-auto col-sm-6">
                            <h1>Class Change System</h1>
                        </div>
                        
                        <div className="col-sm-12 text-center">
                            <img className="" src={ClassChangeImage} alt="ClassChangeImage" />
                        </div>
                        <div className="About col-sm-6 mx-auto text-center">
                            <p>30+ character classes to choose from with hundreds of spells and abilities.</p>
                        </div>
                    </div>



                    <div className="row">
                        <div className="About mx-auto col-sm-6">
                            <h1>Monsters Galore</h1>
                        </div>
                        
                        <div className="col-sm-12 text-center">
                            <img className="" src={MonstersGaloreImage} alt="MonstersGaloreImage" />
                        </div>
                        <div className="About col-sm-6 mx-auto text-center">
                            <p>The game will feature hundreds of monsters to face, each with mutiple items to steal or loot.</p>
                        </div>
                    </div>



                    <div className="row">
                        <div className="About mx-auto col-sm-6">
                            <h1>Graphics Filters</h1>
                        </div>
                        
                        <div className="col-sm-12 text-center">
                            <img className="" src={GraphicsFiltersImage} alt="GraphicsFiltersImage" />
                        </div>
                        <div className="About col-sm-6 mx-auto text-center">
                            <p>CRT and LCD graphics filters can be applied or switched off at any time</p>
                        </div>
                    </div> */}
                
        </div>
    )
}//end About function


export default About;