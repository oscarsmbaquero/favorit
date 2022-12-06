import { useEffect, useState } from "react";
import logo from "../../assets/images/cartas/cartaNormal.jpg";
import './Alert.scss'

export default function Alert() {
  const [isShown, setIsShown] = useState(true);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setIsShown(false);
    }, 3000);

    return () => {
      // 👇️ clear timeout when component unmounts
      clearTimeout(timeoutID);
    };
  }, []);

  return (
    <div>
      {isShown ? (
        <div className="message">
          <h6>Consulta nuestra carta. ¡Reserva ya!</h6>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
