import PostDetail from './PostDetail';
import MenuBar from './MenuBar';
import './Container.css';
import Map from './Map';




export function Container(){
  return(
    <>
    <div className="main-container">
   
      <MenuBar/>
      <div className="container">
     <PostDetail/>
        <div className="user-card">
       <Map/>                                   
        </div>
        <div className="post-detail">
         
          
        </div>
        </div>
    </div>
    </>
  )
}
export default Container;