import "./style/index.scss"
import React from "react"
import ReactDOM from "react-dom"

export class App extends Component {

    render() {
        return (
            <div>
                Hi!
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    getElementById("root")
)
