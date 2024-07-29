// import BasicProgress from './bootstrap/progress'
// import './heading.css'
// import './Heading2.css'
import { Items } from "./Ipl";

//     const Calucalator=(input)=>{
//         const base=30
//         let percentage=(input/base)*100
//         return percentage;
//     }
// const Heading1=()=>{
//     return (
//     <div className='Heading1'>
//         <h3 > home</h3>
//         <h3> title</h3>
//         <h3>logo</h3>
//         <h3>Tropfies</h3>
//     </div>)
// };
//  export const Heading2=(props)=>{
//     const {Tropfy}=props
//     return (
//     <div >
//         <h5> No of Tropfies:{Tropfy}</h5>
//         <BasicProgress scale = {Calucalator(Tropfy) }></BasicProgress>
        
//     </div>)
// };
//  export const Heading3=(props)=>{
//     const {Title}=props
//     return (
//     <div>
//         <h1>Title: {Title}</h1>
//     </div>)
// };
// export default Heading1;
// export const Heading=()=>{
// return (
//     <center>
//     <div className='Heading'>
//        <h3 > powered by IPL Team</h3>
    
//     </div>
//     </center>)
// }
 

import React from "react";
import BasicProgress from "./bootstrap/progress";
//import Counter from "./Counter";

// const Calculator = (input) => {
//   const base = 17;
//   let percentage = (input / base) * 100;
//   return percentage;
// };

//export const Heading1 = () => (
  // <div className='Heading1'>
  //   <h3>Home</h3>
  //   <h3>Title</h3>
  //   <h3>Logo</h3>
  //   <h3>Trophies</h3>
  // </div>
//);

 const Heading2 = ({  preparation }) => (
  <div>
    <h5>preparation: { preparation}</h5>
    {/* <BasicProgress scale={Calculator( Tropfy)} /> */}
  </div>
);

export const Heading3 = ({ title }) => (
  <div>
    <h1>title: {title}</h1>
  </div>
);

// export const Heading = () => (
//   <center>
//     <div className='Heading'>
//       <h3>Powered by IPL Team</h3>
//     </div>
//   </center>
// );

export default Heading2;
