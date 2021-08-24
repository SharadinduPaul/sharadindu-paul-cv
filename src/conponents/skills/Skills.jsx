import React, {useState} from 'react'
import './skills.css'
import '../../App.css'

export default function Skills({setMenuOpen}) {
    const [btnCount , setBtnCount] = useState(2)
    return (
        <div className="skills" id="skills" onClick={()=>setMenuOpen(false)}>
            <div className="sideHead">Skills</div>
            <div className="head-btn">
                <button className={"btn " + (btnCount===1 && "active-btn")} onClick={()=>setBtnCount(1)}>designing</button>
                <button className={"btn " + (btnCount===2 && "active-btn")} onClick={()=>setBtnCount(2)}>programing</button>
                <button className={"btn " + (btnCount===3 && "active-btn")} onClick={()=>setBtnCount(3)}>soft-skills</button>
            </div>   
            <div className="content">
                <div className={"designing " + (btnCount===1 && "active-content")}>
                    <div>
                        <h3>photoshop</h3>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star star-checked"></i>
                    </div>
                    <div>
                        <h3>illustrator</h3>
                        <i class="fas fa-star  star-checked"></i>
                        <i class="fas fa-star  star-checked"></i>
                        <i class="fas fa-star  star-checked"></i>
                        <i class="fas fa-star  star-checked"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <div>
                        <h3>premiere pro</h3>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <div>
                        <h3>ui designing</h3>
                        <i class="fas fa-star  star-checked"></i>
                        <i class="fas fa-star  star-checked"></i>
                        <i class="fas fa-star  star-checked"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <div>
                        <h3>after effects</h3>
                        <i class="fas fa-star  star-checked"></i>
                        <i class="fas fa-star  star-checked"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
                <div className={"programing " + (btnCount===2 && "active-content")}>
                    <div>
                        <h3>css</h3>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star star-checked"></i>
                    </div>
                    <div>
                        <h3>javascript</h3>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <div>
                        <h3>react js</h3>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <div>
                        <h3>python</h3>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <div>
                        <h3>react native</h3>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <div>
                        <h3>c/c++</h3>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star "></i>
                        <i class="fas fa-star "></i>
                    </div>
                    <div>
                        <h3>php</h3>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <div>
                        <h3>kotlin</h3>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
                <div className={"softskills " + (btnCount===3 && "active-content")}>
                    <div>
                        <h3>leadership</h3>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star star-checked"></i>
                    </div>
                    <div>
                        <h3>learing ability</h3>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star star-checked"></i>
                    </div>
                    <div>
                        <h3>creativity</h3>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <div>
                        <h3>technicallity</h3>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <div>
                        <h3>logical ability</h3>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <div>
                        <h3>communication</h3>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star star-checked"></i>
                        <i class="fas fa-star"></i>
                    </div>

                </div>
            </div>

            <div className="commentTxt">I am learning everyday. So, by the time you are reading this, I have already upgraded.</div>
        </div>
    )
}
