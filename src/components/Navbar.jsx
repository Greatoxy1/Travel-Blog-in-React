
import { Link } from "react-router-dom";
import { DiCoda } from "react-icons/di";
export  function Navbar() {
 

  return (
   <nav>
          <div>
            <DiCoda />
          </div>
          <div>
            <Link to="title">Travel Blog</Link>
          </div>
          <div>
            <Link to="contact">Contact</Link>
          </div>
          <div>
            <Link to="new-post">New Post</Link>
          </div>
          <div>
            <Link to="login/logout">Login/Logout </Link>
          </div>
        </nav>
  );
}
export default Navbar;