import React, { Component } from "react";
import "./ReservasIcono.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/images/reservas.png";
import logo2 from "../../assets/images/logo.png";

class ReservasIcono extends Component {
  state = {
    bgImage: {logo2},
  };
  listenScrollEvent = (e) => {
    if (window.scrollY > 75) {
      this.setState({ bgImage: {logo2} });
    } else {
      this.setState({ bgImage: {logo}});
    }
    //this.setState({ bg: "transparent" });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }
  render() {
    return (
      <div className="reservas" >
        <figure>
          <Link to={"/reservas"}>
            <img src={logo} alt="logo"></img>
          </Link>
        </figure>
      </div>
    );
  }
}

export default ReservasIcono;
