import React from 'react'

function Card({header, subheader, avatar, href, name, children}) {
    return (
        <div className="repo bg-light">
            <h4 className="header-lg centerText">
                {header}
            </h4>
            <img 
                className="avatar"
                src={avatar}
                alt={`Profile avatar of ${name}`} />
            {subheader && ( 
                <h4 className="centerText">
                    {subheader}
                </h4>)}
            <h2 className="centerText">
                <a className="link" href={href}>
                    {name}
                </a>
            </h2>
            {children}
        </div>
    )
}

export default Card
