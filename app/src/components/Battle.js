import React from 'react'
import {FaUserFriends, FaFighterJet, FaTrophy, FaTimesCircle} from "react-icons/fa"
import Results from "../components/Results"
import {ThemeConsumer} from "../contexts/theme"
import {Link} from "react-router-dom"

function Instructions() {
    return(
        <ThemeConsumer>
            {({theme})=>(
                <div className="instructionsContainer">
                    <h1 className= "centerText header-lg">
                    INSTRUCTIONS
                    </h1>
                    <ol className="container-sm grid centerText battleInstructions">
                        <li>
                            <h3 className="header-sm">Enter two GitHub users</h3>
                            <FaUserFriends className={`bg-${theme}`} color="rgb(226, 79, 35)" size={140}/>
                        </li>
                        <li>
                            <h3 className="header-sm">Brawl</h3>
                            <FaFighterJet className={`bg-${theme}`} color="rgb(69, 92, 63)" size={140}/>
                        </li>
                        <li>
                            <h3 className="header-sm">See the winners</h3>
                            <FaTrophy className={`bg-${theme}`} color="rgb(159, 18, 200)" size={140}/>
                        </li>
                    </ol>
                </div>
            )}
        </ThemeConsumer>
    )
}

class Players extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: ""
        }
        this.playerChange = this.playerChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()

        this.props.onSubmit(this.state.username)
    }

    playerChange(e){
        this.setState({
            username: e.target.value
        })
    }
    
    render() {
        return (
            <ThemeConsumer>
                {({theme})=>(
                     <form className="column player" onSubmit={this.handleSubmit}>
                     <label htmlFor="username" className="playerLabel">
                         {this.props.label}
                     </label>
                     <div className="row playerInputs">
                         <input
                             id="username"
                             className={`input${theme}`}
                             placeholder="github username"
                             autoComplete="off"
                             value={this.state.username}
                             onChange={this.playerChange}  
                             type="text" />
                         <button 
                             type="submit" 
                             className={`button ${theme==="dark" ? "buttonlight" : "buttondark"}`}
                             disabled={!this.state.username}>
                             Submit
                     </button>
                     </div>
                 </form>
                )}
            </ThemeConsumer>
        )
    }
}

function PlayerPreview ({username, onReset, label}) {
    return (
        <ThemeConsumer>
            {({theme})=>(
                <div className="column player">
                    <h3 className="playerLabel">{label}</h3>
                    <div className={`row bg-${theme}`}>
                        <div className="playerInfo">
                            <img 
                            className="avatarSmall"
                            src= {`http://github.com/${username}.png?size=200`}
                            alt={`Image for ${username}`} />
                            <a
                            href={`http://github.com/${username}`}
                            className="link">
                                {username}
                            </a>
                        </div>
                        <button 
                        className="clearButton flex-center"
                        onClick={onReset}>
                            <FaTimesCircle color="red" size={26} />
                        </button>
                    </div>
                </div>
            )}

        </ThemeConsumer>
    )
}

export class Battle extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             playerOne: null,
             playerTwo: null,
        }
        this.handleSubmit= this.handleSubmit.bind(this)
        this.handleReset= this.handleReset.bind(this)
    }
    
    handleSubmit(id, username){
        this.setState({
            [id]: username
        })
    }

    handleReset(id) {
        this.setState({
            [id]: null
        })
    }

    render() {
        const {playerOne, playerTwo} = this.state

        return (
            <React.Fragment>
                <Instructions />
                <div className="playersContainer">
                    <h1 className="centerText header-lg">Players</h1>
                </div>
                <div className="row space-around">
                    {playerOne===null ? (
                        <Players 
                            label="Player One"
                            onSubmit={(username)=>{this.handleSubmit("playerOne", username)}} />
                    ) : (
                        (
                        <PlayerPreview 
                            username={playerOne}
                            label= "Player One" 
                            onReset= {()=> this.handleReset("playerOne")}/>
                        )
                    )}
                    
                    {playerTwo===null ? (
                        <Players 
                            label="Player Two"
                            onSubmit={(username) =>{this.handleSubmit("playerTwo", username)}} />
                    ) : (
                        <PlayerPreview 
                            username={playerTwo}
                            label= "Player Two" 
                            onReset= {()=> this.handleReset("playerTwo")}/>
                    )}
                </div>
                {playerOne && playerTwo && (
                    <Link
                    className="button buttondark buttonSpace"
                    to={{
                        pathname: "/battle/results",
                        search: `?playerOne=${playerOne}&playerTwo=${playerTwo}`
                    }}>
                        Battle
                    </Link>
                )}
            </React.Fragment>
        )
    }
}

export default Battle
