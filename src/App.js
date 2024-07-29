



import React, { Component } from "react";
import Heading1 from "./components/heading";
import { Heading2 } from "./components/heading";
import { Heading3 } from "./components/heading";
import Counter from "./components/classcomponents/ProgressDecrement";
import { Ipl } from "./components/Ipl";
import Img from "./components/img";

class App extends Component {
  state = {
    tropfy: 2,
     
  }
  // const Heading2 = ({  Tropfy }) => (
  //   <div>
  //     <h5>Number of Trophies: { Tropfy}</h5>
  //     <BasicProgress scale={Calculator( Tropfy)} />
  //   </div>
 // );


  incrementHandler = () => {
    this.setState({ tropfy: this.state.tropfy + 1 });
  };

  decrementHandler = () => {
    this.setState({ tropfy: this.state.tropfy - 1 });
  };

  resetHandler = () => {
    this.setState({ tropfy: this.state.tropfy });
  };

  render() {
    return (
       <div>
        <Heading1 />
        <div className='Ipl2'>
      {
        Ipl.map(eachIpl=>{return(
          
                   <div className='Ipl'>
             <Heading3 Title={eachIpl.Title}>
             </Heading3>
            <Img
             source={eachIpl.source}/>
             <Heading2 Tropfy={eachIpl.Tropfy}/>
            { <Heading2 Tropfy={this.state.tropfy}></Heading2> }
            <Counter
          tropfy={this.state.tropfy}
          incrementHandler={this.incrementHandler}
          decrementHandler={this.decrementHandler}
          resetHandler={this.resetHandler}
        />
           </div>
          
        )}
  
    )
      }
      </div> 
      {/* //   <Heading2 tropfy={this.state.tropfy} /> */}
    
      {/* //   <Counter
          tropfy={this.state.tropfy}
          incrementHandler={this.incrementHandler}
          decrementHandler={this.decrementHandler}
          resetHandler={this.resetHandler}
        /> */}
      </div>
    )}
}

export default App;
