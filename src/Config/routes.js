
// import AvisosBadajoz from "../pages/Avisos/AvisosBadajoz/AvisosBadajoz";

import Contact from "../pages/Contact/Contact";
import Galery from "../pages/Gallery/Gallery";
import Home from "../pages/Home/Home";
import Location from "../pages/Location/Location";
import Reservas from "../pages/Reservas/Reservas";



const routes = [
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/gallery",
    element: <Galery/>,
  },
  {
    path: "/location",
    element: <Location/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/reservas",
    element: <Reservas/>,
  },
  // {
  //   path: "/login",
  //   element: <Galery/>,
  // },
  
  
];

export default routes;