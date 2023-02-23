import { createBrowserRouter } from "react-router-dom";
import AuthorHome from "../pages/AuthorHome";
import AuthorAdd from "../pages/AuthorAdd";

export default createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <AuthorHome />,
      },
      {
        path: "/author/new",
        element: <AuthorAdd />,
      },
    ],
  },
]);
