import { useEffect, useState } from "react";
import menu_navidad from "../../assets/images/cartas/menu_navidad.jpg";
import "./Alert.scss";

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
        <section className="menu">
          <div className="menu__container">
            <img className="menu__image" src={menu_navidad} alt=""></img>
          </div>
        </section>
      ) : (
        <div></div>
      )}
    </div>
  );
}

//mensaje quitado pendiente de que acabe la navidad
{/* <div className="message">
  <h6>Consulta nuestra carta. ¡Reserva ya!</h6>
</div>; */}
