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
  const especialidades = platos.filter(
    (plato) => plato.tipo === "especialidad"
  );
  const entrantesCalientes = platos.filter(
    (plato) => plato.tipo === "caliente"
  );
  const carnes = platos.filter((plato) => plato.tipo === "carnes");
  const oriente = platos.filter((plato) => plato.tipo === "oriente");

  //fin de filtro por platos

  return (
    <>
      <Box sx={{ width: "1/2", backgroundColor: "white" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          //centered
        >
          <Tab label="Entrantes Frios" />
          <Tab label="Entrantes Calientes" />
          <Tab label="Pastas de Occidente" />
          <Tab label="Carnes" />
          <Tab label="Pastas de Oriente" />
          <Tab label="Especialidades" />
          <Tab label="Peques" />
          <Tab label="Postres" />
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
            <PastasOccidente Carnes={carnes} />
          </Box>
        )}
        {value === 3 && (
          <Box>
            
          </Box>
        )}
        {value === 4 && (
          <Box>
            
          </Box>
        )}
      </Box>
    </>
  );
};

export default Specialite;
