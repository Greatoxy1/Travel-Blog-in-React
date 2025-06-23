import { useState } from "react";
import { FaUserCircle } from 'react-icons/fa';
import UserCard from '../components/UserCard';
import { IoArrowBackCircle } from "react-icons/io5";
import '../components/MenuBar.css';

export function MenuBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const handleToggle = () => {
    setIsLoggedIn((prev) => !prev);

  };
  if (isLoggedIn) {
    return (
      <>
        <UserCard />
        <a href="Go Back">
          <IoArrowBackCircle />
        </a>
      </>
    );
  }

  return (
    <>
    
      <div className="MenuBar">
        <nav>
         
          <button onClick={handleToggle}>
            <FaUserCircle/>
            {isLoggedIn ? "Logout" : "Login"}
            
          </button>
        </nav>
      </div>
    </>
  );
}
export default MenuBar;
