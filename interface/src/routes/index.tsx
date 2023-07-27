import { createBrowserRouter } from "react-router-dom";
import Login from "./auth/login";
import Root from "./root";
import NotFound from "./not-found";
import ConfirmCode from "./auth/confirm-code";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/login/confirm-code',
    element: <ConfirmCode />
  }
]);

export default router;