import Header from "./components/Header";
import Projects from "./components/Projects";

import Config from "./routes/Config";
import Experience from "./routes/Experience";
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
  {
    path: "/experience",
    element: <Experience />,
    children: [
      {
        path: "projects",
        element: <Projects />,
      },
    ],
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
