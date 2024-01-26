import Comapany from "./components/Company";
import Header from "./components/Header";
import Projects from "./components/Projects";

import Skills from "./routes/Skills";
import Config from "./routes/Config";
import Contact from "./routes/Contact";
import Experience from "./routes/Experience";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/my-config",
        element: <Config />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/experience",
        element: <Experience />,
        children: [
          {
            path: "projects",
            element: <Projects />,
          },
          {
            path: "industry",
            element: <Comapany />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
