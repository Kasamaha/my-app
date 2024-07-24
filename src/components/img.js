
const Img=(props)=>{
    const {source,width=200,height=200}=props;
    return(
        <img 
        src={source}
        width={width}
        height={height}
        
        
        />
    )

    }

export default Img;