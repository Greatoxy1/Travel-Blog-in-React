import PostDetail from './PostDetail';
import MenuBar from './MenuBar';



export function Container(){
  return(
    <div className="main-container">
      <MenuBar/>
      <PostDetail/>
        
    </div>
  )
}
export default Container;