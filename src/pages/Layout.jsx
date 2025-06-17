import { Outlet, Link } from "react-router-dom";
import { DiCoda } from "react-icons/di";
import './Layout.css';

export function Layout(){
    return(
        <>
        <div className="Layout">
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
                    
            </nav>

            <Outlet />
        </div>
           </>
    )
}
export default Layout;