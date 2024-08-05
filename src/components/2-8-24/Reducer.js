


import React, { useReducer } from "react";
import { actiontype, initialState, reducer } from "./helper";

// const actiontype = {
//   CHANGE_MOVIENAME: "CHANGE_MOVIENAME",
//   CHANGE_TOTALTICKETS: "CHANGE_TOTALTICKETS",
//   CHANGE_BOOKEDTICKETS: "CHANGE_BOOKEDTICKETS",
// };

// const initialState = {
//   moviename: "kalki",
//   location: "lulu mall",
//   totaltickets: 100,
//   bookedtickets: 26,
//   currentavailabletickets: 74,
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case actiontype.CHANGE_BOOKEDTICKETS:
//       return {
//         ...state,
//         bookedtickets: state.bookedtickets + action.payload,
//         currentavailabletickets: state.currentavailabletickets - action.payload,
//       };
//     case actiontype.CHANGE_TOTALTICKETS:
//       return {
//         ...state,
//         totaltickets: state.totaltickets + action.payload,
//         currentavailabletickets: state.currentavailabletickets + action.payload,
//       };
//     case actiontype.CHANGE_MOVIENAME:
//       return { ...state, moviename: action.payload };
//     default:
//       return state;
//   }
// };

function UseReducer() {
  const [currentState, dispatchFunction] = useReducer(reducer, initialState);
  const handleClick = () => {
    dispatchFunction({
      type: actiontype.CHANGE_BOOKEDTICKETS,
      payload: 1,
    });
  };
  return (
    <>
      <h2>Number of available tickets: {currentState.currentavailabletickets}</h2>
      <h2>Number of total tickets: {currentState.totaltickets}</h2>
      <h2>Movie name: {currentState.moviename}</h2>
      <button onClick={handleClick}>Click button</button>
    </>
  );
}

export default UseReducer;
