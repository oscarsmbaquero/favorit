import { useEffect, useState } from "react";
import logo from "../../assets/images/cartas/cartaNormal.jpg";

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
        <div>
          {/* <img className="logos" src={logo} alt="logo"></img> */}
          <p>Visita nuestras cartas y reserva online</p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
