// import React, { useReducer, useRef } from "react";

// function Todos() {
 
//     function reducer(state, action) {
//         if (action.type === "add_item") {
//           return [...state, action.payload];
//         } else {
//           return state;
//         }
//       }
     
//         if (action.type === "dlete_item") {
//           return [...state, action.payload];
//         } else {
//           return state;
//         }
      
          

//   const INITIAL_STATE = [];
//   const valueRef = useRef("");
//   const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

//   function addItem() {
//     dispatch({ type: "add_item", payload: valueRef.current.value });
//     valueRef.current.value = "";
//   }
//   function deleteitem(){
//      dispatch({type:"delete_item",payload:valueRef.current.value});
//   }

//   return (
//     <div>
//       <input type="text" ref={valueRef} />
//       <button onClick={addItem}>Add</button>
//       <button onClick={deleteitem}>Add</button>
//       {state.map((item, index) => (
//         <h1 key={index}>{item}</h1>
//       ))}
//     </div>
//   );
// }

// export default Todos;