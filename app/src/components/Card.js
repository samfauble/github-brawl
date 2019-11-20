import React from 'react'
import { ThemeConsumer } from '../contexts/theme'

function Card({header, subheader, avatar, href, name, children}) {
    return (
        <ThemeConsumer>
            {({theme})=>(
                <div className={`repo bg-${theme}`}>
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
            )}

        </ThemeConsumer>
    )
}

export default Card
