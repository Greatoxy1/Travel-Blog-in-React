import PostDetail from './PostDetail';
import MenuBar from './MenuBar';
import Map from './Map';
import '../App.css';
import './Container.css';
import './UserCard.css';



export function Container(){
  return(
    <div className="main-container">
      <MenuBar/>
      <Map/>
      <PostDetail/>
        
    </div>
  )
}
export default Container;