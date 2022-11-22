import axios from "axios";
import { createContext, useState, useEffect } from "react";

//Creamos el creador de contexto:
export const SWContext = createContext();

//Almacenamos la ruta de la API para poder modificarla más facilmente
const BASEURL = "https://62852cc03060bbd347460bff.mockapi.io/";

//Vamos a definir el proveedor de mi contexto:
export const SWContextProvider = ({ children }) => {
  const [galeria, setGaleria] = useState([]);
  const [platos, setPlatos] = useState([]);


  useEffect(() => {
    const fetchGalery = async () => {
      const res = await axios.get(`${BASEURL}/favoritGalery`);
      setGaleria(res.data);
    };
    fetchGalery();
  }, []);

  console.log(galeria,'galeria')
  // useEffect(() => {
  //   const fetchPlatos = async () => {
  //     const res = await axios.get(`${BASEURL}/movies`);
  //     setPlatos(res.data.data.platos);
  //   };
  //   fetchPlatos();
  // }, []);


  return (
    <SWContext.Provider value={{ galeria, platos }}>
      {children}
    </SWContext.Provider>
  );
};
