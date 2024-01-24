import Header from "./components/Header";
import Config from "./pages/Config";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Config />,
  },
  {
    path: "/my-config",
    element: <Config />,
  },
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
