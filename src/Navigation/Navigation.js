import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import MainScreen from "../screen/MainScreen";
import Menu from "../screen/menu";
import Register from "../screen/register";
import Location from "../screen/location2";
import Recipies from "../screen/recipes";
import RecipeDetails from "../screen/recipedetails";
import Recipis from "../components/dummy";
const NavigationStack=()=>{
    return(
        <BrowserRouter>
        <Routes>
        


           <Route path="/" element={<MainScreen/>}/>
           <Route path="/Menu" element={<Menu/>}/>
        <Route path="/Register" element={<Register/>}/>
        {/* <Route path="/Location" element={<Location/>}/> */}
        {/* <Route path="/Recipies" element={<Recipies/>}/> */}
        <Route path="/Recipis" element={<Recipis/>}/>
        <Route path="/:cuisine/:RecipiId" element={<RecipeDetails/>}/>
        
            
            
            
            
        </Routes>
        </BrowserRouter>
    )
}


export default NavigationStack;