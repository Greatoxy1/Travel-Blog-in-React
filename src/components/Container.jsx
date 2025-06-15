import PostDetail from './PostDetail';
import UserCard from './UserCard/';
import MenuBar from './MenuBar';

export function Container(){
  return(
    <div className="main-container">
      <MenuBar/>
      <PostDetail/>
      <UserCard/>
  
    </div>
  )
}
export default Container;