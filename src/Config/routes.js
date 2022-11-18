
// import AvisosBadajoz from "../pages/Avisos/AvisosBadajoz/AvisosBadajoz";

import CartaCeliaca from "../pages/Cartas/CartaCeliaca";
import CartaCervezas from "../pages/Cartas/CartaCervezas";
import CartaFood from "../pages/Cartas/CartaFood";
import CartaVegetariana from "../pages/Cartas/CartaVegetariana";
import Contact from "../pages/Contact/Contact";
import Gallery from "../pages/Gallery/Gallery";
import Home from "../pages/Home/Home";
import Horario from "../pages/Horario/Horario";
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
    path: "/cartaCeliaca",
    element: <CartaCeliaca/>,
  },
  {
    path: "/cartaVegetariana",
    element: <CartaVegetariana/>,
  },
  {
    path: "/cartaCervezas",
    element: <CartaCervezas/>,
  },
  {
    path: "/horario",
    element: <Horario/>,
  },
  
  
];

export default routes;