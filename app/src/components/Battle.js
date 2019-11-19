import React from 'react'
import {FaUserFriends, FaFighterJet, FaTrophy} from "react-icons/fa"

function Instructions() {
    return(
        <div className="instructionsContainer">
            <h1 className= "centerText header-lg">
            INSTRUCTIONS
            </h1>
            <ol className="container-sm grid centerText battleInstructions">
                <li>
                    <h3 className="header-sm">Enter two GitHub users</h3>
                    <FaUserFriends className="bg-light" color="blue" size={140}/>
                </li>
                <li>
                    <h3 className="header-sm">Brawl</h3>
                    <FaFighterJet className="bg-light" color="blue" size={140}/>
                </li>
                <li>
                    <h3 className="header-sm">See the winners</h3>
                    <FaTrophy className="bg-light" color="blue" size={140}/>
                </li>
            </ol>
        </div>
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
            <form className="column player" onSubmit={this.handleSubmit}>
                <label htmlFor="username" className="playerLabel">
                    {this.props.label}
                </label>
                <div className="row playerInputs">
                    <input
                        id="username"
                        className="inputLight"
                        placeholder="github username"
                        autoComplete="off"
                        value={this.state.username}
                        onChange={this.playerChange}  
                        type="text" />
                    <button 
                        type="submit" 
                        className="button buttonDark" 
                        disabled={!this.state.username}>
                        Submit
                </button>
                </div>
            </form>
        )
    }
}

export class Battle extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             playerOne: null,
             playerTwo: null
        }
    }
    

    render() {
      
        return (
            <React.Fragment>
                <Instructions />
                <Players 
                label="Player" 
                onSubmit={(value)=>{console.log(value)}} />
            </React.Fragment>
        )
    }
}

export default Battle
