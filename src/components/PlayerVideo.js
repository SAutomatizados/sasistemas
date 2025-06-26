import React from "react"
import './video.css'
import myVideo from '../assets/intro.mp4'


export default function PlayerVideos(){
    return(
        <div>
            

            <div className="video_wrap">
            <video src={myVideo} autoPlay muted loop></video>
            
           

        </div>
        <div className="card">
        
        </div>
            
        </div>
      
    )
}