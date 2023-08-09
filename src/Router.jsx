import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { getLocation } from "./helper/SessionHelper";
import CheckoutPage from "./pages/CheckoutPage";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Main from "./pages/Main";
import RegistrationPage from "./pages/RegistrationPage";
import SingleMenuItemPage from "./pages/SingleMenuItemPage";
const location = getLocation();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: location !== null ? <Main /> : <Home />,
      },
      {
        path: "/home/:menuItemId",
        element: <SingleMenuItemPage />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <CheckoutPage />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/registration",
    element: <RegistrationPage />,
  },
]);

export default router;
