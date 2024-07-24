// import logo from './logo.svg';
import './App.css';
import Img from './components/img';
import Card from './components/card';
import { Heading2 } from './components/heading';
import Button from './components/button';
import Heading1 from './components/heading';
import { Ipl } from './components/Ipl';
import { Heading3 } from './components/heading';
import './components/Ipl2.css'
import { Heading } from './components/heading';
function App() {
  
  
  return (
    <div>
    
      <Heading1></Heading1>
      <div className='Ipl2'>
      {
        Ipl.map(eachIpl=>{return(
          
                   <div className='Ipl'>
             <Heading3 Title={eachIpl.Title}>
             </Heading3>
            <Img
             source={eachIpl.source}/>
            <Heading2 Tropfy={eachIpl.Tropfy}></Heading2>
           </div>
          
        )}
  
    )
      }
      </div> 
      <Heading></Heading>  
  </div>
  );
}

export default App;
