import { useState } from "react";
import { Router } from "./Router";
export function MenuBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const handleToggle = () => {
    setIsLoggedIn((NewPost) => !NewPost);
  };

  return (
    <>
      <Router/> 
      <div className="MenuBar">
        <nav>
          <button onClick={handleToggle}>
         {isLoggedIn ? "Logout" : "Login"}
          </button>
        </nav>
      </div>
    </>
  );
}
export default MenuBar;
