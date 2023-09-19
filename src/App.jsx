import { useState } from "react";
import "./App.css";
import NavBar from "./composants/NavBar";
import Post from "./composants/Post";

function App() {
  const [posts, setPosts] = useState([
    {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident ",
      body: "quia et suscipit\nsuscipit recusandae consequun",
      like: false,
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor ",
      like: true,
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium",
      like: false,
    },
    {
      userId: 1,
      id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa",
      like: true,
    },
    {
      userId: 1,
      id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omn",
      like: false,
    },
  ]);

  function likePost(post) {
    const copyPosts = [...posts];
    const index = posts.indexOf(post);
    copyPosts[index] = { ...posts[index], like: !posts[index].like };
    setPosts(copyPosts);
    //console.log(copyPosts);
  }

  function deletePost(id) {
    const postDelete = posts.filter((post) => post.id !== id);
    console.log(postDelete);
    setPosts(postDelete);
  }

  return (
    <div className="App">
      <NavBar />
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          likePost={likePost}
          deletePost={deletePost}
        />
      ))}
    </div>
  );
}

export default App;
