import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Experience from "../pages/Experience/Experience";
import Tools from "../pages/Tools/Tools";
import Research from "../pages/Research/Research";
import Courses from "../pages/Courses/Courses";
import Academics from "../pages/Academics/Academics";
import Workshops from "../pages/Workshops/Workshops";
import Gallery from "../pages/Gallery/Gallery";
import Contact from "../pages/Contact/Contact";
import Referees from "../pages/Referees/Referees";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "awards-experience",
        element: <Experience />,
      },
      {
        path: "research-tools",
        element: <Tools />,
      },
      {
        path: "research-interest",
        element: <Research />,
      },
      {
        path: "completed-courses",
        element: <Courses />,
      },
      {
        path: "academic-degree",
        element: <Academics />,
      },
      {
        path: "workshops-seminars",
        element: <Workshops />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "referees",
        element: <Referees />,
      },
    ],
  },
]);