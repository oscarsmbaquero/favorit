import { Box, Tab, Tabs } from "@material-ui/core";
import React from "react";
import { useContext } from "react";
import { SWContext } from "../../context/context";

import { FormattedMessage } from "react-intl";

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
  const entrantesCalientes = platos.filter(
    (plato) => plato.tipo === "caliente"
  );
  const pastasOccidente = platos.filter((plato) => plato.tipo === "occidente");
  const especialidades = platos.filter(
    (plato) => plato.tipo === "especialidad"
  );
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
          <Tab
            label=<FormattedMessage id="app.entrantesfrios" />
            style={{
              backgroundColor: "#EAC029",
              color: "black",
              //borderRadius: "50px 0px 0px 0px",
              clipPath: "polygon(0% 0%, 100% 0%, 100% 80%, 50% 100%, 0% 80%)",
              marginLeft: "5px",
              marginBottom: "5px",
              marginTop: "5px",
              fontWeight: "bold",
            }}
          />
          <Tab
            label=<FormattedMessage id="app.entrantescalientes" />
            style={{
              backgroundColor: "#19C7AC",
              color: "black",
              //borderRadius: "0px 0px 50px 0px",
              clipPath: "polygon(0% 0%, 100% 0%, 100% 80%, 50% 100%, 0% 80%)",
              marginLeft: "5px",
              marginBottom: "5px",
              marginTop: "5px",
              fontWeight: "bold",
            }}
          />
          <Tab
            label=<FormattedMessage id="app.pastasOccidente" />
            style={{
              backgroundColor: "#199FC7",
              color: "black",
            //  borderRadius: "50px 0px 0px 0px",
            clipPath: "polygon(0% 0%, 100% 0%, 100% 80%, 50% 100%, 0% 80%)",
              marginLeft: "5px",
              marginBottom: "5px",
              marginTop: "5px",
              fontWeight: "bold",
            }}
          />
          <Tab
            label=<FormattedMessage id="app.carnes" />
            style={{
              backgroundColor: "#EAC029",
              color: "black",
              marginLeft: "5px",
              marginBottom: "5px",
              marginTop: "5px",
              borderBottom: "1px solid #fff",
              clipPath: "polygon(0% 0%, 100% 0%, 100% 80%, 50% 100%, 0% 80%)",
              fontWeight: "bold",
            }}
          />
          <Tab
            label=<FormattedMessage id="app.pastasOriente" />
            style={{
              backgroundColor: "#19C7AC",
              color: "black",
              //borderRadius: "50px 50px 50px 50px",
              clipPath: "polygon(0% 0%, 100% 0%, 100% 80%, 50% 100%, 0% 80%)",
              marginLeft: "5px",
              marginBottom: "5px",
              marginTop: "5px",
              fontWeight: "bold",
            }}
          />
          <Tab
            label=<FormattedMessage id="app.especialidades" />
            style={{
              backgroundColor: "#199FC7",
              color: "black",
              //borderRadius: "50px 50px 50px 50px",
              clipPath: "polygon(0% 0%, 100% 0%, 100% 80%, 50% 100%, 0% 80%)",
              marginLeft: "5px",
              marginBottom: "5px",
              marginTop: "5px",
              fontWeight: "bold",
            }}
          />
          <Tab
            label=<FormattedMessage id="app.peques" />
            //label="Péques"
            style={{
              backgroundColor: "#EAC029",
              color: "black",
              //borderRadius: "50px 50px 50px 50px",
              clipPath: "polygon(0% 0%, 100% 0%, 100% 80%, 50% 100%, 0% 80%)",
              marginLeft: "5px",
              marginBottom: "5px",
              marginTop: "5px",
              fontWeight: "bold",
            }}
          />
          <Tab
            //label="Postres"
            label=<FormattedMessage id="app.postres" />
            style={{
              backgroundColor: "#19C7AC",
              color: "black",
              //borderRadius: "50px 50px 50px 50px",
              clipPath: "polygon(0% 0%, 100% 0%, 100% 80%, 50% 100%, 0% 80%)",
              marginLeft: "5px",
              marginBottom: "5px",
              marginTop: "5px",
              fontWeight: "bold",
            }}
          />
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
            <Carnes carnes={carnes} />
          </Box>
        )}
        {value === 4 && (
          <Box>
            <PastasOriente pastasOriente={pastasOriente} />
          </Box>
        )}
        {value === 5 && (
          <Box>
            <Especialidades especialidades={especialidades} />
          </Box>
        )}
        {value === 6 && (
          <Box>
            <Peques peques={peques} />
          </Box>
        )}
        {value === 7 && (
          <Box>
            <Postres postres={postres} />
          </Box>
        )}
      </Box>
    </>
  );
};

export default Specialite;
