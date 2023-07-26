import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>hello</div>,
    errorElement: <div>404 test</div>
  },
  {
    path: "/other",
    element: <div>other</div>
  }
]);

export default router;