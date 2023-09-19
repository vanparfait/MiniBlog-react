import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Error from "./pages/Error.jsx";
import About from "./pages/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/a-propos",
    element: <About />,
  },
  {
    path: "/blog",
    element: (
      <>
        <h2>Liste des Articles</h2>
        <Link to="blog/200">Article 12</Link>
      </>
    ),
  },
  {
    path: "/blog/:id",
    element: (
      <>
        <h2>Voici un seul article</h2>
        <p>Article 1</p>
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
