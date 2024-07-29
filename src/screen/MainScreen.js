import Navbar from "../navbar/navbar";
import Image from "../components/img2";
import Menu from "./menu";
import Register from "./register";
import Location from "./location2";
const MainScreen=()=>{
    return(
        <>
        <Navbar/>
        <h2>MainScreen</h2>
        <Image/>
        <Menu/>
        <Location/>
        <Register/>
        </>
    )
}
export default MainScreen;