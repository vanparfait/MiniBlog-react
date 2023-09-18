//import React from "react";
import PropTypes from "prop-types";

const Post = ({ title, body }) => {
  return (
    <div className="post">
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div className="btn">
        {" "}
        <button>Liker</button>
        <button className="delete">Effacer</button>
      </div>
    </div>
  );
};

export default Post;

Post.propTypes = {
  title: PropTypes.string.isRequired, // Validation de type pour la propriété "title"
  body: PropTypes.string.isRequired, // Exemple de validation pour une autre propriété
};
