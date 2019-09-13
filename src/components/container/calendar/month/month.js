import React ,{Component} from "react"
import ReactDOM from "react-dom"
// import Week from "./week/week"
import Grid from "./grid/grid"
import DOTW from "./DOTW/DOTW"
import "./month.css"
import moment from "moment"

class Month extends Component{

    
    
    firstDay = (month,year) => {
        var date = new Date()
        date.setDate(1)
        date.setMonth(month)
        date.setYear(year)

        var d = date.getDay()
        
        return d
    }

    numOfDays = (month,year) =>{

        switch(month){
            case 0:
                return (31);
            case 1:
                if (year % 4 == 0){
                    return(29)
                }
                return (28)
            case 2:
                return (31)
            case 3:
                return (30)
            case 4:
                return (31)
            case 5:
                return (30)
            case 6:
                return (31)
            case 7:
                return (31)
            case 8:
                return (30)
            case 9:
                return (31)
            case 10:
                return (30)
            case 11:
                return (31)
            default:
                return "error"
        }
    }
    numToMonth(month){

        switch(month){
            case 0:
                return ("January");
            case 1:
                return ("February")
            case 2:
                return ("March")
            case 3:
                return ("April")
            case 4:
                return ("May")
            case 5:
                return ("June")
            case 6:
                return ("July")
            case 7:
                return ("August")
            case 8:
                return ("September")
            case 9:
                return ("October")
            case 10:
                return ("November")
            case 11:
                return ("December")
            default:
                return "error"
        }
    }
    componentDidUpdate(){
        console.log(this.component)
    }
    render(){
        return(
            <div id={"month"}>
                <h2>{this.numToMonth(this.props.month)}</h2>
                <h2>{this.props.year}</h2>
                <DOTW/>
                <Grid firstDay={this.firstDay(this.props.month,this.props.year)} numOfDays={this.numOfDays(this.props.month)}/>
            </div>
        )
    }
}

export default Month