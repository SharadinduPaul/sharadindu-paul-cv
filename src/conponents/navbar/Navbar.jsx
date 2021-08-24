import React, {useState} from 'react'
import resume from '../../assets/resume.pdf'
import './navbar.css'

export default function Navbar({menuOpen, setMenuOpen}) {
    const [numCopied, setNumCopied] = useState(false)
    const [emailCopied, setEmailCopied] = useState(false)
    const [downloading, setDownloading] = useState(false)

    const numcp = () =>{
        navigator.clipboard.writeText("8145005641")
        setNumCopied(true)
        setTimeout(() => {
            setNumCopied(false)
        }, 3000);
    }
    const emailcp = () =>{
        navigator.clipboard.writeText("sharadindu.paul007@gmail.com")
        setEmailCopied(true)
        setTimeout(() => {
            setEmailCopied(false)
        }, 3000);
    }
    const download = () =>{
        setDownloading(true)
        setTimeout(() => {
            setDownloading(false)
        }, 3000);
    }

    return (
        <nav className="navbar">
            <div className="leftnav">
                <h3>
                    my cv
                </h3>
                <h4  onClick={numcp}>
                    <i class="fas fa-mobile-alt"></i>
                    +91 8145 00 5641
                    <div className={"nummail "+(numCopied && "copied")}>Number Copied</div>
                </h4>
                <h4 onClick={emailcp}>
                    <i class="fas fa-envelope"></i>
                    sharadindu.paul007@gmail.com
                    <div className={"nummail "+(emailCopied && "copied")}>Email Copied</div>
                </h4>
            </div>
            <div className={"rightnav " + (menuOpen && "navActive")}>
                <a href={resume} download="Sharadindu-Paul-Resume" onClick={download}>
                    <i class="fas fa-file-download"></i>
                    Download Resume
                    <div className={"nummail downloading "+(downloading && "copied")}>Downloading</div>
                </a>
                <i class={"fas "+ (menuOpen ? "fa-times":"fa-bars")} onClick={()=> setMenuOpen(!menuOpen)}></i>
            </div>
        </nav>
    )
}

