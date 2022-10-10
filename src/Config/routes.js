
// import AvisosBadajoz from "../pages/Avisos/AvisosBadajoz/AvisosBadajoz";

import Contact from "../pages/Contact/Contact";
import Galery from "../pages/Gallery/Gallery";
import Home from "../pages/Home/Home";
import MapContainer from "../pages/Map/MapContainer";
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
    element: <MapContainer/>,
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