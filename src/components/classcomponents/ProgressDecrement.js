
// import { Component } from "react";
// import BasicProgress from "../bootstrap/progress";
// import { Heading2 } from "../heading";
// class Counter extends Component{
//     state={
//         count:10
//     };
//     inscrement_handler=()=>{
//         this.setState(
//             {
//                 count:this.state.count+1,
//             },()=>{}
//         );
//     };
//     decrement_handler=()=>{

        
//         this.setState(
//             {
//                 count:this.state.count-1,
//             },()=>{}
//         );
//     };
//     reset_handler=()=>{
//         this.setState(
//             {
//                 count:10
//             }
//         )
//     }
//     render(){
//         return(
//             <>
//             <center>
           
           
//            <h3>{this.state.count}</h3>
//            <br></br><br></br>
//            <button onClick={this.inscrement_handler}style={{ borderRadius:"5px"}}>Inscrement</button>
//            <button onClick={this.decrement_handler} style={{borderRadius:"5px"}}>Decrement</button><br></br><br></br>
//            <button onClick={this.reset_handler} style={{borderRadius:"5px"}}>Reset</button>
           
//            </center>
//             </>
//         )
//     }
// }

// export default Counter;

import { Component } from "react";
class Counter extends Component {
    render() {
      const { tropfy, incrementHandler, decrementHandler, resetHandler } = this.props;
      return (
        <center>
          <h3>{tropfy}</h3>
          <br />
          <button onClick={incrementHandler} style={{ borderRadius: "5px" }}>
            Increment
          </button>
          <button onClick={decrementHandler} style={{ borderRadius: "5px" }}>
            Decrement
          </button>
          <br />
          <br />
          <button onClick={resetHandler} style={{ borderRadius: "5px" }}>
            Reset
          </button>
        </center>
      );
    }
  }
  
  export default Counter;