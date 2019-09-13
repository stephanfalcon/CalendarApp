import React ,{Component} from "react"
import Day from "./day/day"

class Grid extends Component{
    month = []
    gridGen = (height,width) => {
        
        var gridNum = 1
        var day = 1
        var firstDay = this.props.firstDay
        for(var i = 1; i <= height;i++){   
            for(var j = 1;j<=width;j++){
                if (gridNum <= firstDay){
                    this.month.push(<Day Y={i} X={j} />)
                    gridNum++
                }else{
                    if( day >this.props.numOfDays){
                        this.month.push(<Day Y={i} X={j}/>)
                        gridNum++
                    }else{
                        this.month.push(<Day Y={i} X={j} number={day}/>)
                        gridNum++
                        day++
                        
                    }
                }
            }
        }
    }

    componentDidMount(){
    }

    render(){
        this.gridGen(6,7)
        return(
            <div className={"row grid"}>
                {/* {console.log(this.month)} */}
                {this.month}
                {this.month=[]}
                {/* {document.getElementsByClassName("grid").empty} */}
                
            </div>
            
        )
    }
}

export default Grid