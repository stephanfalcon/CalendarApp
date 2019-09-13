import React ,{Component} from "react"
import Day from "../grid/day/day"

class Row extends Component{
    render(){
        return(
            <div className={"row"}>
                <Day number={"1"}/>
                <Day number={"2"}/>
                <Day number={"3"}/>
                <Day number={"4"}/>
                <Day number={"5"}/>
                <Day number={"6"}/>
                <Day number={"7"}/>
            </div>
        )
    }
}

export default Row;