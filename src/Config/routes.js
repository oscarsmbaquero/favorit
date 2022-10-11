
// import AvisosBadajoz from "../pages/Avisos/AvisosBadajoz/AvisosBadajoz";

import CartaCervezas from "../pages/Cartas/CartaCervezas";
import CartaFood from "../pages/Cartas/CartaFood";
import Contact from "../pages/Contact/Contact";
import Gallery from "../pages/Gallery/Gallery";
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
    element: <Gallery/>,
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
  {
    path: "/cartaFood",
    element: <CartaFood/>,
  },
  {
    path: "/cartaCervezas",
    element: <CartaCervezas/>,
  },
  // {
  //   path: "/login",
  //   element: <Galery/>,
  // },
  
  
];

export default routes;