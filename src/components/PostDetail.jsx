import { FaBackward } from "react-icons/fa";
const Posts = [
  {
    id: 1,

    title: "Journey to Rusia",
    city: "Moscow",
    date: "2023-10-01",
    img: "aimg.jpeg",
    DetailView: `I visited beautiful city recently, and I wanted to share how much I enjoyed my trip
    to Rusia and it was my first time traveling here.
    The people were very kind, the culture was fascinating, and the food was absolutely delicious.
     I especially loved exploring the historical sites and learning more about the local traditions.`,
  },
  {
    id: 2,

    title: "Exploring the Wonders of Japan",
    city: "Tokyo",
    date: "2023-09-15",
    img: "bimg.jpeg",
    DetailView: `Between bright neon lights and traditional temples, 
        you'll make your way through the bustling streets,
         eating your way from one konbini to the next, 
         and ticking off one highlight after another from your bucket list – welcome to Japan!
          Discover the endless skyline and bright neon lights of the megacity of Tokyo
           and immerse yourself in its flashy world of colorful pop culture and vibrant`,
  },
  {
    id: 3,

    title: "A Culinary Adventure in Italy",
    city: "Rome",
    date: "2023-08-20",
    img: "cimg.jpeg",
    DetailView: `I visited Rome. The architecture, the art, and the atmosphere were simply incredible.
     I was especially impressed by the Colosseum and the Uffizi Gallery. 
     The Italian food — pizza, pasta, and gelato — was beyond delicious!`,
  },
  {
    id: 4,

    title: "Safari in Kenya",
    city: "Nairobi",
    date: "2023-07-10",
    img: "dimg.jpeg",
    DetailView: `I recently returned from an unforgettable trip to Kenya, and I just wanted to share how deeply it moved me.

   The landscapes were breathtaking — from the vast savannas of the Maasai Mara to the beautiful shores of Diani Beach. 
   I was lucky enough to see lions, elephants,
   and giraffes during a safari, 
   something I had only dreamed of before.`,
  },
];

import { useState } from "react";

export function PostDetail() {
  const [activeId, setActiveId] = useState(null);

  const handleToggle = (id) => {
    setActiveId((post) => (post === id ? null : id));
  };

  return (
    <>
      <div className="Post">
        {Posts.map((post) => (
          <div key={post.id} onClick={() => handleToggle(post.id)}>={post.user}
            {activeId === post.id ? (
              <div>
                <h3 className="Post-content">Content {post.id}</h3>
                <p>{post.title}</p>
                <p>{post.date}</p>
                <p>{post.DetailView}</p>

                <a href="Go Back "><FaBackward /></a>
              </div>
            ) : (
              <img src={post.img ? post.img : ""} alt={`Image ${post.id}`} />
            )}
          </div>
        ))}
      </div>
    </>
  );
}
export default PostDetail;