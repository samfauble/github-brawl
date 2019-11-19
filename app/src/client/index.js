import "./style/index.scss"
import React from "react"
import ReactDOM from "react-dom"
import Navbar from "../components/Navbar"
import Battle from "../components/Battle"


class App extends React.Component {
    render() {
        return (
            <div className="container">
               <Battle /> 
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)

