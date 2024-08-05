//import { Form } from "react-router-dom";
// import FetchFackStore from "./components/17-07-24/fetch2";
// import SqareComponent from "./components/17-07-24/SqareComponent";
// import Fetch from "./components/fetch/fetch";
// import Form from "./components/forms";
// import NavigationStack from "./Navigation/Navigation";
// import FetchApi from "./components/1-8-24/fetch3";
// import AddDelete from "./components/22-7-24/addanddelete";

// import UseReducer from "./components/2-8-24/Reducer";
// import Todo from "./components/todo/todo";
// import Todos from "./components/todo/todo2";
// import NavigationStack from "./Navigation/Navigation";
import React, { useReducer, useRef } from "react";



//  const App=()=>{
//    return(
   // <>
    {/* <Form/> */}
    {/* <NavigationStack/> */}
    {/* <Fetch/>  */}
    {/* // <SqareComponent/>
    //  <FetchFackStore/>
    // <FetchApi/>  */}
    {/* <FetchFackStore/>
    <SqareComponent/> */}
    {/* <AddDelete/> */}
    {/* <Todo/> */}
    {/* <UseReducer/> */}
    {/* <Todos/> */}


//     </>
//   )
// }


//export default App;

// import { Component } from "react";
// import Heading1, { Heading2, Heading3 } from "./components/heading";
// import { Ipl } from "./components/Ipl";
// import Counter

// class App extends Component {
//   state = {
//     tropfy: 2,
     
//   }
//   // const Heading2 = ({  Tropfy }) => (
//   //   <div>
//   //     <h5>Number of Trophies: { Tropfy}</h5>
//   //     <BasicProgress scale={Calculator( Tropfy)} />
//   //   </div>
//  // );


//   incrementHandler = () => {
//     this.setState({ tropfy: this.state.tropfy + 1 });
//   };

//   decrementHandler = () => {
//     this.setState({ tropfy: this.state.tropfy - 1 });
//   };

//   resetHandler = () => {
//     this.setState({ tropfy: this.state.tropfy });
//   };

//   render() {
//     return (
//        <div>
//         <Heading1 />
//         <div className='Ipl2'>
//       {
//         Ipl.map(eachIpl=>{return(
          
//                    <div className='Ipl'>
//              <Heading3 Title={eachIpl.Title}>
//              </Heading3>
//             <Img
//              source={eachIpl.source}/>
//              <Heading2 Tropfy={eachIpl.Tropfy}/>
//             { <Heading2 Tropfy={this.state.tropfy}></Heading2> }
//             <Counter
//           tropfy={this.state.tropfy}
//           incrementHandler={this.incrementHandler}
//           decrementHandler={this.decrementHandler}
//           resetHandler={this.resetHandler}
//         />
//            </div>
          
//         )}
  
//     )
//       }
//       </div> 
//       {/* //   <Heading2 tropfy={this.state.tropfy} /> */}
    
//       {/* //   <Counter
//           tropfy={this.state.tropfy}
//           incrementHandler={this.incrementHandler}
//           decrementHandler={this.decrementHandler}
//           resetHandler={this.resetHandler}
//         /> */}
//       </div>
//     )}
// }

// export default App;
//import React, { useReducer, useRef } from "react";

//import React, { useReducer, useRef } from "react";

// function App() {
//   function reducer(state, action) {
//     if (action.type === "add_item") {
//       return [...state, action.payload];
//     } else {
//       return state;
//     }
//   }

//   const INITIAL_STATE = [];
//   const valueRef = useRef("");
//   const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

//   function addItem() {
//     dispatch({ type: "add_item", payload: valueRef.current.value });
//     valueRef.current.value = "";
//   }

//   return (
//     <div>
//       <input type="text" ref={valueRef} />
//       <button onClick={addItem}>Add</button>
//       {state.map((item, index) => (
//         <h1 key={index}>{item}</h1>
//       ))}
//     </div>
//   );
// }

// export default App;
//import React, { useReducer, useRef } from 'react';

function App() {
  // Reducer function to handle adding and deleting items
  function reducer(state, action) {
    switch (action.type) {
      case "add_item":
        return [...state, action.payload];
      case "delete_item":
        return state.filter((_, index) => index !== action.payload);
      default:
        return state;
    }
  }

  const INITIAL_STATE = [];
  const valueRef = useRef("");
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  // Function to handle adding an item
  function addItem() {
    if (valueRef.current.value.trim()) {
      dispatch({ type: "add_item", payload: valueRef.current.value });
      valueRef.current.value = "";
    }
  }

  // Function to handle deleting an item
  function deleteItem(index) {
    dispatch({ type: "delete_item", payload: index });
  }

  return (
    <div>
      <input type="text" ref={valueRef} />
      <button onClick={addItem}>Add</button>
      {state.map((item, index) => (
        <div key={index}>
          <h1>{item}</h1>
          <button onClick={() => deleteItem(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
