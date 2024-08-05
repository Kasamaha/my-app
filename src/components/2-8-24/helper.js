// export const actiontype = {
//     CHANGE_MOVIENAME: "CHANGE_MOVIENAME",
//     CHANGE_TOTALTICKETS: "CHANGE_TOTALTICKETS",
//     CHANGE_BOOKEDTICKETS: "CHANGE_BOOKEDTICKETS",
//   };
  
//   export const initialState = {
//     moviename: "kalki",
//     location: "lulu mall",
//     totaltickets: 100,
//     bookedtickets: 26,
//     currentavailabletickets: 74,
//   };
  
//   export const reducer = (state, action) => {
//     switch (action.type) {
//       case actiontype.CHANGE_BOOKEDTICKETS:
//         return {
//           ...state,
//           bookedtickets: state.bookedtickets + action.payload,
//           currentavailabletickets: state.currentavailabletickets - action.payload,
//         };
//       case actiontype.CHANGE_TOTALTICKETS:
//         return {
//           ...state,
//           totaltickets: state.totaltickets + action.payload,
//           currentavailabletickets: state.currentavailabletickets + action.payload,
//         };
//       case actiontype.CHANGE_MOVIENAME:
//         return { ...state, moviename: action.payload };
//       default:
//         return state;
//     }
//   };
export const initialState={

}
export const todoReducer=(state,action)=>{
    switch (action.type) {
            case 'ADD_TODO':
              return {
                ...state,
                todos: [...state.todos, { text: action.payload, completed: false }]
              };
           
            case 'DELETE_TODO':
              return {
                ...state,
                todos: state.todos.filter((_, index) => index !== action.index)
              };
            default:
              return state;
          }
        }
        

