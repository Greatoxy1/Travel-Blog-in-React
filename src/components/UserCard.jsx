import "./UserCard.css";
import PostMeta from '../components/PostMeta'
import { FaHouseUser } from "react-icons/fa";

const users = [
  { id: 1, name: "John Terry", image: "John.jpg" },
  { id: 2, name: "Jane Mensah", image: "Jane.jpg" },
  { id: 3, name: "Alice Addai", image: "Alice.jpg" },
  { id: 4, name: "Kudjo Asare", image: "kudjo.jpg" },
];
export function UserCard({name,image}) {
  return (
    <>
      <div className="user-card">
        {users.map((user) => (
          <div key={user.id}>
        
            <img id={user.id} src={user.image} alt={user.name} />
            <span>{user.name}</span>
          </div>
          
        ))}

        <PostMeta>{name}{image}</PostMeta>
      </div>
      <div>
        <a href="/">Go Home</a><FaHouseUser />
      </div>
    </>
  );
}
export default UserCard;
