import React from 'react'

function NavContent ({lang, callback}){
    const navbarItems = ["All", "Javascript", "Ruby", "Python", "Java", "CSS"]
    return (
        <div>
            <h1>Navigation</h1>
            <ul id="navList">
            {navbarItems.map((item)=>(
                <li className="navItem" key={item}>
                    <button 
                    className="clearButton navLink"
                    onClick={()=>callback(item)}
                    style={item==={lang} ? {color: "purple"} : {color: "black"}}> 
                        {item}
                    </button>
                </li>
            ))} 
            </ul>
        </div>
    )
}

class Navbar extends React.Component{
    
    constructor(props) {
        super(props)
    
        this.state = {
            language: "All", 
        }
        this.navSelector=this.navSelector.bind(this);
    }
    
     navSelector(lang){
        this.setState({language: lang},()=>{console.log(this.state.language)})
    }

    render(){
        return (
        <NavContent 
        lang={this.state.language} 
        callback={this.navSelector} />
        )
    }

}

export default Navbar
