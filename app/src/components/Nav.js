import React from 'react'
import {ThemeConsumer} from "../contexts/theme"
import {NavLink} from "react-router-dom"


const activeStyle = {
    color: "rgb(187, 46, 31)"
}

export function Nav() {
    return (
        <ThemeConsumer>
            {({theme, toggleTheme}) => (
                <nav className="row space-between">
                    <ul className="row nav">
                        <li>
                            <NavLink 
                            to="/"
                            exact 
                            className="navLink"
                            activeStyle={activeStyle}> 
                            Repositories </NavLink>
                        </li>
                        <li>
                            <NavLink 
                            to="/battle" 
                            exact
                            className="navLink" 
                            activeStyle={activeStyle}> 
                            Brawl 
                            </NavLink>
                        </li>
                    </ul>
                    <button
                    style={{fontSize: 30}}
                    className= "buttonClear"
                    onClick={toggleTheme}>

                        {theme==="light" ? "🌚" : "🌞" }

                    </button>
                </nav>
            )}
        </ThemeConsumer>
    )
}

export default Nav
