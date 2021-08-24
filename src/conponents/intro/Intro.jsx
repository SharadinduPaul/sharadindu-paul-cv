import React, {useState} from 'react'
import './intro.css'
import '../../App.css'
import mypic from '../../assets/mypic.png'

export default function Intro({setMenuOpen}) {
    const [dropped , setDropped] = useState(1)
    setTimeout(() => {
        changeDrop()
    }, 3500);
    const changeDrop = () =>{
        if(dropped<4){
            setDropped(dropped+1)
        }
        else{
            setDropped(1)
        }
    }

    return (
        <div className="intro" id="intro" onClick={()=>setMenuOpen(false)}>
            <div className="sideHead">Introduction</div>
            <div className="left">
                <img className="image" src={mypic} alt="My picture" />
            </div>            
            <div className="right">
                <p>
                    Hi
                    <br/>
                    I am <span>Sharadindu Paul</span> 
                    <br />
                    <br />
                    <br />
                    I am a 
                    <div className={"drop " +(dropped===1 ? "active" : "inactive")}>Designer</div>
                    <div className={"drop " +(dropped===2 ? "active" : "inactive")}>Programer</div>
                    <div className={"drop " +(dropped===3 ? "active" : "inactive")}>Editor</div>
                    <div className={"drop " +(dropped===4 ? "active" : "inactive")}>Freelancer</div>
                </p>
                
            </div>            
        </div>
    )
}
