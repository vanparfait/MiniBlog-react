//import React from "react";
//import PropTypes from "prop-types";

const Post = ({ post, likePost }) => {
  return (
    <div className="post">
      <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
      <div className="btn">
        {" "}
        <button onClick={() => likePost(post)}>
          {" "}
          {post.like ? "Deja liker" : "Liker"}{" "}
        </button>
        <button className="delete">Effacer</button>
      </div>
    </div>
  );
};

export default Post;

// Post.propTypes = {
//   likePost: PropTypes.string.isRequired, // Validation de type pour la propriété "title"
//   post: PropTypes.string.isRequired, // Exemple de validation pour une autre propriété
// };
