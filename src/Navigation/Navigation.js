import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import MainScreen from "../screen/MainScreen";
import Menu from "../screen/menu";
import Register from "../screen/register";
import Login from "../screen/login";
import Location from "../screen/location";




const NavigationStack=()=>{
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<MainScreen/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Menu" element={<Menu/>}/>
            <Route path="/Location" element={<Location/>}/>
        </Routes>
        </BrowserRouter>

    );
}
export default NavigationStack;