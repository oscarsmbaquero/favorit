import { Box, Tab, Tabs } from "@material-ui/core";
import React from "react";
import { useContext } from "react";
import { SWContext } from "../../context/context";

import EntrantesFrios from "./Components/EntrantesFrios";
import EntrantesCalientes from "./Components/EntrantesCalientes";
import Carnes from "./Components/Carnes";
import Especialidades from "./Components/Especialidades";
import PastasOccidente from "./Components/PastasOccidente";
import PastasOriente from "./Components/PastasOriente";
import Peques from "./Components/Peques";
import Postres from "./Components/Postres";

const Specialite = () => {
  const { platos } = useContext(SWContext);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  //filtros por tipo de plato
  const entrantesFrios = platos.filter((plato) => plato.tipo === "frio");
  const entrantesCalientes = platos.filter((plato) => plato.tipo === "caliente");
  const pastasOccidente = platos.filter((plato)=>plato.tipo === "occidente")
  const especialidades = platos.filter((plato) => plato.tipo === "especialidad");
  const carnes = platos.filter((plato) => plato.tipo === "carnes");
  const pastasOriente = platos.filter((plato) => plato.tipo === "oriente");
  const peques = platos.filter((plato) => plato.tipo === "peques");
  const postres = platos.filter((plato) => plato.tipo === "postres");
   

  //fin de filtro por platos

  return (
    <>
      <Box sx={{ width: "1/2", color: "#f0f0f0" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          //centered
        >
          <Tab label="Entrantes Frios"  style={{ backgroundColor: '#EAC029' ,color:'#fff'}} />
          <Tab label="Entrantes Calientes" style={{ backgroundColor: '#19C7AC' ,color:'#fff'}}/>
          <Tab label="Pastas de Occidente" style={{ backgroundColor: '#199FC7',color:'#fff' }}/>
          <Tab label="Carnes" style={{ backgroundColor: '#EAC029',color:'#fff' }}/>
          <Tab label="Pastas de Oriente" style={{ backgroundColor: '#19C7AC',color:'#fff' }}/>
          <Tab label="Especialidades" style={{ backgroundColor: '#199FC7',color:'#fff' }}/>
          <Tab label="Péques" style={{ backgroundColor: '#EAC029',color:'#fff' }}/>
          <Tab label="Postres" style={{ backgroundColor: '#19C7AC',color:'#fff' }}/>
        </Tabs>
      </Box>
      <Box sx={{ padding: 1 }}>
        {value === 0 && (
          <Box>
            <EntrantesFrios entrantesFrios={entrantesFrios} />
          </Box>
        )}
        {value === 1 && (
          <Box>
            <EntrantesCalientes entrantesCalientes={entrantesCalientes} />
          </Box>
        )}
        {value === 2 && (
          <Box>
            <PastasOccidente pastasOccidente={pastasOccidente} />
          </Box>
        )}
        {value === 3 && (
          <Box>
           <Carnes carnes={carnes}/>
          </Box>
        )}
        {value === 4 && (
          <Box>
           <PastasOriente pastasOriente={pastasOriente}/> 
          </Box>
        )}
        {value === 5 && (
          <Box>
           <Especialidades especialidades={especialidades}/> 
          </Box>
        )}
        {value === 6 && (
          <Box>
           <Peques peques={peques}/> 
          </Box>
        )}
        {value === 7 && (
          <Box>
           <Postres postres={postres}/> 
          </Box>
        )}
      </Box>
    </>
  );
};

export default Specialite;
