import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import logo from "../../assets/images/logoF.png";
import "./Footer.scss";
import ReactWhatsapp from "react-whatsapp";
import { FormattedMessage } from "react-intl";

export default function App() {
  return (
    <MDBFooter bgColor="dark" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block text-white">
          <span><FormattedMessage id="app.footer" /></span>
        </div>

        <div>
          <a
            href="https://m.facebook.com/?tbua=1#!/profile.php?id=100087651520108&eav=AfaL-P9irUqWmW5PoIuyl-6P5jXAShnlaeIaqLmfEbwsIyziNU62dnrS4WkHreMbNug&tsid=0.055033883435088526&source=result"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="facebook-f" color="white"/>
          </a>
          {/* <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a> */}
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="google" color="white"/>
          </a>
          <a
            href="https://www.instagram.com/favorit.gastrobar/?igshid=YmMyMTA2M2Y%3D"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="instagram" color="white" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            {/* <MDBCol md="2" lg="2" xl="2" className='mx-auto my-4'>
              <img src={logo} className='logos'  alt={logo}/>
            </MDBCol> */}
            <MDBCol md="4" lg="4" xl="6" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-muted">
              <FormattedMessage id="app.horario"/>
              </h6>
              <p><FormattedMessage id="app.lunes"/>: <FormattedMessage id="app.closed"/></p>
              <p><FormattedMessage id="app.martesJueves"/>:&nbsp;11:00-17:00&nbsp;<FormattedMessage id="app.y"/>&nbsp;19:00&nbsp;<FormattedMessage id="app.cierre"/></p>
              <p><FormattedMessage id="app.viernesDomingo"/>: 12:00&nbsp;<FormattedMessage id="app.cierre"/></p>
              {/* <p><FormattedMessage id="app.domingo"/>: 12:00 - 01:30</p> */}
              
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4 ">
              <h6 className="text-uppercase fw-bold mb-4 text-muted"><FormattedMessage id="app.contact"/></h6>
              <p>
                {/* <MDBIcon icon="home" className="me-2" /> */}
                <i class="fa-sharp fa-solid fa-location-dot"></i>
                <a href="https://www.google.com/maps/dir/40.04365,-6.06593/gastro+bar+favorite/@40.0405937,-6.0837457,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0xd3e178eca5fed05:0xf13018a0bffa0458!2m2!1d-6.08123!2d40.03829"  className="mdbicon">
                  &nbsp;&nbsp;&nbsp;<FormattedMessage id="app.plaza"/> 4, Plasencia
                </a>
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" color="white" />
                <a href="mailto:favoritgastrobar@gmail.com"  className="mdbicon">
                  favoritgastrobar@gmail.com
                </a>
              </p>

              <p>
                <MDBIcon icon="phone" className="me-3" color="white"/>
                <a href="tel:+34618932661" className="mdbicon">&nbsp;+ 34 618 932 661</a>
                {/* <br /> */}
                {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="tel:+34691487362">+ 34 618 932 661</a> */}
              </p>
              <p>
              <MDBIcon color="white" fab icon="whatsapp" size='1x'/>
                <a
                  href="https://wa.me/+34618932661"
                  class="whatsapp_float"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mdbicon"
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ 34 618 932 661
                </a>
                {/* <a href="https://wa.me/+34618932661" class="whatsapp_float" target="_blank" rel="noopener noreferrer">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ 34 618 932 661
              </a> */}
              </p>

              {/* <p>
             <i class="fa-brands fa-whatsapp"></i>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <a href="tel:+34618932661">+ 34 618 932 661</a>
                 <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="tel:+34691487362">+ 34 691 487 362</a>
             </p>  */}
              {/* <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p> */}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4 text-muted"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright:
        <a className="text-reset fw-bold" href="https://oit-oscarsmbaquero.vercel.app/">
          &nbsp;App Developed by OSMB
        </a>
      </div>
    </MDBFooter>
  );
}
