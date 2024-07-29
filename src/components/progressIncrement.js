import { Component } from "react";


class ProgresDecrement extends Component{
    //state creation
    state={
        isSubsribe:false,
        text1:"-",
        
    }
    handleclick=()=>{
        
        this.setState(
            {
                isSubsribe:!this.state.isSubsribe
            }
        );
    };
    render(){
        return(
            <>
            <button onClick={this.handleclick}>{this.state.text1}</button>
            {/* {this.state.isSubsribe?(
                <>
                <h2>thanks for subscribe</h2></>
            ):(<h2>please subscribe to access the context</h2>)} */}
            </>
        )
    }
}
export default ProgresDecrement;
