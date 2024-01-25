import Header from "./components/Header";
import Config from "./routes/Config";
import Skills from "./routes/Skills";

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
  {
    path: "/skills",
    element: <Skills />,
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
