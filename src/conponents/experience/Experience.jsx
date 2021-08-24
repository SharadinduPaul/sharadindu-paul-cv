import React, {useState} from 'react'
import './experience.css'
import '../../App.css'

export default function Experience({setMenuOpen, pageoffsetY}) {
    const [proOpen, setProOpen] = useState(true)    
    return (
        <div className="exp" id="exp" onClick={()=>setMenuOpen(false)}>
            <div className="sideHead">Experience</div>
            <div className={"designer "  + (proOpen ? "desInactive" : "desActive")} > 
                <div className="desHead" onClick={()=>setProOpen(false)}> designer </div>                
                <div className="desContent"><i class="fas fa-pencil-alt"></i>
                I am a Freelance Graphics Designer and Editor, for the last 4 years with over 100 projects. Recently secured the 1st position in the Video Editing Competition and also in the Digital Poster Making Competition organized by Rotaract Club. I am also associated with 2 YouTube Channels as an editor.<br></br>
                Currently Learning SVG for the Web.<br></br>
                CheckOut my Artworks on Instagram: <a href="https://www.instagram.com/sayan_editing/?hl=en" target="_blank">@sayan_editing <i class="fas fa-external-link-alt"></i></a> </div>                
            </div>
            <div className={"programer "  + (proOpen ? "proActive" : "proInactive")} >
                <div className="proHead" onClick={()=>setProOpen(true)}>programer</div>                
                <div className="proContent"><i class="fas fa-laptop-code"></i>
                    I am a self-taught Programmer with plenty of knowledge but less hands-on experience. I Started Web Development when I was 16 and never stopped. I am a front-end/UI/UX developer with a compact knowledge of the backend. Started learning React a year ago and Currently learning React Native. I aspire to become a full-fledged Android developer by the next year. <br></br>
                    Check out a Vanilla JS project built by me from scratch : <a href="https://sharadindupaul.000webhostapp.com/index.html" target="_blank">sharadindupaul.000webhostapp.com <i class="fas fa-external-link-alt"></i></a> <br></br>This CV website is also made from scratch using React</div>                
            </div>
            <div className="commentTxt" style={{bottom: "-192vh", position: "absolute"}}>I would love to add Your Company in my experiences list</div>               
        </div>
    )
}
