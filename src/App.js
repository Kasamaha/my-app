

import "./card2"

import { Ipl } from "./components/Ipl";
import MyComponent from "./components/render/sample";
import Render from "./components/render/sample2";

const App=()=> {
  return(
    <>
    <MyComponent Ipl={Ipl}/>
    
    </>
  )

  
}

export default App;
