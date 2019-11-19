import React from 'react'
import {brawl} from "../util/api"
import {FaCompass, FaBriefcase, FaUsers, FaUserFriends, FaCode, FaUser} from "react-icons/fa"
import Card from "../components/Card"
import Loading from "../components/Loading"





function ProfileList({profile}) {
    return(
        <ul className="card-list">
            <li>
                 <FaUser color="purple" size={22} />
                {profile.name}
            </li>
            {profile.location && (
                <li>
                    <FaCompass color="purple" size={22} />
                    {profile.location}
                </li>
            )}
            {profile.company && (
                <li>
                    <FaBriefcase color="purple" size={22} />
                    {profile.company}
                </li>
            )}
            <li>
                <FaUsers color="purple" size={22} />
                {profile.followers.toLocaleString()} followers
            </li>
            <li>
                <FaUserFriends color="purple" size={22} />
                {profile.following.toLocaleString()} following
            </li>
        </ul>
    )
}



export class Results extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
             winner: null,
             loser: null,
             error: null,
             loading: true
        }
    }
    

    componentDidMount() {
        const {playerOne, playerTwo, onReset} = this.props
        brawl([playerOne, playerTwo])
        .then((players)=> {
            this.setState({
                winner: players[0],
                loser: players[1],
                error: null,
                loading: false
            })
        }).catch(({message}) => {
            this.setState({
                error: message,
                loading: false
            })
        })
    }

    render() {
        const {winner, loser, error, loading} = this.state
        if(loading===true){
            return <Loading text="Fetching Data" />
        }

        if(error){
            return <p className="centerText error">{error}</p>
        }
        return (
            <React.Fragment>
                <div className="grid spaceAround container-sm">
                    <Card 
                    header= {winner.score===loser.score ? "Tie" : "Winner"}
                    subheader= {`Score: ${winner.score.toLocaleString()}`}
                    avatar= {winner.profile.avatar_url}
                    href= {winner.profile.html_url}
                    name= {winner.profile.login}
                    >
                        <ProfileList profile={winner.profile} />
                    </Card> 
                    <Card
                        header= {winner.score===loser.score ? "Tie" : "Loser"}
                        subheader= {`Score: ${loser.score.toLocaleString()}`}
                        avatar= {loser.profile.avatar_url}
                        href= {loser.profile.html_url}
                        name= {loser.profile.login}>

                            <ProfileList profile={loser.profile} />
                        </Card>
                </div>
                <button
                    className="button buttonDark buttonSpace"
                    onClick={this.props.onReset}>
                        Reset
                </button>
            </React.Fragment>
        )
    }
}

export default Results
