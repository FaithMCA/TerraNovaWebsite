//React imports
import React from "react"

//Import image
import StoryImage from '../components/images/infoimages/Story.png'



function Story(){
    return(
        <>
            {/* Story */}
                <div className="col-sm-12 text-center">
                    <img className="" src={StoryImage} alt="StoryImage" />
                </div>
                    
                <div className="Story mx-auto col-sm-6">
                    <h4>The ancients have awakened...</h4>
                    <p>
                        An empty planet lies in a forgotten sector of space. Eight sibling gods visit this planet and named it "Nova" after their mother. These gods then brought life, magic and order to the planet.  Over time, a civilization formed under the guidance of the eight gods, and the people all worshipped them as the "Holy Eight". After centuries of watching over their creations, the Holy Eight were pleased with their work and departed, leaving the people of Nova to their own fate. Millenia have passed since then, and in the present time, an ancient artifact of unknown origin is found in a mineshaft, what will its discovery spell for the denizens of Nova?
                    </p>
                </div>
        </>
    )
}



export default Story;