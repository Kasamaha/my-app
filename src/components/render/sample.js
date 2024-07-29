import React from 'react';
import "./sample.css"
const MyComponent = (prop) => {
  const{Ipl}=prop
  return (
    
       <div className="component-container">
      {
        Ipl.length == 0 ? (<h1 className="empty-list-message">the given list is empty</h1>) : (<h1 className="non-empty-list-message">the array length is {Ipl.length} {Ipl.map((each, index) => (
          <li key={index} className="list-item">
            {each} 
          </li>
        ))}</h1>
      
        )
      }
    </div>
  );
};

export default MyComponent;