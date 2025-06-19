import  { useState } from "react";
import "./MenuBar.css";
import { Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout";
import Contact from "../pages/Contact";
import NewPost from "../pages/NewPost";
import PostDetail from "../components/PostDetail";
import Map from "./Map";

export function MenuBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const handleToggle = () => {
    setIsLoggedIn((NewPost) => !NewPost);
  };

  return (
    <>
      <div className="MenuBar">
        <nav>
        
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="contact" element={<Contact />} />
              <Route path="new post" element= {<NewPost/>}/>
              <Route path="/posts/:id" element={<PostDetail />} />
            </Route>
          </Routes>

          <button onClick={handleToggle}>
            {isLoggedIn ? "Logout" : "Login"}


          </button>

        </nav>
      </div>
    </>
  );
}
export default MenuBar;
