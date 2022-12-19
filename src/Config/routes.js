
// import AvisosBadajoz from "../pages/Avisos/AvisosBadajoz/AvisosBadajoz";

import CartaCeliaca from "../pages/Cartas/CartaCeliaca";
import CartaCervezas from "../pages/Cartas/CartaCervezas";
import CartaFood from "../pages/Cartas/CartaFood";
import CartaVegetariana from "../pages/Cartas/CartaVegetariana";
import CartaVino from "../pages/Cartas/CartaVino";
import Contact from "../pages/Contact/Contact";
import Gallery from "../pages/Gallery/Gallery";
import Home from "../pages/Home/Home";
import Horario from "../pages/Horario/Horario";
import MapContainer from "../pages/Map/MapContainer";
import Reservas from "../pages/Reservas/Reservas";
import Especialidades from "../pages/Especialidades/Especialidades";
import Pedidos from "../pages/Pedidos/Pedidos";
import CartaNavidad from "../pages/Cartas/OfertaNavidad";



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
    path: "/cartaVino",
    element: <CartaVino/>,
  },
  {
    path: "/horario",
    element: <Horario/>,
  },
  {
    path: "/especialidades",
    element: <Especialidades/>,
  },
  {
    path: "/oferta_navidad",
    element: <CartaNavidad/>,
  }  
];

export default routes;