import React,{useContext} from "react";
import { SWContext } from "../../context/context";
import "./Pictures.scss";
import { Parallax } from "react-parallax";
import firstImage from "../../assets/images/bar1.jfif";
import secondImage from "../../assets/images/bar6.jfif";
import thirdImage from "../../assets/images/logoFavorit.jpeg";

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
      
        <div style={{ height: "700px" }}></div>
      </Parallax>
      ))}
    </div>
  );
};

export default Pictures;
