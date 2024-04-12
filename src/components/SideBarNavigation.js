//React imports
import React from 'react'

//Image imports
import twittericon from '../components/images/SocialIcons/twittericon.png'
import youtubeicon from '../components/images/SocialIcons/youtubeicon.png'
import discordicon from '../components/images/SocialIcons/discordicon.png'
import steamicon from '../components/images/SocialIcons/steamicon.png'
import profilepicture from '../components/images/AndrewProfile/devandrewpfp.png'




function SideBarNavigation() {
    return(
        <div class="col-sm-2 px-0">
            <NavigationMain />
        </div>

    )
}//end Header function



function NavigationMain() {
    return(
            <div class="col-sm-2 d-flex min-vh-100 NavigationMain">
                <div className="navbarcontainer container text-center align-self-center">
                <div class="align-self-center">
                    <img src={profilepicture} alt="profileimage" width="60" height="60" class="rounded"/>
                </div>
                <div className="row">
                    <div className="AndrewName col-sm-12 justify-content-center">
                        <p className='AndrewParagraph'>Andrew Stamps</p>
                    </div>
                </div>


                    <div className="row">
                        <div className="PixelIcons d-flex col-sm-12 align-self-center">
                            <div className="col-sm-3 align-self-center">
                            <a href="https://twitter.com/terranovajrpg" class="nav-link">
                                <img className="img-fluid" src={twittericon} alt="Twitter" width="50" height="50" />
                            </a>
                            </div>
                            
                            <div className="col-sm-3 align-self-center">
                            <a href="https://www.youtube.com/@andrew_stamps" class="nav-link">
                                <img className="img-fluid" src={youtubeicon} alt="Youtube" width="50" height="50" />
                            </a>
                            </div>
                            
                            <div className="col-sm-3 align-self-center">
                            <a href="#" class="nav-link">
                                <img className="img-fluid" src={discordicon} alt="Discord" width="50" height="50" />
                            </a>
                            </div>
                            
                            <div className="col-sm-3 align-self-center">
                            <a href="#" class="nav-link">
                                <img className="img-fluid" src={steamicon} alt="Steam" width="50" height="50" />
                            </a>
                            </div>
                            
                        </div>
                    </div>
            </div>
                </div>

    )
}



export default SideBarNavigation