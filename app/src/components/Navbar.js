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

function ReposGrid({repos}) {
    return(
    <ul className="grid spaceAround">
        {repos.map((repo, index)=>{
        const {name, owner, html_url, stargazers_count, forks, open_issues} = repo
        const {login, avatar_url} = owner
        
        return (
            <li key={html_url} className="repo bg-light">
                <h4 className="header-lg centerText">
                    `#{index+1}`
                </h4>
                <img 
                    className="avatar"
                    src={avatar_url}
                    alt={`Avatar for ${login}`}/>
                <h2 className="centerText">
                    <a className="link" href={html_url}> {login} </a>
                </h2>
            </li>
        )
            
        })}
    </ul>
    )
}

class Navbar extends React.Component{
    
    constructor(props) {
        super(props)
    
        this.state = {
            language: "All",
            repos: {},
            error: null 
        }
        this.navSelector=this.navSelector.bind(this);
        this.isLoading = this.isLoading.bind(this)
    }

    
     navSelector(lang){                                                 {/*Given the chosen language, set the new language, refresh errors and repos, and fetch repos for given language*/}
        this.setState({language: lang, error: null },
            ()=>{console.log(this.state.language)})

        if(!this.state.repos[lang]){
            fetchRepos(lang).then((data)=>{this.setState(({repos})=>({
                repos: {
                    ...repos,
                    [lang]: data
                }
            }))
        })
            .catch(()=>{
                console.warn("Error fetching repos", error)
    
                this.setState({error:"There was an error in fetching the repositoriess"})
            })
        }
    }

    componentDidMount(){
        this.navSelector(this.state.language)
    }

    isLoading(){
            const {language, repos, error}=this.state
            return !repos[language] && error===null 
    }

    render(){
        const {language, repos, error}=this.state
        return (
        <React.Fragment>
            <NavContent 
            lang={this.state.language} 
            callback={this.navSelector} />
            {this.isLoading() && <p>LOADING</p>}
            {error && <p>error</p>}
            {repos[language] && <ReposGrid repos={repos[language]} />}
        </React.Fragment>
        )
    }

}

export default Navbar
