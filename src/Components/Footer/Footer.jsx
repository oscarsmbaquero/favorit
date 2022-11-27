import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import logo from "../../assets/images/logoFavorit.jpeg";
import "./Footer.scss";
import ReactWhatsapp from "react-whatsapp";
export default function App() {
  return (
    <MDBFooter bgColor="dark" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Síguenos en nuestras redes sociales:</span>
        </div>

        <div>
          <a
            href="https://m.facebook.com/?tbua=1#!/profile.php?id=100087651520108&eav=AfaL-P9irUqWmW5PoIuyl-6P5jXAShnlaeIaqLmfEbwsIyziNU62dnrS4WkHreMbNug&tsid=0.055033883435088526&source=result"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="facebook-f" />
          </a>
          {/* <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a> */}
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>
          <a
            href="https://www.instagram.com/favorit.gastrobar/?igshid=YmMyMTA2M2Y%3D"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="instagram" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            {/* <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <p><img src={logo} className='logos'  alt={logo}/>
              </p>
            </MDBCol> */}
            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Entorno</h6>
              <p>
                <a href="https://www.plasencia.es/web/turismo-plasencia/guia-de-la-ciudad/conoceplasencia" className="text-reset">
                <i class="fa-solid fa-city">&nbsp;</i>
                  Plasencia
                </a>
              </p>
             <p>
             <a href="https://www.miteco.gob.es/es/red-parques-nacionales/nuestros-parques/monfrague/" className="text-reset">
                <i class="fa-solid fa-city">&nbsp;</i>
                  Monfrague
                </a>
             </p> 
              {/* <p>
                <a href='#!' className='text-reset'><i class="fa-solid fa-utensils">&nbsp;</i>
                Carta Celíacos
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'><i class="fa-solid fa-utensils">&nbsp;</i>
                Carta Vegetariana
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'><i class="fa-solid fa-beer-mug-empty">&nbsp;</i>
                Cervezas
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'><i class="fa-solid fa-wine-glass-empty">&nbsp;</i>
                Vinos
                </a>
              </p> */}
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Enlaces de interes
              </h6>
              <p>
                <a href="/reservas" className="text-reset">
                  <i class="fa-sharp fa-solid fa-address-book">&nbsp;</i>
                  Reservas
                </a>
              </p>
              <p>
                <a href="/location" className="text-reset">
                  <i class="fa-sharp fa-solid fa-location-dot">&nbsp;</i>
                  Localización
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Plaza Juan de Loaisa, Plasencia
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                <a href="mailto:favoritgastrobar@gmail.com">
                  favoritgastrobar@gmail.com
                </a>
              </p>

              <p>
                <MDBIcon icon="phone" className="me-3" />
                <a href="tel:+34618932661">&nbsp;+ 34 691 487 362</a>
                {/* <br /> */}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="tel:+34691487362">+ 34 618 932 661</a>
              </p>
              <p>
              <i class="fa-brands fa-whatsapp"></i>
              <a href="https://wa.me/+34691487362" class="whatsapp_float" target="_blank" rel="noopener noreferrer">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ 34 691 487 362
              </a>
              <a href="https://wa.me/+34618932661" class="whatsapp_float" target="_blank" rel="noopener noreferrer">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ 34 618 932 661
              </a>
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
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2022 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          &nbsp;by OSMB
        </a>
      </div>
    </MDBFooter>
  );
}
