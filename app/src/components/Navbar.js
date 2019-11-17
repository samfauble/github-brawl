import React from 'react'

function Navbar() {
    const navbarItems = ["All", "Javascript", "Ruby", "Python", "Java", "CSS"]
    return (
        <React.Fragment>
            <h1>Navigation</h1>
            <ul id="navList">
            {navbarItems.map((item)=>(
                <li className="navItem" key={item}>
                    <button className="clearButton navLink">
                        {item}
                    </button>
                </li>
            ))} 
            </ul>
        </React.Fragment>
    )
}

export default Navbar
