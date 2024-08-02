//import { Navbar } from "react-bootstrap"
import Card from "../components/card";
import Heading2 from "../components/heading";
import { Heading3 } from "../components/heading";
import { Items } from "../components/Ipl";
import Img from "../components/img";
import Navbar from "../navbar/navbar";
import Recipies from "./recipes";


const Menu=()=>{
    return(
        <>
        <Navbar/>
        {/* <Card>
            
        </Card> */}
        <Recipies/>
        </>

    )
}
export default Menu;