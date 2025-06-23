import NavBar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import './Layout.css';

export function Layout() {
  return (
    <>
      <div className="Layout">
        

      <NavBar />
        <Outlet />
      </div>
    </>
  );
}
export default Layout;
