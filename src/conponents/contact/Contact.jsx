import React  from 'react'
import './contact.css'
import '../../App.css'

export default function Contact({setMenuOpen, pageoffsetY}) {

    return (
        <div className="contact " id="contact" onClick={()=>setMenuOpen(false)}>
            <div className="sideHead">Contact Me</div>
            <div>
                <i class="far fa-comments"></i>
            </div>
            <form action="https://formsubmit.co/sharadindu.paul007@gmail.com" method="POST">
                <h2>Liked my CV?</h2>
                <input type="text" name="name" placeholder="Your Name" required/>
                <input type="email" name="email" placeholder="Your Email" required/>
                <textarea type="textarea" name="Message" placeholder="Your Message for me" rows="4" required/>
                <input type="hidden" name="_next" value="https://thankyouforresponding.netlify.app" />

                <input type="hidden" name="_subject" value="New CV submission!"/>
                <input type="hidden" name="_cc" value="sharadindupaul.it2020@nsec.ac.in"/>
                <input type="hidden" name="_template" value="table"/>
                <input type="hidden" name="_autoresponse" value="Hii I am Sharadindu. Thanks for responding to my CV. I will contact you soon"/>
                <button type="submit" formtarget="_blank">Send</button>
                <h2>Send your regards!</h2>
            </form>
            <div className="commentTxt" style={{bottom: "-292vh", position: "absolute"}}>Your feedback is valuable, even if you didn't like it, let me know why.</div>           
        </div>
    )
}
