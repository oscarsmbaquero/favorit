import { useEffect, useState } from "react";
import menu_navidad from "../../assets/images/cartas/menu_navidad.jpg";
import './Alert.scss'

export default function Alert() {
  const [isShown, setIsShown] = useState(true);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setIsShown(false);
    }, 7000);

    return () => {
      // 👇️ clear timeout when component unmounts
      clearTimeout(timeoutID);
    };
  }, []);

  return (
    <div>
      {isShown ? (
        <div className="message">
          <img className="message__logo" src={menu_navidad} alt="" ></img>
          {/* <h6>Consulta nuestra carta. ¡Reserva ya!</h6> */}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
