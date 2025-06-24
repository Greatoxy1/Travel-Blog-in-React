
import "./MenuBar.css";
import { Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout";
import Contact from "../pages/Contact";
import NewPost from "../pages/NewPost";
import Map from "./Map";
import UserCard from "./UserCard";
export function Router(){
    return(
        <>
        
         <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="contact" element={<Contact />} />
              <Route path="new-post" element= {<NewPost/>}/>
              <Route path="home" element={<Map/>} />
             <Route path="login/logout" element={<UserCard/>}/>
            </Route>
          </Routes>
          </>
    )
}
export default Router;