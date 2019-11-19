import React from 'react'
import {brawl} from "../util/api"

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
        const {playerOne, playerTwo} = this.props
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
        return (
            <div>
                Results
                <pre>{JSON.stringify(this.state, null, 2)}</pre>
            </div>
        )
    }
}

export default Results
