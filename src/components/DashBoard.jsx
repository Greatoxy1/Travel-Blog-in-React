import PostDetail from './PostDetail';
import Map from './Map';
import './DashBoard.css';

export function DashBoard(){
    return(
     <>
       
    <div className = "Dashboard">
    <div className= "Dashboard-posts">
        <PostDetail/></div>  
    <div className="Dashboard-map">
        <Map/>
    </div>
    </div>

        </>
    )
}
export default DashBoard;