import { Component } from "react";
import "./SquareComponent.css"
class SqareComponent extends Component{
    state={
        Sqare:[1,1,1,1,]
    }

    render(){
        
        return(
            <>
             {this.state.Sqare.map((each,index)=>{
          return(
            <div className={
                (index+1)%2===0?"Maha":"Anu"}
            >{index+1}</div>
          )  
        })}
           
            </>
        )
    }
}
export default SqareComponent;