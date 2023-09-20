import React from "react";
import { useParams } from "react-router-dom";

const Article = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>Article avec id : {id}</h1>
    </div>
  );
};

export default Article;
