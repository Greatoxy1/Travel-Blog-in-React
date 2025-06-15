import { Outlet, Link } from "react-router-dom";
import { DiCoda } from "react-icons/di";
import './Layout.css';

export function Layout(){
    return(
        <>
        <div className="Layout">
            <nav>
                    <a> <DiCoda /></a>
                    <a>
                        <Link to="title">Travel Blog</Link>
                    </a>
                    <a>
                        <Link to="contact">Contact</Link>
                    </a>
                    <a>
                        <Link to="new-post">New Post</Link>
                    </a>
                    
            </nav>

            <Outlet />
         
        </div>
           </>
    )
}
export default Layout;