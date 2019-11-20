import "./style/index.scss"
import React from "react"
import ReactDOM from "react-dom"
import Navbar from "../components/Navbar"
import Battle from "../components/Battle"
import {ThemeProvider} from "../contexts/theme"
import {Nav} from "../components/Nav"
import {BrowserRouter as Router, Route, Link} from "react-router-dom"

class App extends React.Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
           theme: "light",
           toggleTheme: ()=> {
               this.setState(({theme})=>({
                    theme: theme==="light" ? "dark" : "light"
               }))
           } 
        }
    }
    
    render() {
        return (
            <Router>
                <ThemeProvider value={this.state}>
                    <div className={this.state.theme}>
                        <div className="container">
                            <Nav />
                            <Route exact path="/" component={Navbar} />
                            <Route exact path="/battle" component={Battle} />  
                        </div>
                    </div>
                </ThemeProvider>
            </Router>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)

