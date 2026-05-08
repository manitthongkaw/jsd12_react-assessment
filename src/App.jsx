import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Owner from "./pages/Owner";
import "../src/assets/css/App.css";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {index:true, element:<Home />},
      {path:"owner", element:<Owner />}
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}