import "./UserCard.css";

const users = [
  { id: 1, name: "John Terry", image: "John.jpg" },
  { id: 2, name: "Jane Mensah", image: "Jane.jpg" },
  { id: 3, name: "Alice Addai", image: "Alice.jpg" },
  { id: 4, name: "Kudjo Asare", image: "kudjo.jpg" },
];
export function UserCard() {
  return (
    <>
      <div className="user-card">
        {users.map((user) => (
          <div key={user.id}>
            {user.id}
            <img id={user.id} src={user.image} alt={user.name} />
            <span>{user.name}</span>
          </div>
        ))}
      </div>
    </>
  );
}
export default UserCard;
