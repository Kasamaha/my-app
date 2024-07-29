// 
import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';

const BasicProgress = ({ scale }) => {
  return <ProgressBar now={scale} />;
};

export default BasicProgress;
// import ProgressBar from 'react-bootstrap/ProgressBar';

// function BasicProgress(prop) {
//     const{scale}=prop;
//   return <ProgressBar now={scale} />;
// }

// export default BasicProgress;