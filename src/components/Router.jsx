
import "./MenuBar.css";
import { Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout";
import Contact from "../pages/Contact";
import NewPost from "../pages/NewPost";
import Home from "./DashBoard";
export function Router(){
    return(
        <>
        
         <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="contact" element={<Contact />} />
              <Route path="new post" element= {<NewPost/>}/>
              <Route path="/Home" element={<Home/>} />
             
            </Route>
          </Routes>
          </>
    )
}
export default Router;