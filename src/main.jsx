import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Error from "./pages/Error.jsx";
import About from "./pages/About.jsx";
import Article from "./composants/Article.jsx";
import Contact from "./composants/Contact.jsx";
import Emploi from "./composants/Emploi.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/a-propos",
    element: <About />,

    children: [
      {
        path: "/a-propos/contact",
        element: <Contact />,
      },
      {
        path: "/a-propos/emploi",
        element: <Emploi />,
      },
    ],
  },
  {
    path: "/blog",
    element: (
      <>
        <h2>Liste des Articles</h2>
        <Link to="/blog/20">Article 12</Link>
      </>
    ),
  },
  {
    path: "/blog/:id",
    element: <Article />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
