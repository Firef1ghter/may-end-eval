import {Routes, Route} from "react-router";
import {RegisterPageOne} from "./RegisterPageOne";
import {RegisterPageTwo} from "./RegisterPageTwo";

export const AllRoutes =() =>{
return(
<>
<Routes>
<Route exact path="/RegisterPageOne" element={<RegisterPageOne/>}/>
    <Route exact path="/RegisterPageTwo" element={<RegisterPageTwo/>}/>
    
</Routes>

</>


);


};