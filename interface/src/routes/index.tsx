import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./auth/login";
import Root from "./private/upload-cnab";
import NotFound from "./not-found";
import ConfirmCode from "./auth/confirm-code";
import UploadCnabStatus from "./private/cnab-upload-status";
import Merchants from "./private/merchants";
import MerchantDetails from "./private/merchant-details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/upload-cnab"} />,
    errorElement: <NotFound />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/login/confirm-code",
    element: <ConfirmCode />,
  },
  {
    path: "/upload-cnab",
    element: <Root />,
  },
  {
    path: "/upload-cnab/:uuid",
    element: <UploadCnabStatus />,
  },
  {
    path: "/merchants",
    element: <Merchants />,
  },
  {
    path: "/merchant/:uuid",
    element: <MerchantDetails />,
  },
]);

export default router;
