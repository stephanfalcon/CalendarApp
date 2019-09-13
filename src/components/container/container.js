import React, {Component} from "react";
import Calendar from "./calendar/calendar"
import "./container.css"

class Container extends Component {


    render(){
        return(
            <div className={"container"}>
                <h1>Main</h1>
                <Calendar/>
            </div>
        )
    }
}

export default Container