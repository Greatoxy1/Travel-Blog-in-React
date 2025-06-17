import './PostMeta.css';

export function PostMeta({ name, image }) {
  return (
    <div className="PostMeta">
      <span className="PostMeta-name">{name}</span>
      <span className="PostMeta-image">
        
         <time>{image}</time>
      </span>
    </div>
  );
}
export default PostMeta;