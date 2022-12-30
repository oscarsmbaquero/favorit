import React,{useContext} from "react";
import { SWContext } from "../../context/context";
import "./Pictures.scss";
import { Parallax } from "react-parallax";
import logo from "../../assets/images/logoFavorit.jpeg";

const Pictures = () => {
  
  const { galeria } = useContext(SWContext);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      {galeria.map(item =>(
      <Parallax
      strength={200}
        blur={{ min: -15, max: 15 }}
        bgImage={item.image}
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
      
        <div style={{ height: "100vh" }}>
          <div className="contenido">
          <img src={logo} alt="logo" className="logo"></img>
          </div>
        </div>
      </Parallax>
      ))}
    </div>
  );
};

export default Pictures;
