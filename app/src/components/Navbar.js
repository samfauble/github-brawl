import React from 'react'
import PropTypes from "prop-types"
import {fetchRepos} from "../util/api"

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

NavContent.propTypes = {
    lang: PropTypes.string.isRequired,
    callback: PropTypes.func.isRequired
}

class Navbar extends React.Component{
    
    constructor(props) {
        super(props)
    
        this.state = {
            language: "All",
            repos: null,
            error: null 
        }
        this.navSelector=this.navSelector.bind(this);
        this.isLoading = this.isLoading.bind(this)
    }
    
     navSelector(lang){                                                 {/*Given the chosen language, set the new language, refresh errors and repos, and fetch repos for given language*/}
        this.setState({language: lang, repos: null, error: null },
            ()=>{console.log(this.state.language)})
        
        fetchRepos(lang).then((repos)=>this.setState({
            repos,
            error: null
        }))
        .catch(()=>{
            console.warn("Error fetching repos", error)

            this.setState({error:"There was an error in fetching the repositoriess"})
        })
    }


    isLoading(){
        return this.state.repos === null && this.state.error===null
    }

    render(){
        const [lang, repos, error]=this.state
        return (
        <React.Fragment>
            <NavContent 
            lang={this.state.language} 
            callback={this.navSelector} />
            {this.isLoading() && <p>LOADING</p>}
        </React.Fragment>
        )
    }

}

export default Navbar
