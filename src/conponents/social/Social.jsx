import React from 'react'
import './social.css'

export default function Social({menuOpen}) {
    return (
        <div className="social ">
            <div className={"s1 "+(menuOpen ? "socialActive" : "socialInactive")}></div>
            <div className={"facebook " + (menuOpen ? "socialActive" : "socialInactive")}><a href="https://www.facebook.com/sharadindu.paul007" target="_blank"><i class="fab fa-facebook"></i></a></div>
            <div className={"whatsapp "+(menuOpen ? "socialActive" : "socialInactive")}><a href="https://wa.link/ni5u3l" target="_blank"><i class="fab fa-whatsapp"></i></a></div>
            <div className={"instagram "+(menuOpen ? "socialActive" : "socialInactive")}><a href="https://www.instagram.com/sharadindu_paul/" target="_blank"><i class="fab fa-instagram"></i></a></div>
            <div className={"s2 "+(menuOpen ? "socialActive" : "socialInactive")}></div>
        </div>
    )
}
