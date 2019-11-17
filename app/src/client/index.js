import "./style/index.scss"
import React from "react"
import ReactDOM from "react-dom"
import Navbar from "../components/Navbar"


class App extends React.Component {
    render() {
        return (
            <div className="container">
               <Navbar /> 
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)

