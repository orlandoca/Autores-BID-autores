import { createBrowserRouter } from "react-router-dom";
import AuthorHome from "../Pages/AuthorHome";
import AuthorAdd from "../Pages/AuthorAdd";
import AuthorEdit from "../Pages/AuthorEdit";

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
      {
        path: "/author/edit",
        element: <AuthorEdit />,
      },
    ],
  },
]);
