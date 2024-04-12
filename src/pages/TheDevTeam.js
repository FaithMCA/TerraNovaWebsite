//React imports
import React from "react"

//Import image
import DevImage from '../components/images/infoimages/TheDevTeam.png'
import DevImage2 from '../components/images/infoimages/TheDevTeam2.png'



function TheDevTeam(){
    return(
        <>
            {/* The Dev Team */}
                <div className="col-sm-12 text-center">
                    <img className="" src={DevImage} alt="DevImage" />
                </div>
                    
                {/* <div className="About mx-auto col-sm-6">
                    <h1>About me </h1>
                </div> */}
                
                <div className="About mx-auto col-sm-6">
                    <p>Hello there, I'm Andrew Stamps, I'm a Computer Scientist and I've been programming videogames in some form or another since I was twelve years old. I have a deep love for gaming especially RPG's and Metroidvanias. I've spent time as a professional programmer for more than 12 years on a variety of projects for Georgia Pacific, IBM, and ORNL to name a few. Currently I'm teaching, completing a doctorial degree, and working on TerraNova.</p>
                    <p>
                    Terra Nova: Legend of the Runes, would be nowhere as good as it is or great as it will be without the help of others. These are the talented people who are making this game a reality, and I couldn't be more proud of all of their effort and commitment to my high standards and expectations for every line of code written, each pixel plotted, and every music note played. -Respect. I'd like to also give a shout-out to my students, who volunteered to test the engine during various stages of development.
                    </p>
                </div>

                <div className="TheDevTeam col-sm-12 text-center">
                    <img className="" src={DevImage2} alt="DevImage2" />
                </div>


        </>
    )
}



export default TheDevTeam;