import React ,{Component}from "react"
import "./day.css"

class Day extends Component{
    render(){
        return(
            <div className={"day"} Y={this.props.Y} X={this.props.X}>
                <h4>{this.props.number}</h4>
            </div>
        )
    }
}

export default Day