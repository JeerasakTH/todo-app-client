import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Home from "./pages/Home";
import Scheduled from "./pages/Scheduled";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/schedule", element: <Scheduled /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
