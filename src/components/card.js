import "./Ipl2.css"


import Img from "./img"
import Heading2 from "./heading"
import { Heading3 } from "./heading"
import { Items } from "./Ipl"

    const Card=()=>{
        
    return (
    
        // <div className="Ipl">
        
    <div>
    
    <div style={{margin:20 , display:"grid",gridTemplateColumns:"auto auto auto auto"}}>
    {/* <div> */}
    {
      Items.map(eachIteams=>{return(
        
                 <div className='Ipl'>
           <Heading3 title={eachIteams.title}>
           </Heading3>
          <Img
           source={eachIteams.source}/>
          <Heading2 preparation={eachIteams.preparation}></Heading2>
         
         </div>
        
      )}

  )
    }
    </div> 
             </div>
        
    )
}

export default Card;