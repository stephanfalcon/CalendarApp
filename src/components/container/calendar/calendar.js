import React ,{Component} from "react"
import ReactDOM from "react-dom"
import Month from "./month/month"

class Calendar extends Component{
    date = new Date()
    constructor(){
        super()
        this.state = {
            
            month : this.date.getMonth(),
            year: this.date.getFullYear()
        }
    }
    down = () => {
        var num = this.state.month
        var year = this.state.year
        this.setState(()=>({month:num}))
        if(this.state.month <=0){
            this.setState({month:11})
            year--
            this.setState({year:year})
        }else{
            num --
        }
    }
    up = () => {
        var num = this.state.month
        var year = this.state.year
        this.setState(()=>({month:num}))
        if(this.state.month >=11){
            this.setState({month:0})
            year++
            this.setState({year:year})
        }else{
            num ++
        }
    }

    render(){
        console.log(ReactDOM.findDOMNode())
        return(
            <div>
                <h2>Calendar</h2>
                <button onClick={this.down}>prev</button>
                <button onClick={this.up}>next</button>
                <Month month={this.state.month} year={this.state.year}/>
            </div>
        )
    }
}

export default Calendar