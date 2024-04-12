//React imports
import React from "react"

//Import images
import GameplayandFeaturesImage from '../components/images/infoimages/GameplayandFeatures.png'
import DynamicGraphicsImage from '../components/images/infoimages/8bit16bitgraphics.gif'
import DynamicBattleSystemImage from '../components/images/infoimages/dynamicbattlesystem.gif'
import PaletteEditorImage from '../components/images/infoimages/Palette.png'
import DualScenarioImage from '../components/images/infoimages/DualScenarioSystem.png'
import ClassChangeImage from '../components/images/infoimages/ClassChangeSystem.png'
import MonstersGaloreImage from '../components/images/infoimages/MonstersGalore.png'
import GraphicsFiltersImage from '../components/images/infoimages/GraphicsFilters.png'



function GameplayFeatures(){
    return(
        <>
            {/* Gameplay and Features */}
                <div className="col-sm-12 text-center">
                    <img className="" src={GameplayandFeaturesImage} alt="GameplayandFeaturesImage" />
                </div>



                <div className="GameplayFeatures mx-auto col-sm-6">
                    <h1> Dynamic Gameplay</h1>
                </div>
                
                <div className="col-sm-12 text-center">
                    <img className="" src={DynamicGraphicsImage} alt="DynamicGraphicsImage" />
                </div>
                <div className="GameplayFeaturesP col-sm-12 mx-auto text-center">
                    <p>Freely switch between 8-bit & 16-bit graphics and sounds in real-time.</p>
                </div>



                <div className="GameplayFeatures mx-auto col-sm-6">
                    <h1> Dynamic Battle System</h1>
                </div>
                
                <div className="col-sm-12 text-center">
                    <img className="" src={DynamicBattleSystemImage} alt="DynamicBattleSystemImage" />
                </div>
                <div className="GameplayFeaturesP col-sm-12 mx-auto text-center">
                    <p>Choose to play in Turn-Based or Action-Based battle styles.</p>
                </div>



                <div className="row">
                    <div className="GameplayFeatures mx-auto col-sm-6">
                        <h1>Palette Editor</h1>
                    </div>
                    
                    <div className="col-sm-12 text-center">
                        <img className="" src={PaletteEditorImage} alt="PaletteEditorImage" />
                    </div>
                    <div className="GameplayFeaturesP col-sm-6 mx-auto text-center">
                        <p>Have you ever wanted a knight with blue hair and golden armor, or an entire party decked out in black and silver? No problem!</p>
                    </div>
                </div>




                <div className="row">
                    <div className="GameplayFeatures mx-auto col-sm-6">
                        <h1>Dual Scenario System</h1>
                    </div>
                    
                    <div className="col-sm-12 text-center">
                        <img className="" src={DualScenarioImage} alt="DualScenarioImage" />
                    </div>
                    <div className="GameplayFeaturesP col-sm-6 mx-auto text-center">
                        <p>Choose to play through an engrossing 20-30 hour story, or a 7-10 hour "Gaiden" mode that is lighter on story.</p>
                    </div>
                </div>



                <div className="row">
                    <div className="GameplayFeatures mx-auto col-sm-6">
                        <h1>Class Change System</h1>
                    </div>
                    
                    <div className="col-sm-12 text-center">
                        <img className="" src={ClassChangeImage} alt="ClassChangeImage" />
                    </div>
                    <div className="GameplayFeaturesP col-sm-6 mx-auto text-center">
                        <p>30+ character classes to choose from with hundreds of spells and abilities.</p>
                    </div>
                </div>



                <div className="row">
                    <div className="GameplayFeatures mx-auto col-sm-6">
                        <h1>Monsters Galore</h1>
                    </div>
                    
                    <div className="col-sm-12 text-center">
                        <img className="" src={MonstersGaloreImage} alt="MonstersGaloreImage" />
                    </div>
                    <div className="GameplayFeaturesP col-sm-6 mx-auto text-center">
                        <p>The game will feature hundreds of monsters to face, each with mutiple items to steal or loot.</p>
                    </div>
                </div>



                <div className="row">
                    <div className="GameplayFeatures mx-auto col-sm-6">
                        <h1>Graphics Filters</h1>
                    </div>
                    
                    <div className="col-sm-12 text-center">
                        <img className="" src={GraphicsFiltersImage} alt="GraphicsFiltersImage" />
                    </div>
                    <div className="GameplayFeaturesPEnd col-sm-6 mx-auto text-center">
                        <p>CRT and LCD graphics filters can be applied or switched off at any time</p>
                    </div>
                </div>
        </>
    )
}



export default GameplayFeatures;