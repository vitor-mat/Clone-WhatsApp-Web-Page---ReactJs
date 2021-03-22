import React from 'react'
import TutorialVideoImage from '../../images/main_components_images/tutorial_video_image.jpeg'
import "../../style/main_components_style/tutorial_video.css"

export default () => {
    return(
    <div id="tutorial-video-div">
        <img id="tutorial-video-image" src={TutorialVideoImage}/>
    </div>
    )
}