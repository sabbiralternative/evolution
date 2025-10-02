import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import PrivateRoute from "./PrivateRoute";
import Auth from "../pages/Auth/Auth";
import useWindowWidth from "../hooks/useWindowWidth";
import { mobileRoutes } from "./mobile-routes";
import { desktopRoutes } from "./desktop-route";

const MainRouter = () => {
  const windowWidth = useWindowWidth();
  const routes = windowWidth > 768 ? desktopRoutes : mobileRoutes;

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <App />
          </PrivateRoute>
        ),

        children: [...routes],
      },
      {
        path: "/:token",
        element: <Auth />,
      },
    ],
    {
      basename: import.meta.env.BASE_URL ?? "/",
    }
  );

  return <RouterProvider router={router} />;
};

export default MainRouter;
