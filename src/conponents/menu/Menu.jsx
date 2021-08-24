import React from 'react'
import { Link } from "react-scroll";
import './menu.css'

export default function Menu({menuOpen}) {

    return (
        <div className={"sideMenu " + (menuOpen ? "sideMenuActive": "sideMenuInactive")}>           
            <button>
                <Link
                    activeClass="active"
                    to="intro"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >&lt;intro/&gt;</Link>
            </button>
            <button>
                <Link
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={600}
                >&lt;skills/&gt;</Link>
            </button>
            <button>
                <Link
                    activeClass="active"
                    to="exp"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={600}
                >&lt;experience/&gt;</Link>
            </button>
            <button>
                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >&lt;contact/&gt;</Link>
            </button>
        </div>
    )
}
